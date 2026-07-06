import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function ConfigBarrio() {
  const { theme, agregarConverso } = useContext(UserContext);
  const navigate = useNavigate();

  // Estados locales para controlar los nuevos requerimientos
  const [nombre, setNombre] = useState("");
  const [fechaBautismo, setFechaBautismo] = useState("");
  const [tieneRecomendacion, setTieneRecomendacion] = useState("No");
  const [haIdoAlTemplo, setHaIdoAlTemplo] = useState("No");
  const [sacerdoteAaron, setSacerdoteAaron] = useState("No");
  const [iniciatorioInvestidura, setIniciatorioInvestidura] = useState("No");
  const [sacerdoteMelquisedec, setSacerdoteMelquisedec] = useState("No");
  const [notas, setNotas] = useState("");
  const [asistencia, setAsistencia] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim()) return alert("Por favor, ingresa el nombre del converso.");

    const nuevo = {
      nombre,
      fechaBautismo: fechaBautismo || "---",
      tieneRecomendacion,
      haIdoAlTemplo,
      sacerdoteAaron,
      iniciatorioInvestidura,
      sacerdoteMelquisedec,
      notas: notas || "",
      asistencia
    };

    agregarConverso(nuevo);
    alert("¡Converso registrado con éxito en el sistema del Barrio!");
    navigate("/");
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12">
      <div>
        <h1 className={`text-3xl font-bold ${theme === "light" ? "text-gray-900" : "text-white"}`}>
          ⚙️ Registro y Requerimientos
        </h1>
        <p className="text-sm text-gray-500 mt-1">Añade miembros y gestiona el progreso de sus ordenanzas en el templo y sacerdocio.</p>
      </div>

      <div className={`p-6 rounded-xl border ${theme === "light" ? "bg-white border-gray-200" : "bg-gray-800 border-gray-700 text-white"}`}>
        <h2 className="font-bold text-lg mb-4 flex items-center gap-2">👤 Ficha de Progreso del Converso</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Nombre Completo</label>
              <input 
                type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}
                placeholder="Ej: Gustavo Caamaño"
                className={`w-full px-3 py-2 border rounded-lg text-sm outline-none ${theme === "light" ? "bg-white border-gray-200" : "bg-gray-900 border-gray-700 text-white"}`}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Fecha Bautismo y Confirmación</label>
              <input 
                type="text" value={fechaBautismo} onChange={(e) => setFechaBautismo(e.target.value)}
                placeholder="Ej: 1/6/2025 o Bautismo 19/7..."
                className={`w-full px-3 py-2 border rounded-lg text-sm outline-none ${theme === "light" ? "bg-white border-gray-200" : "bg-gray-900 border-gray-700 text-white"}`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">¿Tiene Recomendación?</label>
              <select value={tieneRecomendacion} onChange={(e) => setTieneRecomendacion(e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg text-sm outline-none ${theme === "light" ? "bg-white border-gray-200" : "bg-gray-900 border-gray-700 text-white"}`}>
                <option value="No">No</option>
                <option value="Si">Si</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">¿Ha ido al Templo?</label>
              <select value={haIdoAlTemplo} onChange={(e) => setHaIdoAlTemplo(e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg text-sm outline-none ${theme === "light" ? "bg-white border-gray-200" : "bg-gray-900 border-gray-700 text-white"}`}>
                <option value="No">No</option>
                <option value="Si">Si</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Asistencia Dominical</label>
              <select value={asistencia} onChange={(e) => setAsistencia(e.target.value === "true")}
                className={`w-full px-3 py-2 border rounded-lg text-sm outline-none ${theme === "light" ? "bg-white border-gray-200" : "bg-gray-900 border-gray-700 text-white"}`}>
                <option value="true">🟢 Asiste con regularidad</option>
                <option value="false">🔴 Requiere Visita</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t pt-4 border-gray-700/30">
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Sacerdocio Aarón (Varones)</label>
              <select value={sacerdoteAaron} onChange={(e) => setSacerdoteAaron(e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg text-sm outline-none ${theme === "light" ? "bg-white border-gray-200" : "bg-gray-900 border-gray-700 text-white"}`}>
                <option value="No">No</option>
                <option value="Si">Si</option>
                <option value="---">N/A (Mujeres)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Iniciatorio e Investidura</label>
              <select value={iniciatorioInvestidura} onChange={(e) => setIniciatorioInvestidura(e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg text-sm outline-none ${theme === "light" ? "bg-white border-gray-200" : "bg-gray-900 border-gray-700 text-white"}`}>
                <option value="No">No</option>
                <option value="Si">Si</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Sacerdocio Melquisedec</label>
              <select value={sacerdoteMelquisedec} onChange={(e) => setSacerdoteMelquisedec(e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg text-sm outline-none ${theme === "light" ? "bg-white border-gray-200" : "bg-gray-900 border-gray-700 text-white"}`}>
                <option value="No">No</option>
                <option value="Si">Si</option>
                <option value="---">N/A (Mujeres)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Notas / Observaciones</label>
            <textarea 
              value={notas} onChange={(e) => setNotas(e.target.value)}
              placeholder="Ej: Hija de Nely, necesita transporte..." rows="2"
              className={`w-full px-3 py-2 border rounded-lg text-sm outline-none ${theme === "light" ? "bg-white border-gray-200" : "bg-gray-900 border-gray-700 text-white"}`}
            ></textarea>
          </div>

          <div className="flex justify-end pt-2">
            <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow-sm transition-colors">
              Guardar en Base de Datos
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}