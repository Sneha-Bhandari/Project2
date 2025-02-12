import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";

const Header = () => {
  const [isScrolled, setIsScrolled]=useState('top');
  const [menuOpen, setMenuOpen] = useState(false); 
  useEffect(()=>{
    
    const handleScroll=()=>{
      console.log(scrollY)
      if(scrollY>50 ){
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
    <div  className= { `fixed z-50 left-0 top-0  right-0 h-fit p-6 transition-all duration-700 delay-75 ease-in-out   ${isScrolled=='middle' ? ' bg-[#e9c8ad]  shadow-xl flex w-full  h-fit  items-end ':isScrolled=="inbetween"?" hidden":' bg-transparent'}`}>
      <div className="flex flex-row  items-center justify-between w-11/12 mx-auto  ">
        <div className="text-3xl font-serif text-white font-semibold ">Gourmet</div>
        <div className="md:flex gap-4 hidden text-lg tracking-tight ">
          {navitems.map((val, i) => {
            return (
              <div  key={i} className="hover:text-[#FF7405] flex items-center "> 
                <NavLink  to={val.path} className={ ( {isActive}) => isActive ? 'text-orange-600 underline' : 'text-white'}> <div className="text-xl tracking-normal">{val.title}</div></NavLink>
              </div>
            );
          })}
        </div>
        <div   className="md:hidden">
        <button className="flex text-5xl text-white"
        onClick={() => setMenuOpen(!menuOpen)}>
       <IoReorderThreeOutline/>
       
        </button>
        </div>
      </div>
     
        {menuOpen && (
        <div onClick={(e) => e.stopPropagation()} className=" md:hidden absolute bg-white  flex flex-col w-1/2 text-xl right-0 h-fit px-5   text-start">
          
         <div className="text-right">
         <button onClick={()=>setMenuOpen(false)} className="text-3xl">x</button>
         </div> 
          {navitems.map((val, i) => (
            <NavLink
              key={i}
              to={val.path}
              className={({ isActive }) =>
                `block py-2  ${
                  isActive ? "text-[#FF7405]" : "text-gray-700"
                } hover:text-[#FF7405]`
              }
              onClick={() => setMenuOpen(false)} 
            >
              {val.title}
            </NavLink>
          ))}
        </div>
      )}
    </div>
    
  );
};

export default Header;
