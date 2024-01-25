import React, { useState } from "react";
import { Button, Input } from "../../components/index";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import ErrorM from "./Error";
const SignupData = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // yup for signupData Page.
  const schema = yup.object({
    firstName: yup.string().required("Full Name is required"),
    emaill: yup
      .string()
      .email("This must be a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be of 8 characters"),
  });
  // function for handleSignUp
  const handleSignUp=(e)=>{
    e.preventDefault()
  }
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
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
          <Formik
            validationSchema={schema}
            initialValues={{
              name: "",
              email: "",
              password: "",
            }}
            onSubmit={(e)=>{
              e.preventDefault()
            }}
          >
            <form action="">
              <div className="relative mt-2 ">
                <Input
                  label="Name"
                  placeholder="Enter your Full-Name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mb-2 mt-4 ml-9"
                />
                <ErrorM name="name"/>
                <Input
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mb-2 mt-4 ml-9"
                />
                <ErrorM name="email" />
                <Input
                  label="Password"
                  placeholder="Enter Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mb-2 ml-2 mt-4 "
                />
                <ErrorM name="password" />
                <Button type="submit" className="w-full mt-4">
                  Signup
                </Button>
              </div>
            </form>
          </Formik>
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
        {/* form */}
      </div>
    </section>
  );
};

export default SignupData;
