import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-center py-5 bg-gray-800">
      <Link to="/" className="text-white px-5 uppercase text-xl font-bold transition-all duration-100 hover:text-green-500">
        Home
      </Link>
      <Link to="/breakout" className="text-white px-5 uppercase text-xl font-bold transition-all duration-100 hover:text-green-500">
        Breakout
      </Link>
    </nav>
  );
};

export default Navbar;
