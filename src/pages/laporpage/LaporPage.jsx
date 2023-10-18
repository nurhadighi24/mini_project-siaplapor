import React from "react";
import Navbar from "../../components/Navbar";
import { Input, TextArea } from "../../components/Input";
import Button from "../../components/Button";

export default function LaporPage() {
  return (
    <>
      <Navbar />
      <div className=" h-screen bg-custom-blue-3">
        <form className="py-10 m-auto justify-center items-center w-3/6 ">
          <h1 className=" bg-custom-orange-2 py-5 text-center text-white w-4/6 justify-center items-center m-auto mb-8 font-bold">
            LAPORKAN KELUHAN ANDA!
          </h1>
          <Input placeholder="Judul Keluhan" />
          <Input placeholder="Alamat Kejadian" />
          <Input placeholder="Tanggal Kejadian" />
          <TextArea placeholder="Deskripsikan Kejadiannya" />
          <div className="flex justify-end">
            <Button
              label="Submit"
              type="submit"
              className=" bg-custom-orange-1 px-8 font-extrabold rounded-radius-20px text-custom-blue-3 py-3 font-quicksand-font"
            />
          </div>
        </form>
      </div>
    </>
  );
}
