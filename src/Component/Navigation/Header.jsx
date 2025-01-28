import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navitems = [
    { title: "Home", path: "/" },
    { title: "Recipes", path: "/Recipes" },
    { title: "Services", path: "/Services" },
    { title: "About", path: "/About" },
    { title: "News", path: "/News" },
    { title: "Contact", path: "/Contact" },
  ];

  return (
    <div className="fixed z-50 left-0 top-0  right-0 text-white">
      <div className="flex flex-row  items-center justify-between w-11/12 mx-auto  py-16">
        <div className="text-3xl font-serif font-semibold ">Gourmet</div>
        <div className="flex gap-4  text-lg tracking-tight ">
          {navitems.map((val, i) => {
            return (
              <div key={i} className="hover:text-[#FF7405] flex items-center">
                <Link  to={val.path}> {val.title}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
