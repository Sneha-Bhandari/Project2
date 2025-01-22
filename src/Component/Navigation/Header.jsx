import React from "react";

const Header = () => {
  const navitems = [
    { title: "Home" },
    { title: "Recipes" },
    { title: "Services" },
    { title: "About" },
    { title: "News" },
    { title: "Contact" },
  ];

  return (
    
    <div className="fixed z-50 left-0 right-0 text-black bg-transparent">
      <div className="flex flex-row  items-center justify-between w-full mx-auto px-20 py-16">
        <div className="text-3xl font-serif font-semibold ">
          Gourmet
        </div>
        <div className="flex gap-4  text-lg tracking-tight ">
          {navitems.map((val, i) => {
            return(
              <div key={i}>
                {val.title}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
