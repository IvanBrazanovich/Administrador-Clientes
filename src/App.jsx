import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import NuevoCliente from "./pages/NuevoCliente";
import Clientes from "./pages/Clientes";

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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
