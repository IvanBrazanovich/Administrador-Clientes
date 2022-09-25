import React from "react";
import { NavLink, useLocation } from "react-router-dom";
const Layout = () => {
  const location = useLocation().pathname;
  return (
    <div className="layout-box w-5/6 mx-auto ">
      <h1 className="font-black text-white text-4xl text-center mt-10">
        CRM - Clientes
      </h1>

      <div className="layout-links mt-10">
        <NavLink
          className={
            location === "/clientes"
              ? "text-blue-300 mt-3 block text-2xl font-semibold btnLink"
              : "text-white mt-3 block text-2xl font-semibold btnLink"
          }
          // className={`text-blue-300 mt-3 block text-2xl font-semibold btnLink`}
          to="/clientes"
        >
          {" "}
          Clientes
        </NavLink>

        <NavLink
          className={
            location === "/nuevo-cliente"
              ? "text-blue-300 mt-3 block text-2xl font-semibold btnLink"
              : "text-white mt-3 block text-2xl font-semibold btnLink"
          }
          to="/nuevo-cliente"
        >
          {" "}
          Nuevo Cliente
        </NavLink>
      </div>
    </div>
  );
};

export default Layout;
