import React from "react";

const Best = () => {
  return (
    <div className="h-1/2 py-9 md:h-lvh">
      <div className="flex flex-col group overflow-clip w-full px-3 h-1/3  items-center justify-center mx-auto gap-6">
        <div className="w-24 group-hover:w-full transition-all duration-700 delay-75 ease-in-out bg-orange-500 h-0.5"></div>
        <div className="font-bold font-serif text-3xl md:text-5xl tracking-tight ">
          Best & Good
        </div>
        <div className="md:w-1/2 w-full m-6  ">
          <p className="text-center  w-full   text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            at tenetur, doloremque, ea porro itaque, nostrum fugiat odit
            pariatur quidem amet labore vitae eius harum ex natus officiis
            similique officia.
          </p>
        </div>
      </div>
      <div className="flex flex-col  md:flex-row   w-full h-auto items-center justify-center object-cover  gap-6 ">
        <div className="group lg:w-80 overflow-clip  ">
          <img className="w-10/12 mx-auto group-hover:scale-110 transition-all duration-500 delay-75 ease-in-out " src="food.jpg" alt="img" />
        </div>

        <div className="group  lg:w-80 overflow-clip ">
          <img className="w-10/12 mx-auto  group-hover:scale-110 transition-all duration-500 delay-75 ease-in-out" src="food1.jpg" alt="" />
        </div>
        <div className="group  lg:w-80 overflow-clip ">
          <img className="w-10/12 mx-auto  group-hover:scale-110 transition-all duration-500 delay-75 ease-in-out" src="food.jpg" alt="" />
        </div>
       
      </div>
    </div>
  );
};

export default Best;
