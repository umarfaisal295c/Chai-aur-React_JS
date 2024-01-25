import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const dispatch = useDispatch();
  const navigate =useNavigate()
  const logoutHandler = async () => {
   return await authService.logout().then(() => {
      // dispatch(logout());
      navigate("/login") 
    });
    // const logoutData=await authService.logout()
    // console.log(logoutData);
    // if(logoutData) navigate("/login")
  };
  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
};

export default Logout;
