import React from "react";
import Header from "../Component/Navigation/Header";
import Footer from "../Component/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
