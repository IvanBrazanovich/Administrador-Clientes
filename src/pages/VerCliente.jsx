import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VerCliente = () => {
  const [cliente, setCliente] = useState({});
  const { id } = useParams();

  useEffect(() => {
    console.log(id);

    const fetchCliente = async () => {
      try {
        const url = `http://localhost:3000/clientes/${id}`;
        console.log(url);
        const response = await fetch(url);

        const res = await response.json();
        console.log(res);
        setCliente(res);
        //Actualizar clientes
      } catch (err) {
        console.log(err);
      }
    };

    fetchCliente();
  }, [id]);

  return (
    <div className="nuevo-cliente container py-10 px-12 mx-auto h-screen overflow-scroll ">
      <h1 className="text-blue-800 text-4xl font-black">
        Ver Cliente: {cliente.nombre}
      </h1>
      <p className="text-xl my-4"> Información del cliente</p>

      <div className="cliente-info">
        <p className="text-3xl  my-2">
          <span className="uppercase font-bold">Cliente:</span> {cliente.nombre}
        </p>

        <p className="text-xl my-2">
          <span className="uppercase font-bold">email:</span> {cliente.email}
        </p>
        <p className="text-xl my-2">
          <span className="uppercase font-bold">Telefono:</span>{" "}
          {cliente.telefono}
        </p>
        <p className="text-xl my-2">
          <span className="uppercase font-bold">Empresa:</span>{" "}
          {cliente.empresa}
        </p>
      </div>
    </div>
  );
};

export default VerCliente;
