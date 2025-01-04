import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-lg font-bold">
          Telecom Inventory Management System
        </h1>
        <ul className="flex gap-6 text-white font-medium">
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-pink-400" : "hover:text-gray-300"
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? "text-pink-400" : "hover:text-gray-300"
              }
            >
              Register
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
