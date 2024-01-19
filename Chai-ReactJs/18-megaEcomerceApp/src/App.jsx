import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import Header from "./components/header/Header";
import authServices from "./appwrite/auth";
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
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
