import React from "react";
import Header from "../Component/Navigation/Header";
import Footer1 from "../Component/Footer/Footer1";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer1 />
    </div>
  );
};

export default Layout;
