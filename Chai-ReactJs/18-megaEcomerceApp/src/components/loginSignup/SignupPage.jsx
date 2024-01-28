import React, { useState } from "react";
import { ID } from "appwrite";
import authServices from "../../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
// import { login as authLogin } from "../../store/authSlice";
import { login } from "../../store/authSlice";
import { Button, Input } from "../../components/index";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import { useAppwrite } from 'react-appwrite';
// import {} from 'appwrite'
import { account } from "../../appwrite/configAuth";
const Signup = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const id = ID.unique();
  // yup
  const schema = yup
    .object({
      firstName: yup.string().required("Full Name is required"),
      email: yup
        .string()
        .email("This must be a valid email")
        .required("Email is required"),
      password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be of 8 characters"),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  // const loginMethod = async ({name,email,password}) => {
  //   try {
  //     // {name,email,password}
  //     // const userData = await authServices.createAccount(data);
  //     // if (userData) {
  //     //   const userData = await authServices.getCurrentUser();

  //     //   if (userData) dispatch(login(userData));
  //     //   alert("Login");
  //     // navigate("/");
  //     // }
  //     const userData = await authServices.createAccount({name,email,password});
  //     console.log(userData);
  //     if (userData) navigate("/");
  //     const signData=await account.create("unique()",email,password,name)
  //     console.log("signData",signData);
  //   } catch (error) {
  //     console.log("Error Message :", error);
  //   }
  // };

  // const registerData = async ({name,email,password}) => {
  //   try {
  //     const signData = await account.create( ID.unique(),name,email,password);
  //     console.log("signData", signData);
  //     if (signData) navigate("/");
  //   } catch (error) {
  //     console.log("signData", error);
  //   }
  // };
  const { createAccount } = useAppwrite();
  const onSubmit = async (data) => {
    try {
      // Use the Appwrite SDK to create a new account
      const response = await createAccount(data.email, data.password, data.name);

      // Handle successful signup (you may want to redirect the user to the login page)
      console.log('Signup successful', response);
    } catch (error) {
      // Handle signup error
      console.error('Signup failed', error);
    }
  };
  return (
    <>
      <section className="bg-gray-50 pt-40 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex justify-center rounded-2xl gap-12 shadow-lg max-w-3xl p-5 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000"
              alt=""
              className="h-80 w-80"
            />
          </div>
          <div>
            <h2 className="text-center text-2xl font-bold leading-tight">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-base text-black/60">
              Don&apos;t have any account?&nbsp;
              <Link
                to="/signup"
                className="font-medium text-primary transition-all duration-200 hover:underline"
              >
                Sign Up
              </Link>
            </p>
            {/* {error && <p className="text-red-600 mt-8 text-center">{error}</p>} */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="relative mt-2 ">
                <Input
                  label="Name"
                  placeholder="Enter your Full-Name"
                  type="text"
                  name="name"
                  className="mb-2 mt-4 ml-9"
                  {...register("firstName", {
                    required: true,
                  })}
                />
                {errors.firstName && (
                  <span className="text-red-600 mt-2 text-center">
                    {errors.firstName.message}
                  </span>
                )}
                <Input
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  className="mb-2 mt-4 ml-9"
                  {...register("email", {
                    required: true,
                    validate: {
                      matchPatern: (value) =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                          value
                        ) || "Email address must be a valid address",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-600 mt-2 text-center">
                    {errors.email.message}
                  </span>
                )}
                {/* for Password */}

                <Input
                  label="Password"
                  placeholder="Enter Password"
                  type="password"
                  name="password"
                  className="mb-2 ml-2 mt-4 "
                  {...register("password", {
                    required: true,
                  })}
                />
                {errors.password && (
                  <span className="text-red-600 mt-2 text-center">
                    {errors.password.message}
                  </span>
                )}
                <Button type="submit" className="w-full mt-4">
                  Signup
                </Button>
              </div>
            </form>
            {/*  */}
            <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>
            {/*  */}
            <div className="flex justify-center">
              <button className="flex justify-between items-center w-9/12">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
                  alt=""
                  className="w-8 mt-3"
                />
                <p>Login with Google</p>
              </button>
            </div>
            {/*  */}
            <div class="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
              <Link href="#">Forgot your password?</Link>
            </div>
            {/*  */}
            <div class="mt-3 text-xs flex justify-between items-center text-[#002D74]">
              <p>Don't have an account?</p>
              <button class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
                Register
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
//
// https://codepen.io/mfg888/pen/gOevEoL
