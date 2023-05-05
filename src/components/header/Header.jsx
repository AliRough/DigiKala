import React, { useState } from "react";
import UpHeader from "./in head/UpHeader";
import NavBar from "./in head/NavBar.jsx";
import { headerData } from "../../Datas/headerData";

export default function Header() {
  const [listMenu, setListMenu] = useState(headerData);
  const [isNavOpen, setIsNavOpen] = useState(false);

  let openNavHandler = () => {
    setIsNavOpen((val) => !val);
  };

  return (
    <header className="px-4 lg:px-6 py-2.5" id="first">
      <UpHeader openNav={openNavHandler} {...listMenu}>
      </UpHeader>

      <NavBar nav={isNavOpen} closeSideBar={openNavHandler} {...listMenu} />
    </header>
  );
}
