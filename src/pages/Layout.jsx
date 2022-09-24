import React from "react";
import { NavLink } from "react-router-dom";
const Layout = () => {
  return (
    <div className="layout-box w-5/6 mx-auto">
      <h1 className="font-black text-white text-4xl text-center mt-10">
        CRM - Clientes
      </h1>

      <div className="layout-links mt-10">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-blue-300 mt-3 block text-2xl font-semibold"
              : "text-white mt-3 block text-2xl font-semibold"
          }
          to="/ "
        >
          {" "}
          Clientes
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-blue-300 mt-3 block text-2xl font-semibold"
              : "text-white mt-3 block text-2xl font-semibold"
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
