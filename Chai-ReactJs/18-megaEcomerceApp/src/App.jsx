import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import Header from "./components/header/Header";
import authServices from "./appwrite/auth";
import { Outlet } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import LoginPage from "./components/loginSignup/LoginPage";
import Signup from "./components/loginSignup/SignupPage";
import Home from "./components/home/Home";
function App() {
  const [loading, setLoading] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    authServices
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);
  return !loading ? (
    <>
      <Header />
      {/* <main> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      {/* </main> */}
    </>
  ) : null;
}

export default App;
