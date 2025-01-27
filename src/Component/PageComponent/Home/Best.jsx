import React from "react";

const Best = () => {
  return (
    <div className="h-lvh mb-24 ">
      <div className="flex flex-col   w-1/2 h-1/3  items-center justify-center mx-auto gap-4">
        <div className="w-24 bg-orange-500 h-0.5"></div>
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
      <div className="flex w-full h-auto  justify-center  gap-6 ">
        <img className="w-72 " src="food.jpg" alt="img" />
        <img className="w-72 " src="food1.jpg" alt="" />
        <img className="w-72 " src="food2.jpg" alt="" />
      </div>
    </div>
  );
};

export default Best;
