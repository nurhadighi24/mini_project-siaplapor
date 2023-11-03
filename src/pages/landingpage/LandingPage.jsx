import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import Navbar from "../../components/Navbar";

import { getNews } from "../../utils/apis/news/newsApi";
import Loading from "../../components/Loading";

export default function LandingPage() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getNews();
      setNews(result.data.posts);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <div className=" bg-custom-blue-2 flex justify-center items-center font-quicksand-font">
            <img
              src="./bg-img.jpg"
              alt="background-image"
              className=" w-96 rounded-radius-20px"
            />
            <div className=" py-32 px-20">
              <h1 className=" font-bold text-white">
                <span className=" font-extrabold text-7xl decoration-4 underline">
                  SiapLapor!
                </span>{" "}
                merupakan sebuah platform pengaduan masyarakat berbasis website
                yang bertujuan memfasilitasi komunikasi antara masyarakat dan
                pemerintah dalam hal penyelesaian masalah sosial
              </h1>
            </div>

            <div className="  px-10">
              <p className=" text-custom-orange-1 pb-10 text-xl">
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
            <h1 className=" text-white font-bold text-7xl font-jockeyone-font py-28">
              PORTAL BERITA
            </h1>
            {isLoading ? (
              <Loading />
            ) : (
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true, dynamicBullets: true }}
                modules={[Pagination, Autoplay]}
                className=" mx-auto w-5/6 h-500-to-rem "
              >
                {news.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    className=" bg-slate-500 rounded-radius-20px transition ease-in-out hover:-translate-y-1 hover:scale-110 cursor-grab"
                  >
                    <img
                      src={item.thumbnail}
                      alt="news-image"
                      className=" block w-full h-full object-cover  rounded-radius-20px transition ease-in-out hover:-translate-y-1 hover:scale-110"
                    />

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
                      <h3 className=" text-3xl font-bold mb-2 font-jockeyone-font text-white text-stroke-1">
                        {item.title}
                      </h3>
                      <a href={item.link}>
                        <p className=" text-lg mt-36 bg-black py-5 hover:bg-white hover:text-black rounded-radius-20px font-quicksand-font text-white">
                          Baca Selengkapnya...
                        </p>
                      </a>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </>
      )}
    </>
  );
}
