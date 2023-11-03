import React from "react";
import { Link } from "react-router-dom";

import { useToken } from "../utils/states/token-context";

import Swal from "../utils/swal";

export default function Navbar() {
  const { token, changeToken } = useToken();

  function handleLogout() {
    changeToken();
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Sukses Logout",
      showCancelButton: false,
    });
  }

  return (
    <nav className=" bg-black flex justify-between items-center shadow-md p-3 sticky top-0">
      <div>
        <Link
          to="/"
          className=" font-bold text-4xl font-quicksand-font text-white"
        >
          SIAPLAPOR!
        </Link>
      </div>
      <div className="flex gap-5 justify-center cursor-pointer font-quicksand-font">
        <Link
          to="/"
          className=" text-custom-orange-1 bg-blue-1-navbar rounded-lg  px-6 py-2  transition ease-in-out hover:-translate-y-1 hover:scale-110 font-bold"
        >
          Home
        </Link>
        <Link
          to="/lapor"
          className=" text-custom-orange-1 bg-blue-1-navbar rounded-lg  px-6 py-2 transition ease-in-out hover:-translate-y-1 hover:scale-110 font-bold"
        >
          LAPOR!
        </Link>
        <Link
          to="/qnabot"
          className=" text-custom-orange-1 bg-blue-1-navbar rounded-lg  px-6 py-2 transition ease-in-out hover:-translate-y-1 hover:scale-110 font-bold"
        >
          QnA with bot
        </Link>
      </div>
      {token === "" ? (
        <Link
          to="/login"
          className=" bg-blue-1-navbar rounded-lg  px-6 py-2 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 text-custom-orange-1 font-bold font-quicksand-font cursor-pointer"
        >
          Login
        </Link>
      ) : (
        <p
          className=" bg-blue-1-navbar rounded-lg  px-6 py-2 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 text-custom-orange-1 font-bold font-quicksand-font cursor-pointer"
          onClick={() => handleLogout()}
        >
          Logout
        </p>
      )}
    </nav>
  );
}
