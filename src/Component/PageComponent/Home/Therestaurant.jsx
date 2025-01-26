import React from "react";

const Therestaurant = () => {
  return (
    <div className="h-lvh  flex items-center justify-center ">
        
      <div className="  flex w-11/12 mx-auto mt-24  h-1/2 gap-24">
        <img className="h-full w-full  " src="wall.jpg" alt="Food" />

        <div className=" flex flex-col  justify-center gap-8 tracking-tight">
            <div className="w-20 h-0.5 bg-orange-500"></div>
          <div className="font-bold text-5xl w-fit border-t-orange-500  font-serif"> <h1 className="">The Restaurant</h1></div>
            <div className="flex flex-col text-gray-500 gap-5"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis maiores soluta officia quos, animi neque eius assumenda culpa distinctio libero,</p><p> Amet  voluptate harum ipsam alias sit totam soluta impedit.</p></div>
          <img className='w-32 h-24' src="sign.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Therestaurant;
