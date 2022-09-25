import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import NuevoCliente from "./pages/NuevoCliente";
import Clientes from "./pages/Clientes";
import VerCliente from "./pages/VerCliente";
import EditarCliente from "./pages/EditarCliente";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <div className="col-layout w-1/4 bg-blue-800 h-screen">
          <Layout />
        </div>

        <div className="col-layout w-3/4">
          <Routes>
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/nuevo-cliente" element={<NuevoCliente />} />
            <Route path="/ver-cliente/:id" element={<VerCliente />} />
            <Route path="/editar/:id" element={<EditarCliente />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
