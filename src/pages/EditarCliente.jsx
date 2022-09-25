import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Formulario from "../components/Formulario";

const EditarCliente = () => {
  const { id } = useParams();
  const [cliente, setCliente] = useState({});

  useEffect(() => {
    const fetchEdit = async () => {
      try {
        const url = `${import.meta.env.VITE_APP_API_URL}/${id}`;
        const response = await fetch(url);

        const res = await response.json();
        setCliente(res);
        //Actualizar clientes
      } catch (err) {
        console.log(err);
      }
    };
    fetchEdit();
  }, [id]);

  return (
    <div className="nuevo-cliente container py-10 px-8 mx-auto h-screen overflow-scroll ">
      <h1 className="text-blue-800 text-4xl font-black">Editar Cliente</h1>
      <p className="text-xl mt-4">
        {" "}
        Llena los siguientes campos para cambiar la información del cliente
      </p>

      <Formulario cliente={cliente} />
    </div>
  );
};

export default EditarCliente;
