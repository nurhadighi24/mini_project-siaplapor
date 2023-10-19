import React from "react";

export default function Pagination({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className=" flex justify-center pb-10">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            className={`${
              currentPage === page ? "bg-slate-400" : "bg-neutral-950"
            } text-white m-3 p-5 rounded-radius-20px hover:bg-slate-400 font-quicksand-font`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
