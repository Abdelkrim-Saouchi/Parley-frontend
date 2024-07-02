import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <SideBar />
      <Outlet />
    </>
  );
};

export default Layout;
