import React from "react";
import { NavLink } from "react-router-dom";
const Layout = () => {
  const stringClass = (activeBtn) => {
    //Select all links
    const allSiblings = activeBtn
      .closest(".layout-links")
      .querySelectorAll("a");

    //Remove active state to everyone
    allSiblings.forEach(
      (link) =>
        (link.className =
          "text-white mt-3 block text-2xl font-semibold btnLink")
    );

    //To Link clicked add active
    activeBtn.className =
      "text-blue-300 mt-3 block text-2xl font-semibold btnLink";

    console.log(allSiblings);
    console.log(activeBtn);
  };

  return (
    <div className="layout-box w-5/6 mx-auto ">
      <h1 className="font-black text-white text-4xl text-center mt-10">
        CRM - Clientes
      </h1>

      <div className="layout-links mt-10">
        <NavLink
          onClick={(e) => stringClass(e.target)}
          className={`text-blue-300 mt-3 block text-2xl font-semibold btnLink`}
          to="/"
        >
          {" "}
          Clientes
        </NavLink>

        <NavLink
          onClick={(e) => stringClass(e.target)}
          className={`text-white mt-3 block text-2xl font-semibold btnLink"`}
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
