import React from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Message from "./Message";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Formulario = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const SignupSchema = yup.object().shape({
    nombre: yup
      .string()
      .min(3, "Too Short!")
      .max(30, "Too Long!")
      .required("El nombre es obligatorio"),
    empresa: yup
      .string()
      .min(3, "Too Short!")
      .max(30, "Too Long!")
      .required("El nombre de la empresa es obligatorio"),
    email: yup
      .string()
      .email("No es un email")
      .required("El email es obligatorio"),
    telefono: yup
      .number("")
      .min(2, "No es un número válido")
      .required("El número de teléfono es necesario")
      .typeError("No es un número válido"),
  });

  return (
    <div className="Formulario text-gray-700 ">
      <Formik
        initialValues={{
          nombre: "",
          empresa: "",
          telefono: "",
          notas: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { resetForm }) => {
          //Fetch API
          try {
            const url = "http://localhost:3000/clientes";
            const response = await fetch(url, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(values),
            });

            const res = await response.json();

            if (!Object.keys(res).length > 0) throw Error();
          } catch (error) {
            setError(true);

            setTimeout(() => {
              setError(false);
            }, 3000);
          }

          setTimeout(() => {
            resetForm();
            navigate("/clientes");
          }, 3000);
        }}
      >
        {(errors) => (
          <Form className="container w-4/6 mx-auto mt-10 bg-white rounded-xl p-7 ">
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
              <Field
                className="w-full bg-slate-100 px-4 py-2 rounded-md"
                name="nombre"
                id="nombre"
                placeholder="Nombre del cliente"
              />

              <ErrorMessage
                render={(message) => <Message message={message} />}
                name="nombre"
              />
            </div>

            <div className="mb-5">
              <label
                className=" mb-2 block text-xl font-semibold "
                htmlFor="empresa"
              >
                Empresa:{" "}
              </label>
              <Field
                className="w-full bg-slate-100 px-4 py-2 rounded-md"
                name="empresa"
                id="empresa"
                placeholder="Nombre de la empresa"
              />
              <ErrorMessage
                render={(message) => <Message message={message} />}
                name="empresa"
              />
            </div>

            <div className="mb-5">
              <label
                className=" mb-2 block text-xl font-semibold "
                htmlFor="email"
              >
                E-mail:{" "}
              </label>
              <Field
                className="w-full bg-slate-100 px-4 py-2 rounded-md"
                name="email"
                id="email"
                placeholder="Email del cliente"
              />
              <ErrorMessage
                render={(message) => <Message message={message} />}
                name="email"
              />
            </div>

            <div className="mb-5">
              <label
                className=" mb-2 block text-xl font-semibold "
                htmlFor="telefono"
              >
                Telefono:{" "}
              </label>
              <Field
                className="w-full bg-slate-100 px-4 py-2 rounded-md"
                name="telefono"
                id="telefono"
                placeholder="Telefono del cliente"
              />
              <ErrorMessage
                render={(message) => <Message message={message} />}
                name="telefono"
              />
            </div>

            <div className="mb-5">
              <label
                className=" mb-2 block text-xl font-semibold "
                htmlFor="notas"
              >
                Notas:{" "}
              </label>
              <Field
                component="textarea"
                className="w-full bg-slate-100 px-4 py-2 rounded-md"
                id="notas"
                name="notas"
                placeholder="Notas del cliente"
                rows="5"
              />
              <ErrorMessage
                render={(message) => <Message message={message} />}
                name="notas"
              />
            </div>

            <button
              type="submit"
              className="py-2 text-xl my-4 rounded-md container hover:bg-blue-600 transition-all  bg-blue-800 text-white font-bold uppercase"
            >
              Agregar Cliente
            </button>
            {error && (
              <Message message="Hubo un problema al enviar el formulario" />
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Formulario;
