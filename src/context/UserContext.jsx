import { createContext, useState } from "react";

export const UserContext = createContext();

const datosIniciales = [
  { id: 1, nombre: "Gustavo Santiago Caamaño", fechaBautismo: "1/6/2025", tieneRecomendacion: "No", haIdoAlTemplo: "No", sacerdoteAaron: "Si", iniciatorioInvestidura: "No", sacerdoteMelquisedec: "Si", notas: "", asistencia: true },
  { id: 2, nombre: "Giovanni Francisco Bustos Sanchez", fechaBautismo: "1/2/2026", tieneRecomendacion: "Si", haIdoAlTemplo: "Si", sacerdoteAaron: "Si", iniciatorioInvestidura: "No", sacerdoteMelquisedec: "No", notas: "", asistencia: true },
  { id: 3, nombre: "Santino Lucas Bustos Sanchez", fechaBautismo: "1/2/2026", tieneRecomendacion: "Si", haIdoAlTemplo: "Si", sacerdoteAaron: "Si", iniciatorioInvestidura: "No", sacerdoteMelquisedec: "No", notas: "", asistencia: true },
  { id: 4, nombre: "Leonardo Danilo Escobar Diaz", fechaBautismo: "25/10/2025", tieneRecomendacion: "No", haIdoAlTemplo: "No", sacerdoteAaron: "No", iniciatorioInvestidura: "No", sacerdoteMelquisedec: "No", notas: "", asistencia: true },
  { id: 5, nombre: "Guillermo Pablo Galligani", fechaBautismo: "27/4/2025", tieneRecomendacion: "Si", haIdoAlTemplo: "Si", sacerdoteAaron: "Si", iniciatorioInvestidura: "No", sacerdoteMelquisedec: "Si", notas: "", asistencia: true },
  { id: 6, nombre: "Nely Gonzales Gomez", fechaBautismo: "Bautizado 19/7/2025 - Confirmado 31/8/2025", tieneRecomendacion: "No", haIdoAlTemplo: "No", sacerdoteAaron: "---", iniciatorioInvestidura: "No", notas: "", asistencia: true },
  { id: 7, nombre: "Juliette Elena Gonzales", fechaBautismo: "Bautizado 19/7/2025 - Confirmado 31/8/2025", tieneRecomendacion: "No", haIdoAlTemplo: "No", sacerdoteAaron: "---", iniciatorioInvestidura: "No", notas: "Hija de Nely", asistencia: true },
  { id: 8, font: "bold", nombre: "Virginia Margarita Gomez Sosa", fechaBautismo: "2/11/2025", tieneRecomendacion: "No", haIdoAlTemplo: "No", sacerdoteAaron: "---", iniciatorioInvestidura: "No", notas: "", asistencia: true },
  { id: 9, nombre: "Debora Vanessa Moreno Celiz", fechaBautismo: "1/2/2026", tieneRecomendacion: "No", haIdoAlTemplo: "No", sacerdoteAaron: "---", iniciatorioInvestidura: "No", notas: "", asistencia: true },
  { id: 10, nombre: "Karen Andrea Ocampo", fechaBautismo: "Bautizado 29/11/2025 - Confirmado 30/11/2025", tieneRecomendacion: "No", haIdoAlTemplo: "No", sacerdoteAaron: "---", iniciatorioInvestidura: "No", notas: "", asistencia: true },
  { id: 11, nombre: "Denice Odile Celina Plana", fechaBautismo: "3/10/2025", tieneRecomendacion: "No", haIdoAlTemplo: "No", sacerdoteAaron: "---", iniciatorioInvestidura: "No", notas: "", asistencia: true },
  { id: 12, nombre: "María Antonella Milagros Quipildor", fechaBautismo: "22/6/2025", tieneRecomendacion: "Si", haIdoAlTemplo: "Si", sacerdoteAaron: "---", iniciatorioInvestidura: "No", notas: "", asistencia: true },
  { id: 13, nombre: "Evelyn Del Rosario Romero Garcia", fechaBautismo: "2/3/2025", tieneRecomendacion: "No", haIdoAlTemplo: "No", sacerdoteAaron: "---", iniciatorioInvestidura: "No", notas: "", asistencia: true },
  { id: 14, font: "bold", nombre: "Jennifer María Salomé Rojas", fechaBautismo: "1/2/2026", tieneRecomendacion: "No", haIdoAlTemplo: "No", sacerdoteAaron: "---", iniciatorioInvestidura: "No", notas: "", asistencia: true },
  { id: 15, nombre: "Edwin Ezequiel Toledo", fechaBautismo: "9/2/2025", tieneRecomendacion: "No", haIdoAlTemplo: "No", sacerdoteAaron: "No", iniciatorioInvestidura: "No", sacerdoteMelquisedec: "No", notas: "", asistencia: true },
  { id: 16, nombre: "Carlos Ariel Cabrera", fechaBautismo: "22/2/2026", tieneRecomendacion: "No", haIdoAlTemplo: "No", sacerdoteAaron: "Si", iniciatorioInvestidura: "No", sacerdoteMelquisedec: "No", notas: "", asistencia: true },
  { id: 17, nombre: "Thiago Nahuel Cabrera", fechaBautismo: "1/3/2026", tieneRecomendacion: "No", haIdoAlTemplo: "No", sacerdoteAaron: "No", iniciatorioInvestidura: "No", sacerdoteMelquisedec: "No", notas: "Hijo de Ariel", asistencia: true },
  { id: 18, nombre: "Iber Alfredo Osiris Quispe", fechaBautismo: "3/1/2026", tieneRecomendacion: "Si", haIdoAlTemplo: "Si", sacerdoteAaron: "Si", iniciatorioInvestidura: "No", sacerdoteMelquisedec: "Si", notas: "", asistencia: true },
  { id: 19, nombre: "Jorge Maximiliano Argüello", fechaBautismo: "21/12/2025", tieneRecomendacion: "Si", haIdoAlTemplo: "Si", sacerdoteAaron: "Si", iniciatorioInvestidura: "No", sacerdoteMelquisedec: "No", notas: "", asistencia: true },
  { id: 20, nombre: "Luciano Joaquin Romano", fechaBautismo: "8/2/2026", tieneRecomendacion: "No", haIdoAlTemplo: "No", sacerdoteAaron: "No", iniciatorioInvestidura: "No", sacerdoteMelquisedec: "No", notas: "", asistencia: true },
  { id: 21, nombre: "Julio Cesar Grados Mandamiento", fechaBautismo: "22/2/2026", tieneRecomendacion: "No", haIdoAlTemplo: "No", sacerdoteAaron: "No", iniciatorioInvestidura: "No", sacerdoteMelquisedec: "No", notas: "", asistencia: true },
  { id: 22, nombre: "Sebastian Alejandro Acuña", fechaBautismo: "22/3/2026", tieneRecomendacion: "Si", haIdoAlTemplo: "No", sacerdoteAaron: "Si", iniciatorioInvestidura: "No", sacerdoteMelquisedec: "No", notas: "", asistencia: true },
  { id: 23, nombre: "Milagros Catalina Iudicello", fechaBautismo: "24/5/2026", tieneRecomendacion: "Si", haIdoAlTemplo: "No", sacerdoteAaron: "---", iniciatorioInvestidura: "No", notas: "", asistencia: true },
  { id: 24, nombre: "Thiago Samuel Lázaro Garcia", fechaBautismo: "12/4/2026", tieneRecomendacion: "Si", haIdoAlTemplo: "No", sacerdoteAaron: "Si", iniciatorioInvestidura: "No", notas: "", asistencia: true },
  { id: 25, nombre: "Lucas Alexis Groh", fechaBautismo: "Bautismo 31/5/26, confirmado 07/6/26", tieneRecomendacion: "No", haIdoAlTemplo: "No", sacerdoteAaron: "No", iniciatorioInvestidura: "No", sacerdoteMelquisedec: "No", notas: "", asistencia: true },
  { id: 26, nombre: "Lourdes Natali Chavez", fechaBautismo: "---", tieneRecomendacion: "Si", haIdoAlTemplo: "No", sacerdoteAaron: "---", iniciatorioInvestidura: "No", notas: "", asistencia: true }
];

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "Hna. Misionera",
    email: "barrio@misional.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
  });
  
  const [theme, setTheme] = useState("light");
  const [conversos, setConversos] = useState(datosIniciales);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));
  const logout = () => setUser(null);
  const login = (userData) => setUser(userData); 
  
  const agregarConverso = (nuevoConverso) => {
    setConversos([...conversos, { ...nuevoConverso, id: Date.now() }]);
  };

  // 🔥 AQUÍ SE AGREGÓ LA FUNCIÓN:
  const actualizarConverso = (id, campo, nuevoValor) => {
    setConversos(
      conversos.map((c) => (c.id === id ? { ...c, [campo]: nuevoValor } : c))
    );
  };

  return (
    // 🔥 AQUÍ SE AGREGÓ "actualizarConverso" EN EL VALUE:
    <UserContext.Provider value={{ user, theme, toggleTheme, logout, login, conversos, agregarConverso, actualizarConverso }}>
      {children}
    </UserContext.Provider>
  );
}