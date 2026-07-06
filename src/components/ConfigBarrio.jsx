import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function ConfigBarrio() {
  const { theme, agregarConverso } = useContext(UserContext);
  const navigate = useNavigate();

  // Estados locales para controlar los inputs del formulario
  const [nombre, setNombre] = useState("");
  const [senda, setSenda] = useState("Bautizado");
  const [asistencia, setAsistencia] = useState(true);
  const [hermanamiento, setHermanamiento] = useState("");
  const [entrevista, setEntrevista] = useState("");
  const [necesidad, setNecesidad] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim()) return alert("Por favor, ingresa el nombre del converso.");

    // Estructuramos el nuevo objeto
    const nuevo = {
      nombre,
      sendaConvenio: senda,
      asistencia,
      hermanamiento: hermanamiento || "Ninguno",
      entrevistaObispo: entrevista || "Pendiente agendar",
      necesidad: necesidad || "Ninguna registrada."
    };

    agregarConverso(nuevo);
    alert("¡Converso registrado exitosamente!");
    
    // Redirigimos automáticamente a la lista para ver el cambio
    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className={`text-3xl font-bold ${theme === "light" ? "text-gray-900" : "text-white"}`}>
          ⚙️ Configuración y Registro
        </h1>
        <p className="text-sm text-gray-500 mt-1">Ingresa nuevos conversos al sistema de seguimiento del barrio.</p>
      </div>

      <div className={`p-6 rounded-xl border ${theme === "light" ? "bg-white border-gray-200" : "bg-gray-800 border-gray-700 text-white"}`}>
        <h2 className="font-bold text-lg mb-4 flex items-center gap-2">👤 Registrar Nuevo Miembro</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Nombre Completo</label>
            <input 
              type="text" 
              value={nombre} 
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej: Juan Pérez"
              className={`w-full px-3 py-2 border rounded-lg text-sm outline-none ${theme === "light" ? "bg-white border-gray-200" : "bg-gray-900 border-gray-700 text-white"}`}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Senda del Convenio</label>
              <select 
                value={senda} 
                onChange={(e) => setSenda(e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg text-sm outline-none ${theme === "light" ? "bg-white border-gray-200" : "bg-gray-900 border-gray-700 text-white"}`}
              >
                <option value="Bautizado">Bautizado</option>
                <option value="Confirmado">Confirmado</option>
                <option value="Sacerdocio / Progreso">Sacerdocio / Progreso Personal</option>
                <option value="Preparación Templo">Preparación para el Templo</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Asistencia Dominical</label>
              <select 
                value={asistencia} 
                onChange={(e) => setAsistencia(e.target.value === "true")}
                className={`w-full px-3 py-2 border rounded-lg text-sm outline-none ${theme === "light" ? "bg-white border-gray-200" : "bg-gray-900 border-gray-700 text-white"}`}
              >
                <option value="true">🟢 Asiste con regularidad</option>
                <option value="false">🔴 Requiere apoyo / No asiste</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Hermanamiento Asignado</label>
              <input 
                type="text" 
                value={hermanamiento} 
                onChange={(e) => setHermanamiento(e.target.value)}
                placeholder="Ej: Familia Martínez"
                className={`w-full px-3 py-2 border rounded-lg text-sm outline-none ${theme === "light" ? "bg-white border-gray-200" : "bg-gray-900 border-gray-700 text-white"}`}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Próxima Entrevista Obispo</label>
              <input 
                type="text" 
                value={entrevista} 
                onChange={(e) => setEntrevista(e.target.value)}
                placeholder="Ej: Domingo 11:30 AM"
                className={`w-full px-3 py-2 border rounded-lg text-sm outline-none ${theme === "light" ? "bg-white border-gray-200" : "bg-gray-900 border-gray-700 text-white"}`}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Necesidad Específica</label>
            <textarea 
              value={necesidad} 
              onChange={(e) => setNecesidad(e.target.value)}
              placeholder="¿Qué necesitan los élderes saber o proveer para este converso?"
              rows="3"
              className={`w-full px-3 py-2 border rounded-lg text-sm outline-none ${theme === "light" ? "bg-white border-gray-200" : "bg-gray-900 border-gray-700 text-white"}`}
            ></textarea>
          </div>

          <div className="flex justify-end pt-2">
            <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow-sm transition-colors">
              Guardar Miembro
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}