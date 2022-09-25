import React from "react";
import { useNavigate } from "react-router-dom";

const Cliente = ({ cliente, deleteCliente }) => {
  const navigate = useNavigate();
  const { nombre, empresa, telefono, id, notas, email } = cliente;
  return (
    <tr className="  border-b-2 font-semibold border-slate-200 rounded-md bg-white">
      <td className="p-3 w-2/12"> {nombre}</td>
      <td className="w-5/12">
        <p>
          {" "}
          <span className="font-bold uppercase">Email: </span>
          {email}
        </p>
        <p>
          <span className="font-bold uppercase">Tel: </span>
          {telefono}
        </p>
      </td>
      <td className="p-3 w-2/12">{empresa}</td>
      <td className="flex flex-col gap-2 my-4 ">
        <button
          onClick={() => navigate(`/ver-cliente/${id}`)}
          className="py-1 w-3/4 mx-auto bg-blue-600 rounded-sm text-white uppercase font-bold  "
        >
          Ver
        </button>
        <button className="py-1 w-3/4 mx-auto bg-indigo-800  rounded-sm text-white uppercase font-bold  ">
          Editar
        </button>
        <button
          onClick={() => deleteCliente(id)}
          className="py-1 w-3/4 mx-auto bg-red-600 text-white  rounded-sm uppercase font-bold  "
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Cliente;
