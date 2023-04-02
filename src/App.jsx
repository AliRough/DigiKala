import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main";
//import "./App.css";
import Footer from "./components/footer/Footer"
export default function App() {
  return (
    <>
      <Header className="z-50 " />
      <Main />
      <Footer/>
    </>
  );
}
