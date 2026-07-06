import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function ListaConversos() {
  const { theme, conversos, actualizarConverso } = useContext(UserContext);

  const totalConversos = conversos.length;
  const necesitanApoyo = conversos.filter(c => !c.asistencia).length;

  // Función ayudante para alternar de forma rápida entre "Si" y "No"
  const alternarSiNo = (id, campo, valorActual) => {
    const nuevoValor = valorActual === "Si" ? "No" : "Si";
    actualizarConverso(id, campo, nuevoValor);
  };

  // Función para alternar el sacerdocio (Si -> No -> N/A)
  const alternarSacerdocio = (id, campo, valorActual) => {
    let nuevoValor = "Si";
    if (valorActual === "Si") nuevoValor = "No";
    else if (valorActual === "No") nuevoValor = "---";
    actualizarConverso(id, campo, nuevoValor);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16">
      <div>
        <h1 className={`text-3xl font-bold ${theme === "light" ? "text-gray-900" : "text-white"}`}>
          Estado de la Obra Misional
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Progreso y convenios. <span className="text-indigo-400 font-semibold">💡 Toca cualquier dato para modificarlo.</span>
        </p>
      </div>

      {/* TARJETAS DE CONVERSOS */}
      <div className="grid grid-cols-1 gap-4">
        {conversos.map((converso) => (
          <div 
            key={converso.id} 
            className={`p-5 rounded-xl border border-l-4 transition-all shadow-sm ${
              converso.asistencia ? "border-l-green-500" : "border-l-red-500"
            } ${theme === "light" ? "bg-white border-gray-200" : "bg-gray-800 border-gray-700 text-white"}`}
          >
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-bold text-lg">{converso.nombre}</h3>
                  
                  {/* Botón interactivo de Asistencia */}
                  <button 
                    onClick={() => actualizarConverso(converso.id, "asistencia", !converso.asistencia)}
                    className={`text-xs px-2.5 py-1 rounded-full font-medium transition-transform active:scale-95 ${
                      converso.asistencia ? "bg-green-500/10 text-green-500 hover:bg-green-500/20" : "bg-red-500/10 text-red-500 hover:bg-red-500/20"
                    }`}
                  >
                    {converso.asistencia ? "🟢 Asiste" : "🔴 Requiere Visita"}
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-1">📅 Bautismo: <span className="text-indigo-400 font-medium">{converso.fechaBautismo}</span></p>
              </div>

              {/* REQUERIMIENTOS INTERACTIVOS */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs bg-gray-900/20 p-2.5 rounded-lg flex-1 lg:max-w-2xl">
                
                {/* Modificar Recomendación de Templo */}
                <button 
                  onClick={() => alternarSiNo(converso.id, "tieneRecomendacion", converso.tieneRecomendacion)}
                  className="flex flex-col items-start p-1.5 rounded hover:bg-gray-700/20 text-left transition-colors"
                >
                  <span className="text-gray-400 font-semibold uppercase tracking-wider scale-90 origin-left">Rec. Templo</span>
                  <span className={`font-bold ${converso.tieneRecomendacion === "Si" ? "text-green-400" : "text-gray-400"}`}>{converso.tieneRecomendacion}</span>
                </button>

                {/* Modificar Asistencia al Templo */}
                <button 
                  onClick={() => alternarSiNo(converso.id, "haIdoAlTemplo", converso.haIdoAlTemplo)}
                  className="flex flex-col items-start p-1.5 rounded hover:bg-gray-700/20 text-left transition-colors"
                >
                  <span className="text-gray-400 font-semibold uppercase tracking-wider scale-90 origin-left">Fue al Templo</span>
                  <span className={`font-bold ${converso.haIdoAlTemplo === "Si" ? "text-green-400" : "text-gray-400"}`}>{converso.haIdoAlTemplo}</span>
                </button>

                {/* Modificar Sacerdocio de Aarón */}
                <button 
                  onClick={() => alternarSacerdocio(converso.id, "sacerdoteAaron", converso.sacerdoteAaron || "No")}
                  className="flex flex-col items-start p-1.5 rounded hover:bg-gray-700/20 text-left transition-colors"
                >
                  <span className="text-gray-400 font-semibold uppercase tracking-wider scale-90 origin-left">Sacerd. Aarón</span>
                  <span className={`font-bold ${converso.sacerdoteAaron === "Si" ? "text-amber-400" : converso.sacerdoteAaron === "No" ? "text-gray-400" : "text-gray-500"}`}>
                    {converso.sacerdoteAaron || "No"}
                  </span>
                </button>

                {/* Modificar Iniciatorio / Investidura */}
                <button 
                  onClick={() => alternarSiNo(converso.id, "iniciatorioInvestidura", converso.iniciatorioInvestidura)}
                  className="flex flex-col items-start p-1.5 rounded hover:bg-gray-700/20 text-left transition-colors"
                >
                  <span className="text-gray-400 font-semibold uppercase tracking-wider scale-90 origin-left">Inic. / Invest.</span>
                  <span className={`font-bold ${converso.iniciatorioInvestidura === "Si" ? "text-purple-400" : "text-gray-400"}`}>{converso.iniciatorioInvestidura}</span>
                </button>

              </div>
            </div>

            {converso.notas && (
              <p className="text-xs text-gray-400 mt-3 pt-2 border-t border-gray-700/30">
                📝 <span className="font-semibold text-gray-300">Notas:</span> {converso.notas}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* CONTADORES RESUMEN */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
        <div className={`p-4 rounded-xl border flex items-center gap-4 ${theme === "light" ? "bg-white border-gray-200" : "bg-gray-800 border-gray-700 text-white"}`}>
          <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-500 text-xl">👥</div>
          <div>
            <p className="text-xs text-gray-400 font-medium">TOTAL CONVERSOS</p>
            <p className="text-lg font-bold">{totalConversos} Recientes</p>
          </div>
        </div>
        <div className={`p-4 rounded-xl border flex items-center gap-4 ${theme === "light" ? "bg-white border-gray-200" : "bg-gray-800 border-gray-700 text-white"}`}>
          <div className="p-3 rounded-lg bg-red-500/10 text-red-500 text-xl">⚠️</div>
          <div>
            <p className="text-xs text-gray-400 font-medium">REQUIEREN VISITA</p>
            <p className="text-lg font-bold text-red-500">{necesitanApoyo} en riesgo</p>
          </div>
        </div>
      </div>
    </div>
  );
}