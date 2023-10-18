import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className=" bg-white flex justify-between items-center border-b-2 shadow-md p-3 sticky top-0">
      <div>
        <Link
          to="/"
          className=" font-bold text-4xl font-quicksand-font text-blue-2-navbar"
        >
          SIAPLAPOR!
        </Link>
      </div>
      <div className="flex gap-5 cursor-pointer font-quicksand-font">
        <Link
          to="/"
          className=" text-custom-orange-1 bg-blue-1-navbar rounded-lg  px-6 py-2  transition ease-in-out hover:-translate-y-1 hover:scale-110"
        >
          Home
        </Link>
        <Link
          to="/lapor"
          className=" text-custom-orange-1 bg-blue-1-navbar rounded-lg  px-6 py-2 transition ease-in-out hover:-translate-y-1 hover:scale-110"
        >
          LAPOR!
        </Link>
        <Link className=" bg-blue-2-navbar rounded-lg  px-6 py-2 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 text-custom-lightgreen-1">
          Login
        </Link>
      </div>
    </nav>
  );
}
