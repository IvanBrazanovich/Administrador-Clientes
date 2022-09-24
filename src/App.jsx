import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import NuevoCliente from "./pages/NuevoCliente";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <div className="col-layout w-1/4 bg-blue-800 h-screen">
          <Layout />
        </div>

        <Routes>
          <Route path="/nuevo-cliente" element={<NuevoCliente />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
