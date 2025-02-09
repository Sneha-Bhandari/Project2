import React from "react";
import { Link } from "react-router-dom";

const RecipeBanner = () => {
  return (
    <div className=" h-[100vh] md:h-full">
      <img className="w-full h-full object-cover" src="wall2.jpg" alt="Delicious Food" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white gap-4 px-4">
       
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-serif">
          Our Recipes
        </h1>
       
        <p className="text-lg sm:text-xl lg:text-3xl font-light">
          A delicious and tasty food
        </p>
       
        <Link
          to="/"
          className="uppercase border border-white px-4 py-2 text-sm sm:text-base hover:bg-white hover:text-black transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default RecipeBanner;
