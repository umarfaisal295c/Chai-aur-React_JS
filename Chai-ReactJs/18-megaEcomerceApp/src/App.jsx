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
import { account } from "./appwrite/configAuth";
import SignupData from "./components/loginSignup/SignupData";
import Footer from "./components/footer/Footer";
import GroPets from "./components/categories/Gro&Pets/Gro&Pets";
import Test from "./components/header/Test";
// import { AppwriteProvider } from "react-appwrite";
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
    console.log(account);
  });
  return !loading ? (
    <>
      <Header />
      {/* <main> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <AppwriteProvider
          endpoint="https://cloud.appwrite.io/v1"
          project="65a79bc1eb689b9301b0"
        >
          <Route path="/signup" element={<Signup />} />
        </AppwriteProvider> */}
        <Route path="/grogeries/:name" element={<Test />} />
        {/* <Route path="/grogeries/:name" element={<Test/>} /> */}
        {/* <Route path="/signup" element={<SignupData/>} />  */}
      </Routes>
      <Footer/>
      {/* </main> */}
    </>
  ) : null;
}

export default App;
/*
,
        {
            "img": "https://static-01.daraz.pk/p/4f1eb65c38591dac57f691580b2a2548.jpg_300x0q75.webp",
            "title": "Fresh Green Thick Chili",
            "price": "20",
            "dPrice": "27",
            "dics": "15",
            "rating":"53"
        },
        {
            "img": "https://static-01.daraz.pk/p/ae32ffacac589547f339dd4250ef728b.jpg_300x0q75.webp",
            "title": "Fresh Gourd Lauki 1 kg ",
            "price": "105",
            "dPrice": "162",
            "dics": "20",
            "rating":"23"
        },
        {
            "img": "https://static-01.daraz.pk/p/6d168ca01d15a33b9acf30b261d8a953.jpg_300x0q75.webp",
            "title": "Fresh Brinjal( Gol Baingan )",
            "price": "80",
            "dPrice": "160",
            "dics": "50",
            "rating":"223"
        },
        {
            "img": "https://static-01.daraz.pk/p/4926cd0f7341a185519c4d095266a752.jpg_300x0q75.webp",
            "title": "Fresh Potato ( Alu )",
            "price": "50",
            "dPrice": "100",
            "dics": "50",
            "rating":"13"
        },
        {
            "img": "https://static-01.daraz.pk/p/0dd0a6ac49d3335675bde08a30491cf7.jpg_300x0q75.webp",
            "title": "Fresh Band Gobhi (Cabbage)",
            "price": "75",
            "dPrice": "120",
            "dics": "40",
            "rating":"443"
        },
        {
            "img": "https://static-01.daraz.pk/p/c914c4522770e86a5730d552af2d01b8.jpg_300x0q75.webp",
            "title": "Fresh Peppermint (Pudina)",
            "price": "20",
            "dPrice": "30",
            "dics": "20",
            "rating":"36k"
        },
        {
            "img": "https://static-01.daraz.pk/p/48caf7b0e72acb4560b1eea38ae27196.jpg_300x0q75.webp",
            "title": "Fresh Pea (Matar)",
            "price": "109",
            "dPrice": "104",
            "dics": "5",
            "rating":"16k"
        },
        {
            "img": "https://static-01.daraz.pk/p/60ada38f47420ff312fc6fc08031b3ab.jpg_300x0q75.webp",
            "title": "Fresh Spinach (Palak)",
            "price": "30",
            "dPrice": "40",
            "dics": "10",
            "rating":"11k"
        },
        {
            "img": "https://static-01.daraz.pk/p/c05be92c40adc8b671e086fd3a6830b5.jpg_300x0q75.webp",
            "title": "Fresh Chinese Garlic (Leshan)",
            "price": "160",
            "dPrice": "212",
            "dics": "15",
            "rating":"8k"
        }
*/
