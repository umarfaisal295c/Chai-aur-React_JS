import React, { useState } from "react";
import authServices from "../../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login as authLogin } from "../../store/authSlice";
import { Button, Input } from "../../components/index";
const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const loginMethod = async (data) => {
    setError("");
    try {
      const session = await authServices.createAccount(data);
      if (session) {
        const userData = await authServices.getCurrentUser();
        navigate("/");

        if (userData) {
          dispatch(authLogin(userData));
        }

        // console.log(userData);
      }
    } catch (error) {
      setError("signup error", error.message);
    }
  };

  //   const reg=()=>{
  //     authServices.createAccount()
  //   }
  return (
    <>
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
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <form onSubmit={handleSubmit(loginMethod)}>
              <div className="relative mt-2 ">
                <Input
                  label="Name"
                  placeholder="Enter your Full-Name"
                  type="text"
                  className="mb-2 mt-4 ml-9"
                  {...register("name", {
                    required: true,
                  })}
                />
                <Input
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
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
                {/* for Password */}

                <Input
                  label="Password"
                  placeholder="Enter Password"
                  type="password"
                  className="mb-2 ml-2 mt-4 "
                  {...register("password", {
                    required: true,
                  })}
                />
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
