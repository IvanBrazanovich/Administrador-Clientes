import React from "react";
import Formulario from "../components/Formulario";

const NuevoCliente = () => {
  return (
    <div className="nuevo-cliente container py-10 px-8 mx-auto h-screen overflow-scroll ">
      <h1 className="text-blue-800 text-4xl font-black">Nuevo Cliente</h1>
      <p className="text-xl mt-4">
        {" "}
        Llena los siguientes campos para registrar un cliente
      </p>

      <Formulario />
    </div>
  );
};

export default NuevoCliente;
