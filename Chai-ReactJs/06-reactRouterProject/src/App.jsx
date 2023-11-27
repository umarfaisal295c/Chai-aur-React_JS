import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Github from "./components/Github/Github";
import User from "./components/User/User";

// import './App.css'
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/github" element={<Github />} />
          <Route
            // loader={githubInfo}
            //     loader={()=>{
            //       fetch(`https://api.github.com/users/umarfaisal295c`)
            // .then((res) => res.json())
            // .then((data) => {
            //   setData(data);
            //   // console.log(data);
            // });
            //     }}
            path="/user/:userid"
            element={<User />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
