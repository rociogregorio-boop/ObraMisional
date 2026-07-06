import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext, UserProvider } from "./context/UserContext";
import Login from "./components/Login";
import DashboardLayout from "./components/DashboardLayout";
import ListaConversos from "./components/ListaConversos";
import AlertasUrgentes from "./components/AlertasUrgentes";
import ConfigBarrio from "./components/ConfigBarrio";

function AppRoutes() {
  const { user } = useContext(UserContext);

  // Si no hay usuario logueado, lo obligamos a ir al Login
  if (!user) {
    return <Login />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* El DashboardLayout actúa como la estructura base con la barra lateral */}
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<ListaConversos />} />
          <Route path="urgentes" element={<AlertasUrgentes />} />
          <Route path="configuracion" element={<ConfigBarrio />} />
        </Route>
        {/* Redirección por si escriben cualquier otra ruta errónea */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  );
}