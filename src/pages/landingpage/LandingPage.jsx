import React from "react";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div className=" bg-custom-blue-2 flex justify-center items-center font-quicksand-font">
        <div className=" py-32 px-20">
          <h1 className=" font-bold text-custom-lightgreen-1">
            <span className=" font-extrabold text-7xl decoration-4 underline">
              SiapLapor!
            </span>{" "}
            merupakan sebuah platform pengaduan masyarakat berbasis website yang
            bertujuan memfasilitasi komunikasi antara masyarakat dan pemerintah
            dalam hal penyelesaian masalah sosial
          </h1>
        </div>

        <div className="  px-10">
          <p className=" text-custom-orange-1 pb-10">
            Jika kalian ada keluhan tentang lingkungan kalian, lapor dengan
            memulai tekan tombol dibawah ini.
          </p>
          <Link
            to="/lapor"
            className=" bg-custom-orange-1 rounded-full px-7 py-3 font-bold hover:bg-black hover:scale-110 text-custom-blue-2"
          >
            Lapor!
          </Link>
        </div>
      </div>

      <div className=" bg-custom-blue-3 h-screen text-center">
        <div>
          <h1 className=" text-custom-lightgreen-1 font-bold text-7xl font-jockeyone-font py-28">
            PORTAL BERITA
          </h1>
          <div className=" mx-auto w-5/6 h-500-to-rem">
            <img
              className="rounded-radius-20px bg-cover w-full h-full"
              src="/bgimg-test.png"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
