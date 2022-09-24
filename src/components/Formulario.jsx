import React from "react";
import { useFormik } from "formik";

const Formulario = () => {
  const formikInfo = useFormik({
    initialValues: {
      nombre: "",
      empresa: "",
      email: "",
      telefono: "",
      notas: "",
    },
  });

  const handleSubmit = (e, values, otro) => {
    e.preventDefault();
    console.log(formikInfo.values);
  };

  return (
    <div className="Formulario text-gray-700 ">
      <form
        onSubmit={(e, values, otro) => handleSubmit(e, values, otro)}
        className="container w-4/6 mx-auto mt-10 bg-white rounded-xl p-7 "
      >
        <h2 className="text-center text-xl uppercase font-bold mb-5 ">
          Agregar Cliente
        </h2>
        <div className="mb-5">
          <label
            className=" mb-2 block text-xl font-semibold "
            htmlFor="nombre"
          >
            Nombre:{" "}
          </label>
          <input
            className="w-full bg-slate-100 px-4 py-2 rounded-md"
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Nombre del cliente"
            onChange={formikInfo.handleChange}
            value={formikInfo.values.nombre}
          />
        </div>

        <div className="mb-5">
          <label
            className=" mb-2 block text-xl font-semibold "
            htmlFor="empresa"
          >
            Empresa:{" "}
          </label>
          <input
            className="w-full bg-slate-100 px-4 py-2 rounded-md"
            type="text"
            name="empresa"
            id="empresa"
            placeholder="Nombre de la empresa"
            onChange={formikInfo.handleChange}
            value={formikInfo.values.empresa}
          />
        </div>

        <div className="mb-5">
          <label className=" mb-2 block text-xl font-semibold " htmlFor="email">
            E-mail:{" "}
          </label>
          <input
            className="w-full bg-slate-100 px-4 py-2 rounded-md"
            type="text"
            name="email"
            id="email"
            placeholder="Email del cliente"
            onChange={formikInfo.handleChange}
            value={formikInfo.values.email}
          />
        </div>

        <div className="mb-5">
          <label
            className=" mb-2 block text-xl font-semibold "
            htmlFor="telefono"
          >
            Telefono:{" "}
          </label>
          <input
            className="w-full bg-slate-100 px-4 py-2 rounded-md"
            type="  "
            name="telefono"
            id="telefono"
            placeholder="Telefono del cliente"
            onChange={formikInfo.handleChange}
            value={formikInfo.values.telefono}
          />
        </div>

        <div className="mb-5">
          <label className=" mb-2 block text-xl font-semibold " htmlFor="notas">
            Notas:{" "}
          </label>
          <textarea
            className="w-full bg-slate-100 px-4 py-2 rounded-md"
            id="notas"
            name="notas"
            placeholder="Notas del cliente"
            onChange={formikInfo.handleChange}
            value={formikInfo.values.notas}
            rows="5"
          />
        </div>

        <button className="py-2 text-xl my-4 rounded-md container bg-blue-800 text-white font-bold uppercase">
          Agregar Cliente
        </button>
      </form>
    </div>
  );
};

export default Formulario;
