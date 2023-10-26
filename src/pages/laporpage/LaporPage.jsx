import React, { useEffect, useState, useMemo } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import Navbar from "../../components/Navbar";
import { Input, TextArea } from "../../components/Input";
import Button from "../../components/Button";
import {
  createReport,
  deleteReport,
  getReport,
  updateReport,
} from "../../utils/apis/lapor/laporApi";
import Swal from "../../utils/swal";
import Table from "../../components/table/Table";
import Loading from "../../components/Loading";
import Pagination from "../../components/table/Pagination";
import { IoSearch } from "react-icons/io5";

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
  const [selectedId, setSelectedId] = useState("");
  const [search, setSearch] = useState("");
  const [report, setReport] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  //Membuat fitur search menggunakan .filter()
  const filteredReports = report.filter((item) =>
    item.titleReport.toLowerCase().includes(search.toLowerCase())
  );

  // membuat pagination
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredReports.slice(firstPostIndex, lastPostIndex);

  //membuat function untuk fitur search
  function handleSearchChange(value) {
    setSearch(value);
    setCurrentPage(1);
  }

  const {
    reset,
    register,
    setValue,
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
      const result = await getReport();
      setReport(result);
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
    }
  }

  async function handleDeleteClick(id_product) {
    try {
      const confirmationDelete = await Swal.fire({
        icon: "warning",
        title: "apakah anda yakin ingin menghapus Laporan?",
        text: "Laporan tidak akan muncul lagi!",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "IYA HAPUS!",
      });

      if (confirmationDelete.isConfirmed) {
        await deleteReport(id_product);

        Swal.fire({
          title: "Terhapus!",
          text: "Laporan anda terhapus!",
          icon: "success",
          showCancelButton: false,
        });

        fetchData();
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        showCancelButton: false,
      });
    }
  }

  async function handleSubmitEdit(data) {
    try {
      await updateReport({ ...data, id: selectedId });

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Sukses mengubah Laporan!",
        showCancelButton: false,
      });
      setSelectedId("");
      reset();
      fetchData();
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        showCancelButton: false,
      });
    }
  }

  function handleEditClick(data) {
    Swal.fire({
      icon: "info",
      title: "UBAH LAPORAN DI FORMULIR!",
      showCancelButton: false,
    });
    window.scrollTo(0, 0);
    setSelectedId(data.id);
    setValue("titleReport", data.titleReport);
    setValue("addressReport", data.addressReport);
    setValue("dateReport", data.dateReport);
    setValue("descriptionReport", data.descriptionReport);
  }

  const tableHeaders = useMemo(() => {
    if (currentPosts.length > 0) {
      return [
        "No",
        "Judul Laporan",
        "Tempat Kejadian",
        "Tanggal Laporan",
        "Deskripsi Kejadian",
        "Edit/Hapus",
      ];
    }

    return [];
  }, [currentPosts]);

  return (
    <>
      <Navbar />
      <div className=" h-full bg-custom-blue-3">
        <form
          className="py-10 m-auto justify-center items-center w-3/6  rounded-lg px-10 mb-5"
          onSubmit={handleSubmit(
            selectedId == "" ? onSubmit : handleSubmitEdit
          )}
        >
          <h1 className=" bg-custom-orange-2 py-5 text-center text-white w-4/6 justify-center items-center m-auto mb-8 font-bold rounded-md">
            LAPORKAN KELUHAN ANDA!
          </h1>
          <Input
            placeholder="Judul Laporan"
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

        <div className=" flex items-center justify-center w-3/6 bg-slate-950 rounded-radius-20px h-10 px-4 py-2 mb-5 m-auto">
          <IoSearch className=" text-white text-2xl" />
          <input
            type="text"
            placeholder="Cari berdasarkan Judul Laporan..."
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
            className=" bg-transparent border-none w-full ml-4 focus:outline-none text-white font-quicksand-font"
          />
        </div>

        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Table
              headers={tableHeaders}
              datas={currentPosts}
              onDeleteClick={(id) => handleDeleteClick(id)}
              onEditClick={(data) => handleEditClick(data)}
            />
            <Pagination
              totalPosts={filteredReports.length}
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
