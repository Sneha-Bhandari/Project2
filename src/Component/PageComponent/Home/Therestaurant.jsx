import React from "react";

const Therestaurant = () => {
  return (
    <div className="h-screen flex items-center justify-center px-4 md:px-0">
      <div className="flex flex-col md:flex-row w-11/12 group overflow-clip max-w-6xl mx-auto mt-12 md:mt-24 h-auto md:h-1/2 gap-12 md:gap-24">
        {/* Image Section */}
        <img
          className="w-full md:w-1/2 h-full md:h-full object-cover  group-hover:scale-110 transition-all duration-500 delay-75 ease-in-out rounded-lg"
          src="wall.jpg"
          alt="Food"
        />

        {/* Text Section */}
        <div className="flex flex-col group overflow-clip justify-center gap-6 md:gap-8 tracking-tight">
          <div className="w-20 h-0.5 bg-orange-500 mx-auto md:mx-0 group-hover:w-8/12 transition-all duration-700 delay-75 ease-in-out"></div>
          <h1 className="title ">
            The Restaurant
          </h1>
          <div className="description ">
             <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              maiores soluta officia quos, animi neque eius assumenda culpa
              distinctio libero,
            </p>
            <p>
              Amet voluptate harum ipsam alias sit totam soluta impedit.
            </p>
          </div>
          <img
            className="w-24 h-16 md:w-32 md:h-24 mx-auto md:mx-0 "
            src="sign.svg"
            alt="Signature"
          />
        </div>
      </div>
    </div>
  );
};

export default Therestaurant;
