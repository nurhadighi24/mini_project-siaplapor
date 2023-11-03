import React, { useState } from "react";

import { IoTrash, IoPencil } from "react-icons/io5";

export default function Table({
  headers = [],
  datas = [],
  onDeleteClick,
  onEditClick,
}) {
  return (
    <div className=" pb-10 ">
      <table className=" table-fixed bg-white border-collapse m-auto">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className=" border-2 border-black p-8 text-left bg-slate-950 text-white font-quicksand-font text-2xl font-bold"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr
              key={index}
              className=" font-quicksand-font hover:bg-custom-orange-1 border-2 border-black p-8 text-left font-bold transition ease-in-out delay-100"
            >
              <td className="py-10 border-2 border-black text-center">
                {data.id}
              </td>
              <td className=" border-2 border-black pl-2">
                {data.titleReport}
              </td>
              <td className=" border-2 border-black pl-2">
                {data.addressReport}
              </td>
              <td className=" border-2 border-black pl-2">{data.dateReport}</td>
              <td className=" border-2 border-black pl-2">
                {data.descriptionReport}
              </td>
              <td className=" text-3xl text-center">
                <div className=" flex justify-center items-center gap-10  ">
                  <IoPencil
                    className=" text-custom-lightgreen-1 transition ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer"
                    onClick={() => onEditClick(data)}
                  />
                  <IoTrash
                    className=" text-red-700 transition ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer"
                    onClick={() => onDeleteClick(data.id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
