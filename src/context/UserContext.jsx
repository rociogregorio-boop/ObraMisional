import { createContext, useState } from "react";

export const UserContext = createContext();

const datosIniciales = [
  {
    id: 1,
    nombre: "Manuel Espinoza",
    sendaConvenio: "Confirmado",
    asistencia: true,
    hermanamiento: "Familia Quispe",
    entrevistaObispo: "Este domingo 10:00 AM",
    necesidad: "Orientación sobre cómo prepararse para el sacerdocio."
  },
  {
    id: 2,
    nombre: "Estela Benítez",
    sendaConvenio: "Bautizada",
    asistencia: false,
    hermanamiento: "Ninguno",
    entrevistaObispo: "Pendiente agendar",
    necesidad: "No tiene transporte para asistir los domingos."
  }
];

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "Hna. Misionera",
    email: "barrio@misional.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
  });
  
  const [theme, setTheme] = useState("light");
  const [conversos, setConversos] = useState(datosIniciales);

  // Declaraciones únicas (sin duplicar)
  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));
  const logout = () => setUser(null);
  const login = (userData) => setUser(userData); 
  
  const agregarConverso = (nuevoConverso) => {
    setConversos([...conversos, { ...nuevoConverso, id: Date.now() }]);
  };

  return (
    <UserContext.Provider value={{ user, theme, toggleTheme, logout, login, conversos, agregarConverso }}>
      {children}
    </UserContext.Provider>
  );
}