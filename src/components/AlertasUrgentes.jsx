import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function AlertasUrgentes() {
  const { theme, conversos } = useContext(UserContext);

  // Filtramos para ver solo a los que necesitan apoyo (asistencia === false)
  const conversosEnRiesgo = conversos.filter(c => !c.asistencia);

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className={`text-3xl font-bold ${theme === "light" ? "text-gray-900" : "text-white"}`}>
          ⚠️ Alertas y Visitas Urgentes
        </h1>
        <p className="text-sm text-gray-500 mt-1">Lista de nuevos miembros que no asistieron recientemente.</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {conversosEnRiesgo.length === 0 ? (
          <p className="text-gray-500">🎉 ¡Excelente! Todos los miembros están asistiendo.</p>
        ) : (
          conversosEnRiesgo.map((converso) => (
            <div 
              key={converso.id} 
              className={`p-4 rounded-xl border border-l-4 border-l-red-500 ${theme === "light" ? "bg-white border-gray-200" : "bg-gray-800 border-gray-700 text-white"}`}
            >
              <h3 className="font-bold text-lg text-red-500">{converso.nombre}</h3>
              <p className="text-sm mt-1">📌 <span className="font-semibold">Plan de acción:</span> {converso.necesidad}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}