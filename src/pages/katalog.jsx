import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { AiFillAlert } from "react-icons/ai";

export default function Katalog() {
  const [activeTab, setActiveTab] = useState("sarjana");

  return (
    <div>
      <Navbar />
      <div className="w-[80rem] m-auto mb-10 mt-20">
        <p className="text-[#0B3872] text-3xl font-bold">Katalog</p>
        <hr className="border-2 border-[#0B3872] my-2" />
        <p className="text-[#7A7A7A] text-2xl">
          Buku katalog sebagai panduan mahasiswa dalam menempuh pendidikan di
          Universitas Terbuka.
        </p>
      </div>

      <div className="flex border-gray-300 w-[80rem] m-auto">
        <button
          onClick={() => setActiveTab("sarjana")}
          className={`py-2 px-4 ${
            activeTab === "sarjana"
              ? "border border-b-white border-[#0B3872] text-[#0B3872] font-bold text-xl"
              : "text-gray-600 font-bold text-xl"
          }`}
        >
          Program Sarjana dan Diploma
        </button>
        <button
          onClick={() => setActiveTab("pascasarjana")}
          className={`py-2 px-4 ${
            activeTab === "pascasarjana"
              ? "border border-b-white border-[#0B3872] text-[#0B3872] font-bold text-xl"
              : "text-gray-600 font-bold text-xl"
          }`}
        >
          Program Pascasarjana
        </button>
        <button
          onClick={() => setActiveTab("sertifikat")}
          className={`py-2 px-4 ${
            activeTab === "sertifikat"
              ? "border border-b-white border-[#0B3872] text-[#0B3872] font-bold text-xl"
              : "text-gray-600 font-bold text-xl"
          }`}
        >
          Program Sertifikat
        </button>
      </div>

      <div className=" w-[80rem] m-auto">
        {activeTab === "sarjana" && (
          <div className="border p-7 ">
            {/* Content for Program Sarjana dan Diploma */}
            <p className="text-[#7A7A7A] text-xl leading-relaxed">
              Katalog Universitas Terbuka (UT) untuk FEB, FHISIP, FST, dan FKIP
              terdiri atas Katalog Sistem Penyelenggaraan dan Katalog Kurikulum.
              Katalog Sistem Penyelenggaraan FEB, FHISIP, FST, dan FKIP berisi
              informasi tentang tujuan pendirian UT, Visi dan Misi, sistem
              pembelajaran, jaringan kerja sama, registrasi, biaya pendidikan,
              bahan ajar, bantuan belajar, evaluasi hasil belajar, kelulusan,
              ketentuan umum administrasi akademik, kemahasiswaan dan alumni,
              serta program akademik. Sementara itu penjelasan tentang program
              akademik terdapat pada Katalog Kurikulum FEB, FHISIP, FST, dan
              FKIP yang berisi informasi tentang sebaran beban studi, tujuan
              kurikuler, dan struktur kurikulum program jenjang Diploma dan
              program jenjang Sarjana yang ditawarkan oleh UT.
            </p>
            <a
              href="https://www.ut.ac.id/wp-content/uploads/2024/06/KATALOG-PENYELENGGARAAN-TAHUN-2024-2025.pdf"
              className="flex items-center gap-3 text-xl my-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillAlert className="text-[#377EF9]" />
              <p className="text-[#377EF9]">
                Katalog UT Sistem Penyelenggaraan 2024/2025
              </p>
            </a>
            <a
              href="https://www.ut.ac.id/wp-content/uploads/2024/09/KATALOG-NON-PENDAS-GABUNGAN-NON_TTD-2024_2025_FINAL-SC-22-MEI-2024.pdf"
              className="flex items-center gap-3 text-xl my-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillAlert className="text-[#377EF9]" />
              <p className="text-[#377EF9]">
                Katalog Kurikulum FE, FHISIP, FKIP, FST UT 2024/2025
              </p>
            </a>
            <a
              href="https://www.ut.ac.id/wp-content/uploads/2024/09/Katalog-Kurikulum-FKIP-Program-Sarjana-PGSD-PGPAUD-PAI-UT-2024-2025.pdf"
              className="flex items-center gap-3 text-xl my-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillAlert className="text-[#377EF9]" />
              <p className="text-[#377EF9]">
                Katalog Kurikulum FKIP Program Sarjana PGSD PGPAUD PAI UT
                2024/2025
              </p>
            </a>
          </div>
        )}
        {activeTab === "pascasarjana" && (
          <div className="border p-7">
            {/* Content for Program Pascasarjana */}
            <p className="text-[#7A7A7A] text-xl leading-relaxed">
              Melalui Katalog Program Pascasarjana UT ini, para mahasiswa PPs
              UT, calon mahasiswa, atau masyarakat luas yang ingin mengenal
              lebih jauh tentang PPs UT diharapkan dapat mempelajari dan
              mengetahui tentang program-program yang ditawarkan, sistem
              registrasi, sistem pembelajaran dan bantuan belajar, bahan ajar,
              evaluasi hasil belajar, Tugas Akhir Program Magister (TAPM/Tesis),
              peraturan akademik, kelulusan dan informasi lain yang perlu
              diketahui.{" "}
            </p>
            <a
              href="https://www.ut.ac.id/wp-content/uploads/2024/06/Katalog-Program-Magister-Sekolah-Pascasarjana-UT-2024-2025.pdf"
              className="flex items-center gap-3 text-xl my-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillAlert className="text-[#377EF9]" />
              <p className="text-[#377EF9]">
                Katalog Program Magister Universitas Terbuka 2024/2025
              </p>
            </a>
            <a
              href="https://www.ut.ac.id/wp-content/uploads/2024/06/Katalog-Program-Doktor-UT-2024-2025.pdf"
              className="flex items-center gap-3 text-xl my-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillAlert className="text-[#377EF9]" />
              <p className="text-[#377EF9]">
                Katalog Program Doktor Universitas Terbua 2024/2025
              </p>
            </a>
          </div>
        )}
        {activeTab === "sertifikat" && (
          <div className="border p-7">
            {/* Content for Program Sertifikat */}
            <p className="text-[#7A7A7A] text-xl leading-relaxed">
              Katalog Program Sertifikat Universitas Terbuka (UT) 2019/2020
              menyajikan berbagai informasi terkait dengan program sertifikat
              yang ditawarkan Universitas Terbuka, yang meliputi Program
              Pendidikan Berkelanjutan (PPB), Program Pelatihan singkat dan
              Program Mata Kuliah Mandiri (PMKM). Sebagian besar Program
              Pendidikan Berkelanjutan dan semua PMKM diakui atau dapat
              dialihkreditkan untuk melanjutkan studi di Universitas Terbuka.
              Sementara Program Pelatihan merupakan program-program pelatihan
              untuk meningkatkan skills (keterampilan) dari para pesertanya dari
              berbagai kalangan, yaitu mahasiswa, dosen, dan masyarakat umum.
              Katalog ini merupakan petunjuk bagi para peserta program, pemangku
              kepentingan, para pengurus kelompok belajar (Pokjar), dan bagi
              petugas UT, baik di Unit Program Belajar Jarak Jauh UPBJJ-UT
              maupun di UT Pusat. Katalog ini memuat hal-hal penting yang harus
              diperhatikan dari Program Pendidikan Berkelanjutan (PPB), program
              pelatihan singkat maupun PMKM mulai dari persyaratan pembukaan
              program, cara registrasi, kurikulum, proses pembelajaran, evaluasi
              hasil belajar, syarat penyelesaian program, dan berbagai informasi
              penting lainnya.{" "}
            </p>
            <a
              href="https://www.ut.ac.id/wp-content/uploads/2015/01/Katalog_Program_Sertifikat_Universitas_Terbuka_2023-2024.pdf"
              className="flex items-center gap-3 text-xl my-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillAlert className="text-[#377EF9]" />
              <p className="text-[#377EF9]">
                Katalog Program Sertifikat Universitas Terbuka
              </p>
            </a>
          </div>
        )}
      </div>
      {/* KATALOG SEBELUMNYA */}
      {/* KATALOG SEBELUMNYA */}
      {/* KATALOG SEBELUMNYA */}
      <div className="w-[80rem] m-auto my-10">
        <p className="text-[#7A7A7A] text-xl font-bold">
          Katalog sebelumnya (2023/2024)
        </p>
      </div>
      <div className="flex border-gray-300 w-[80rem] m-auto">
        <button
          onClick={() => setActiveTab("sarjana")}
          className={`py-2 px-4 ${
            activeTab === "sarjana"
              ? "border border-b-white border-[#0B3872] text-[#0B3872] font-bold text-xl"
              : "text-gray-600 font-bold text-xl"
          }`}
        >
          Program Sarjana dan Diploma
        </button>
        <button
          onClick={() => setActiveTab("pascasarjana")}
          className={`py-2 px-4 ${
            activeTab === "pascasarjana"
              ? "border border-b-white border-[#0B3872] text-[#0B3872] font-bold text-xl"
              : "text-gray-600 font-bold text-xl"
          }`}
        >
          Program Pascasarjana
        </button>
        <button
          onClick={() => setActiveTab("sertifikat")}
          className={`py-2 px-4 ${
            activeTab === "sertifikat"
              ? "border border-b-white border-[#0B3872] text-[#0B3872] font-bold text-xl"
              : "text-gray-600 font-bold text-xl"
          }`}
        >
          Program Sertifikat
        </button>
      </div>
      <div className=" w-[80rem] m-auto mb-10">
        {activeTab === "sarjana" && (
          <div className="border p-7 ">
            <a
              href="https://www.ut.ac.id/wp-content/uploads/2023/12/Katalog_Sistem_Penyelenggaraan_Universitas_Terbuka_2023-2024d.pdf"
              className="flex items-center gap-3 text-xl my-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillAlert className="text-[#377EF9]" />
              <p className="text-[#377EF9]">
                Katalog Sistem Penyelenggaraan 2023/2024
              </p>
            </a>
            <a
              href="https://www.ut.ac.id/wp-content/uploads/2023/10/Katalog-Kurikulum-Non-Pendas-UT-2023-2024_SC-23-MEI-2023-revisi-171023_compressed.pdf"
              className="flex items-center gap-3 text-xl my-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillAlert className="text-[#377EF9]" />
              <p className="text-[#377EF9]">
                Katalog Kurikulum FE, FHISIP, FKIP, FST UT 2023/2024
              </p>
            </a>
            <a
              href="https://www.ut.ac.id/wp-content/uploads/2023/09/Katalog_Kurikulum_Program_Program_Studi_FKIP_PGSD_dan_PGPAUD_Universitas_Terbuka_2023-2024z.pdf"
              className="flex items-center gap-3 text-xl my-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillAlert className="text-[#377EF9]" />
              <p className="text-[#377EF9]">
                Katalog Kurikulum FKIP Program PGSD dan PGPAUD UT 2023/2024
              </p>
            </a>
          </div>
        )}
        {activeTab === "pascasarjana" && (
          <div className="border p-7">
            <a
              href="https://www.ut.ac.id/wp-content/uploads/2023/09/Katalog_Program_Magister_Universitas_Terbuka_2023-2024x.pdf"
              className="flex items-center gap-3 text-xl my-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillAlert className="text-[#377EF9]" />
              <p className="text-[#377EF9]">
                Katalog Program Magister Universitas Terbuka 2023/2024
              </p>
            </a>
            <a
              href="https://www.ut.ac.id/wp-content/uploads/2023/09/Katalog_Pascasarjana_Program_Doktor_Universitas_Terbuka_2023-2024x.pdf"
              className="flex items-center gap-3 text-xl my-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillAlert className="text-[#377EF9]" />
              <p className="text-[#377EF9]">
                Katalog Program Doktor Universitas Terbuka 2023/2024
              </p>
            </a>
          </div>
        )}
        {activeTab === "sertifikat" && (
          <div className="border p-7">
            <a
              href="https://www.ut.ac.id/wp-content/uploads/2015/01/Katalog_Program_Sertifikat_Universitas_Terbuka_2023-2024.pdf"
              className="flex items-center gap-3 text-xl my-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillAlert className="text-[#377EF9]" />
              <p className="text-[#377EF9]">
                Katalog Program Sertifikat Universitas Terbuka
              </p>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
