import React from "react";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div className=" bg-custom-blue-2 flex justify-center items-center font-quicksand-font">
        <div className=" py-32 px-10">
          <h1 className=" font-bold text-custom-lightgreen-1">
            SiapLapor! merupakan Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Et error eligendi nesciunt porro neque mollitia.
          </h1>
        </div>

        <div className="  px-10">
          <p className=" text-custom-orange-1 pb-10">
            Jika kalian ada keluhan tentang lingkungan kalian, lapor dengan
            memulai tekan tombol dibawah ini.
          </p>
          <Button
            className=" bg-custom-orange-1 rounded-full px-7 py-3 font-bold transition ease-in-out hover:bg-black hover:scale-110 text-custom-blue-2"
            label="LAPOR!"
          />
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
