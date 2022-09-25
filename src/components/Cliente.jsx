import React from "react";

const Cliente = ({ cliente, deleteCliente }) => {
  const { nombre, empresa, telefono, id, notas, email } = cliente;
  return (
    <tr className="  border-b-2 font-semibold border-slate-200 rounded-md bg-white">
      <td className="p-3 w-[8rem]"> {nombre}</td>
      <td>
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
      <td>{empresa}</td>
      <td>
        <div className="flex flex-col gap-2 my-4 w-[12rem]">
          <button className="py-1 w-3/4 mx-auto bg-blue-600 rounded-sm text-white uppercase font-bold  ">
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
        </div>
      </td>
    </tr>
  );
};

export default Cliente;
