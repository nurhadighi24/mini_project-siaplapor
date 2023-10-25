import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

import Navbar from "../../components/Navbar";
import { Input } from "../../components/Input";
import Button from "../../components/Button";
import { useToken } from "../../utils/states/token-context";
import { useNavigate } from "react-router-dom";
import { login } from "../../utils/apis/auth/dummyUserApi";
import Swal from "../../utils/swal";

const schema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export default function Login() {
  const { changeToken } = useToken();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  async function handleLogin(data) {
    try {
      const result = await login(data);
      changeToken(JSON.stringify(result));
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Sukses Login",
        showCancelButton: false,
      });
      navigate("/");
    } catch (error) {
      Swal.fire({
        title: "Error",
        icon: "error",
        text: error.message,
        showCancelButton: false,
      });
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <form
        className=" bg-custom-gray-1 w-3/6 m-auto justify-center mt-10 rounded-radius-20px"
        onSubmit={handleSubmit(handleLogin)}
      >
        <h1 className=" text-center text-7xl font-bold py-10 font-quicksand-font">
          Login
        </h1>
        <Input
          placeholder="'user1'"
          register={register}
          name="username"
          error={errors.username?.message}
        />
        <Input
          placeholder="'password123'"
          register={register}
          name="password"
          type="password"
          error={errors.password?.message}
        />
        <div className=" flex justify-center">
          <Button
            label="Submit"
            className="bg-custom-orange-1 px-20 font-extrabold rounded-radius-20px text-custom-blue-3 py-3 mb-4 font-quicksand-font"
          />
        </div>
      </form>
    </>
  );
}
