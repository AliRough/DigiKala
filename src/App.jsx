import React from "react";
import Header from "./components/header/Header";
import routes from "./routes"
import Footer from "./components/footer/Footer"
import { useRoutes } from "react-router";
export default function App() {
  let router = useRoutes(routes);
  return (
    <>
      <Header className="z-50 font-Vazirmatn " />
      {router}
      <Footer/>
    </>
  );
}
