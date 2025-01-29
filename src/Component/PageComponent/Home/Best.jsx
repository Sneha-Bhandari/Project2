import React from "react";

const Best = () => {
  return (
    <div className="h-lvh mb-24   ">
      <div className="flex flex-col group overflow-clip w-1/2 h-1/3  items-center justify-center mx-auto gap-6">
        <div className="w-24 group-hover:w-full transition-all duration-700 delay-75 ease-in-out bg-orange-500 h-0.5"></div>
        <div className="font-bold font-serif text-5xl tracking-tight ">
          Best & Good
        </div>
        <div>
          <p className="text-center text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            at tenetur, doloremque, ea porro itaque, nostrum fugiat odit
            pariatur quidem amet labore vitae eius harum ex natus officiis
            similique officia.
          </p>
        </div>
      </div>
      <div className="flex w-full h-auto  justify-center   gap-6 ">
        <div className="group w-72 overflow-clip  ">
          <img className="w-72 group-hover:rotate-3 group-hover:scale-110 transition-all duration-500 delay-75 ease-in-out " src="food.jpg" alt="img" />
        </div>

        <div className="group w-72 overflow-clip ">
          <img className="w-72 group-hover:rotate-3 group-hover:scale-110 transition-all duration-500 delay-75 ease-in-out" src="food1.jpg" alt="" />
        </div>
        <div className="group  w-72 overflow-clip ">
      
          <img className="w-full group-hover:rotate-3 group-hover:scale-110 transition-all duration-500 delay-75 ease-in-out " src="food2.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Best;
