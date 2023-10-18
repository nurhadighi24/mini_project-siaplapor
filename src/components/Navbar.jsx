import React from "react";

export default function Navbar() {
  return (
    <nav className=" bg-white flex justify-between items-center border-b-2 shadow-md p-3 sticky top-0">
      <div>
        <a
          href="#"
          className=" font-bold text-4xl font-quicksand-font text-blue-2-navbar"
        >
          SIAPLAPOR!
        </a>
      </div>
      <div>
        <ul className=" flex gap-5 cursor-pointer font-quicksand-font">
          <li className="bg-blue-1-navbar rounded-lg  px-6 py-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <a href="" className=" text-custom-orange-1">
              Home
            </a>
          </li>
          <li className="bg-blue-1-navbar rounded-lg  px-6 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <a href="" className=" text-custom-orange-1">
              LAPOR!
            </a>
          </li>
          <li className=" bg-blue-2-navbar rounded-lg  px-6 py-2 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">
            <a href="" className=" text-custom-blue-1">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
