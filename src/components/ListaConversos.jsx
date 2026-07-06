import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function ListaConversos() {
  const { theme, conversos } = useContext(UserContext); // Traemos los conversos globales

  const totalConversos = conversos.length;
  const necesitanApoyo = conversos.filter(c => !c.asistencia).length;

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className={`text-3xl font-bold ${theme === "light" ? "text-gray-900" : "text-white"}`}>
          Estado de la Obra Misional
        </h1>
        <p className="text-sm text-gray-500 mt-1">Progreso y hermanamiento de los nuevos miembros del barrio.</p>
      </div>

      {/* LISTA DE TARJETAS */}
      <div className="grid grid-cols-1 gap-4">
        {conversos.map((converso) => (
          <div 
            key={converso.id}
            className={`p-6 rounded-xl border transition-all ${
              theme === "light" ? "bg-white border-gray-200" : "bg-gray-800 border-gray-700 text-white"
            } ${!converso.asistencia ? "border-l-4 border-l-red-500" : "border-l-4 border-l-emerald-500"}`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-bold text-lg">{converso.nombre}</h2>
                  <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                    converso.asistencia ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300" : "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
                  }`}>
                    {converso.asistencia ? "🟢 Asiste" : "🔴 Requiere Visita"}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Senda del Convenio: <span className="font-semibold text-indigo-500">{converso.sendaConvenio}</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="block text-xs font-semibold text-gray-400 uppercase">Hermanamiento</span>
                  <p className="font-medium">{converso.hermanamiento}</p>
                </div>
                <div>
                  <span className="block text-xs font-semibold text-gray-400 uppercase">Entrevista Obispo</span>
                  <p className="font-medium text-amber-500">{converso.entrevistaObispo}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              📌 <span className="font-semibold text-gray-700 dark:text-gray-300">Necesidad actual:</span> {converso.necesidad}
            </div>
          </div>
        ))}
      </div>

      {/* RESUMEN ESTADÍSTICO INFERIOR */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        <div className={`p-4 rounded-xl border flex items-center gap-4 ${theme === "light" ? "bg-white border-gray-200" : "bg-gray-800 border-gray-700 text-white"}`}>
          <span className="text-xl p-2 bg-indigo-50 dark:bg-gray-700 text-indigo-500 rounded-lg">👥</span>
          <div>
            <p className="text-xs text-gray-400 font-semibold uppercase">Total Conversos</p>
            <p className="text-base font-bold">{totalConversos} Recientes</p>
          </div>
        </div>
        <div className={`p-4 rounded-xl border flex items-center gap-4 ${theme === "light" ? "bg-white border-gray-200" : "bg-gray-800 border-gray-700 text-white"}`}>
          <span className="text-xl p-2 bg-red-50 dark:bg-gray-700 text-red-500 rounded-lg">⚠️</span>
          <div>
            <p className="text-xs text-gray-400 font-semibold uppercase">No asisten</p>
            <p className="text-base font-bold text-red-500">{necesitanApoyo} en riesgo</p>
          </div>
        </div>
        <div className={`p-4 rounded-xl border flex items-center gap-4 ${theme === "light" ? "bg-white border-gray-200" : "bg-gray-800 border-gray-700 text-white"}`}>
          <span className="text-xl p-2 bg-emerald-50 dark:bg-gray-700 text-emerald-500 rounded-lg">🤝</span>
          <div>
            <p className="text-xs text-gray-400 font-semibold uppercase">Hermanados</p>
            <p className="text-base font-bold">100% Asignados</p>
          </div>
        </div>
      </div>
    </div>
  );
}