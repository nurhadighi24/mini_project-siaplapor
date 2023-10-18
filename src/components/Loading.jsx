import React from "react";
import { MoonLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex justify-center items-center">
      <MoonLoader color="#d64936" />
    </div>
  );
}
