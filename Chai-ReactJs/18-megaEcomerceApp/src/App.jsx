import { useState,useEffect } from "react";
import {useDispatch} from 'react-redux'
import {login,logout} from './store/authSlice'
import Header from "./components/header/Header";
import authServices from "./appwrite/auth";
import { Routes, Route, NavLink } from "react-router-dom";
function App() {
  const [loading,setLoading]=useState("")
  const dispatch=useDispatch();
  useEffect(()=>{
    authServices.getCurrentUser()
    .then((userData)=>{
        if(userData){
          dispatch(login({userData}))
        }else{
          dispatch(logout())
        }
    })
    .finally(() => setLoading(false));
  },[])
  return (
    <>
      <Header />

      <Routes>{/* <Route path="/" element={<Header />} /> */}</Routes>
      
    </>
  );
}

export default App;
