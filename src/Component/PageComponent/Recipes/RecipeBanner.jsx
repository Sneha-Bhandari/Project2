import React from "react";
import { Link } from "react-router-dom";

const RecipeBanner = () => {
  return (
    <div className="relative h-[100vh] md:h-full">
     
      <img className="w-full h-full object-cover" src="wall1.jpg" alt="Our Services" />
      
     
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white gap-4 px-4">
       
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-serif">
          Our Recipies
        </h1>
       
        <p className="text-lg sm:text-xl lg:text-2xl font-light">
          A delicious and tasty food
        </p>
        
        <Link
          to={"/"}
          className="uppercase  border border-white  w-fit  px-3 py-2  hover:bg-white hover:text-black  transition-all duration-700 delay-75 ease-in-out"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default RecipeBanner;
