import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled]=useState('top');
  
  useEffect(()=>{
    
    const handleScroll=()=>{
      console.log(scrollY)
      if(scrollY>400 && scrollY<1000){
        setIsScrolled('middle');
      }else if(scrollY>600){
        setIsScrolled('inbetween')
      }
      else{
        setIsScrolled('top')
      }
    }
    window.addEventListener("scroll", handleScroll);
    return()=>{
      window.removeEventListener("scroll", handleScroll)
    }
  },[isScrolled]);

  const navitems = [
    { title: "Home", path: "/" },
    { title: "Recipes", path: "/Recipes" },
    { title: "Services", path: "/Services" },
    { title: "About", path: "/About" },
    { title: "News", path: "/News" },
    { title: "Contact", path: "/Contact" },
  ];

  return (
    <div  className= { `fixed z-50 left-0 top-0  right-0 h-fit  transition-all duration-700 delay-75 ease-in-out   ${isScrolled=='middle' ? ' bg-gray-300    shadow-xl flex w-full -translate-y-10 items-end ':isScrolled=="inbetween"?"-translate-y-96":' bg-transparent'}`}>
      <div className="flex flex-row  items-center justify-between w-11/12 mx-auto  py-16">
        <div className="text-3xl font-serif text-white font-semibold ">Gourmet</div>
        <div className="flex gap-4  text-lg tracking-tight ">
          {navitems.map((val, i) => {
            return (
              <div  key={i} className="hover:text-[#FF7405] flex items-center "> 
                <NavLink  to={val.path} className={({isActive}) => isActive ? 'text-[#FF7405]' : 'text-white'}> {val.title}</NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
