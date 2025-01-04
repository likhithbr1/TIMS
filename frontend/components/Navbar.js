import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex gap-6 text-white font-medium">
        <li>
          <Link className="hover:text-gray-300" to="/login">Login</Link>
        </li>
        <li>
          <Link className="hover:text-gray-300" to="/register">Register</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
