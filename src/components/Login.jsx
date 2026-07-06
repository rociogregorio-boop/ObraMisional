import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Login() {
  const { login } = useContext(UserContext);
  const [username, setUsername] = useState("");

  const handleEntrar = (e) => {
    e.preventDefault();
    if (username.trim()) {
      login({
        name: username,
        email: "barrio@misional.com",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 p-4">
      <form onSubmit={handleEntrar} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md max-w-sm w-full space-y-4 border dark:border-gray-800">
        <h2 className="text-xl font-bold text-center dark:text-white">⛪ Acceso Obra Misional</h2>
        <input 
          type="text" 
          placeholder="Tu Nombre (Ej: Élder Jones)" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg text-sm bg-transparent dark:text-white"
        />
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg text-sm font-semibold">
          Entrar al Sistema
        </button>
      </form>
    </div>
  );
}