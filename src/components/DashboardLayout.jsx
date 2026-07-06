import { useContext, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function DashboardLayout() {
  const { user, theme, toggleTheme, logout } = useContext(UserContext);
  const location = useLocation();

  // Enlaces de navegación
  const links = [
    { name: "Lista de Conversos", path: "/", icon: "👥" },
    { name: "Alertas y Visitas", path: "/urgentes", icon: "⚠️" },
    { name: "Config. de Barrio", path: "/configuracion", icon: "⚙️" },
  ];

  return (
    <div className={`min-h-screen flex ${theme === "light" ? "bg-gray-50" : "bg-gray-950"}`}>
      
      {/* 💻 BARRA LATERAL: Solo se muestra en pantallas medianas y grandes (md:flex) */}
      <aside className={`w-64 hidden md:flex flex-col justify-between p-4 border-r ${theme === "light" ? "bg-white border-gray-200" : "bg-gray-900 border-gray-800"}`}>
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-indigo-600 flex items-center gap-2 px-2">
            ⛪ Obra Misional
          </h2>
          <nav className="space-y-1">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-indigo-600 text-white"
                      : theme === "light"
                      ? "text-gray-600 hover:bg-gray-100"
                      : "text-gray-400 hover:bg-gray-800"
                  }`}
                >
                  <span>{link.icon}</span>
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <button
          onClick={logout}
          className="w-full bg-red-600/10 hover:bg-red-600 text-red-600 hover:text-white py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Cerrar Sesión
        </button>
      </aside>

      {/* 📱 CONTENIDO PRINCIPAL Y BARRA SUPERIOR */}
      <div className="flex-1 flex flex-col min-w-0 pb-20 md:pb-0"> {/* pb-20 evita que la barra móvil tape el contenido */}
        
        {/* TOPBAR */}
        <header className={`p-4 border-b flex justify-between items-center ${theme === "light" ? "bg-white border-gray-200" : "bg-gray-900 border-gray-800"}`}>
          <div className="md:hidden font-bold text-lg text-indigo-600">⛪ Obra Misional</div>
          <div className="hidden md:block text-xs uppercase tracking-wider text-gray-400 font-semibold">
            Progreso: Todos los conversos
          </div>
          
          <div className="flex items-center gap-4 ml-auto">
            <button onClick={toggleTheme} className="text-xl p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              {theme === "light" ? "🌙" : "☀️"}
            </button>
            <div className="flex items-center gap-2">
              <img src={user?.avatar} alt="Avatar" className="w-8 h-8 rounded-full border" />
              <span className={`text-sm font-medium hidden sm:inline ${theme === "light" ? "text-gray-700" : "text-gray-200"}`}>
                {user?.name}
              </span>
            </div>
          </div>
        </header>

        {/* VISTA DE LAS PÁGINAS */}
        <main className="p-4 md:p-8 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* 📱 BARRA DE NAVEGACIÓN INFERIOR: Solo visible en celulares (md:hidden) */}
      <nav className={`fixed bottom-0 left-0 right-0 z-50 md:hidden border-t flex justify-around items-center py-2 backdrop-blur-md shadow-lg ${
        theme === "light" ? "bg-white/90 border-gray-200" : "bg-gray-900/90 border-gray-800"
      }`}>
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`flex flex-col items-center gap-0.5 text-xs font-medium transition-colors ${
                isActive ? "text-indigo-500" : "text-gray-400"
              }`}
            >
              <span className="text-xl">{link.icon}</span>
              <span className="scale-90">{link.name.split(" ")[0]}</span> {/* Muestra solo la primera palabra para que no ocupe espacio */}
            </Link>
          );
        })}
        {/* Botón de cerrar sesión rápido en celular */}
        <button
          onClick={logout}
          className="flex flex-col items-center gap-0.5 text-xs font-medium text-red-400"
        >
          <span className="text-xl">🚪</span>
          <span className="scale-90">Salir</span>
        </button>
      </nav>

    </div>
  );
}