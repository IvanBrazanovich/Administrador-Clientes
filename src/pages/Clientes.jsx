import React, { useEffect } from "react";
import { useState } from "react";
import Cliente from "../components/Cliente";

const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const url = "http://localhost:3000/clientes";
        const response = await fetch(url);
        const res = await response.json();

        setClientes(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchApi();
  }, []);

  return (
    <div className="nuevo-cliente container py-10 px-12 mx-auto h-screen overflow-scroll ">
      <h1 className="text-blue-800 text-4xl font-black">Clientes</h1>
      <p className="text-xl mt-4"> Administra tus clientes</p>

      <table className="w-full border-collapse border-spacing-y-5 ">
        <thead className="bg-blue-800 text-white text-xl ">
          <tr className="my-5 py-6">
            <th>Nombre</th>
            <th>Contacto</th>
            <th>Empresa</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {clientes.map((cliente) => {
            return <Cliente key={cliente.id} cliente={cliente} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Clientes;
