import { useContext } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function DashboardLayout() {
  const { user, theme, logout, toggleTheme } = useContext(UserContext);
  const location = useLocation();

  return (
    <div className={`flex min-h-screen transition-colors duration-200 ${theme === "light" ? "bg-gray-50" : "bg-gray-950"}`}>
      
      {/* SIDEBAR */}
      <aside className={`w-64 hidden md:flex flex-col justify-between p-6 border-r transition-colors duration-200 ${theme === "light" ? "bg-white border-gray-200 text-gray-700" : "bg-gray-900 border-gray-800 text-gray-300"}`}>
        <div className="space-y-6">
          <div className="text-xl font-bold tracking-wider text-indigo-600 flex items-center gap-2">
            <span>⛪</span> Obra Misional
          </div>
          <nav className="space-y-1 text-sm font-semibold">
            <Link 
              to="/" 
              className={`w-full flex items-center gap-2 px-4 py-2.5 rounded-lg transition-colors ${location.pathname === "/" ? "bg-indigo-50 text-indigo-600 dark:bg-gray-800 dark:text-white" : "hover:bg-gray-100 dark:hover:bg-gray-800"}`}
            >
              👥 Lista de Conversos
            </Link>
            <Link 
              to="/urgentes" 
              className={`w-full flex items-center gap-2 px-4 py-2.5 rounded-lg transition-colors ${location.pathname === "/urgentes" ? "bg-indigo-50 text-indigo-600 dark:bg-gray-800 dark:text-white" : "hover:bg-gray-100 dark:hover:bg-gray-800"}`}
            >
              ⚠️ Alertas y Visitas
            </Link>
            <Link 
              to="/configuracion" 
              className={`w-full flex items-center gap-2 px-4 py-2.5 rounded-lg transition-colors ${location.pathname === "/configuracion" ? "bg-indigo-50 text-indigo-600 dark:bg-gray-800 dark:text-white" : "hover:bg-gray-100 dark:hover:bg-gray-800"}`}
            >
              ⚙️ Config. de Barrio
            </Link>
          </nav>
        </div>

        <button onClick={logout} className="w-full bg-red-50 hover:bg-red-100 text-red-600 py-2.5 rounded-lg font-bold text-xs border border-red-200 transition-colors dark:bg-red-950 dark:border-red-900 dark:text-red-400">
          Cerrar Sesión
        </button>
      </aside>

      {/* CONTENIDO DERECHO */}
      <div className="flex-1 flex flex-col">
        {/* HEADER */}
        <header className={`h-16 px-6 border-b flex items-center justify-between transition-colors duration-200 ${theme === "light" ? "bg-white border-gray-200 text-gray-800" : "bg-gray-900 border-gray-800 text-white"}`}>
          <div className="text-xs uppercase tracking-wider font-bold text-gray-400">
            Progreso: <span className="text-indigo-600 font-bold">{location.pathname === "/" ? "Todos los Conversos" : location.pathname.replace("/", "")}</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
              {theme === "light" ? "🌙" : "☀️"}
            </button>
            <div className="flex items-center gap-3">
              <img src={user?.avatar} alt="avatar" className="w-8 h-8 rounded-full border-2 border-indigo-500 object-cover" />
              <span className="text-sm font-bold">{user?.name}</span>
            </div>
          </div>
        </header>

        {/* CONTENIDO INTERNO */}
        <main className="p-6 sm:p-8 flex-grow">
          <Outlet />
        </main>
      </div>
    </div>
  );
}