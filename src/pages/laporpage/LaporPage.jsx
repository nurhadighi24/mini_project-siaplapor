import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import Navbar from "../../components/Navbar";
import { Input, TextArea } from "../../components/Input";
import Button from "../../components/Button";
import { createReport, getLapor } from "../../utils/apis/lapor/laporApi";
import Swal from "../../utils/swal";
import Table from "../../components/table/Table";
import Loading from "../../components/Loading";
import Pagination from "../../components/table/Pagination";

const schema = z.object({
  titleReport: z.string().min(1, { message: "Tolong masukkan Judul Keluhan." }),
  addressReport: z
    .string()
    .min(1, { message: "Tolong masukkan Alamat Kejadiannya." }),
  dateReport: z
    .string()
    .min(1, { message: "Tolong masukkan Tanggal Kejadiannya." }),
  descriptionReport: z
    .string()
    .min(1, { message: "Tolong masukkan Deskripsi Kejadiannya" }),
});

export default function LaporPage() {
  const [report, setReport] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = report.slice(firstPostIndex, lastPostIndex);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setIsLoading(true);
      const result = await getLapor();
      setReport(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function onSubmit(data) {
    try {
      await createReport(data);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Sukses menambahkan Aduan",
        showCancelButton: false,
      });
      reset();
      fetchData();
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        showCancelButton: false,
      });
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <div className=" h-full bg-custom-blue-3">
        <form
          className="py-10 m-auto justify-center items-center w-3/6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className=" bg-custom-orange-2 py-5 text-center text-white w-4/6 justify-center items-center m-auto mb-8 font-bold">
            LAPORKAN KELUHAN ANDA!
          </h1>
          <Input
            placeholder="Judul Keluhan"
            register={register}
            type="text"
            name="titleReport"
            error={errors.titleReport?.message}
          />
          <Input
            placeholder="Alamat Kejadian"
            register={register}
            type="text"
            name="addressReport"
            error={errors.addressReport?.message}
          />
          <Input
            placeholder="Tanggal/Bulan/Tahun"
            register={register}
            type="text"
            name="dateReport"
            error={errors.dateReport?.message}
          />
          <TextArea
            placeholder="Deskripsikan Kejadiannya"
            register={register}
            type="text"
            name="descriptionReport"
            error={errors.descriptionReport?.message}
          />
          <div className="flex justify-end">
            <Button
              label="Submit"
              type="submit"
              className=" bg-custom-orange-1 px-8 font-extrabold rounded-radius-20px text-custom-blue-3 py-3 font-quicksand-font"
            />
          </div>
        </form>

        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Table
              headers={[
                "No",
                "Judul Kejadian",
                "Tempat Kejadian",
                "Tanggal Kejadian",
                "Deskripsi Kejadian",
              ]}
              datas={currentPosts}
            />
            <Pagination
              totalPosts={report.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </>
        )}
      </div>
    </>
  );
}
