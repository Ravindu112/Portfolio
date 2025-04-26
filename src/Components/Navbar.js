import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-transparent p-5 px-10 flex justify-between items-center">
      <NavLink to="/" className="text-2xl font-bold text-white">
        Ravindu
      </NavLink>
      <nav className="space-x-6">
        {["Home", "About", "Projects", "Skills", "Contact"].map((page) => (
          <NavLink
            key={page}
            to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
            className={({ isActive }) =>
              `text-lg font-medium ${
                isActive ? "text-cyan-400" : "text-white hover:text-cyan-400"
              }`
            }
          >
            {page}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
