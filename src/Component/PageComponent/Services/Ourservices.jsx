import React from 'react'

const Ourservices = () => {
  return (
    <div>
     
        <img className="w-full" src="wall.jpg" alt="Image" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center text-white flex flex-col gap-4 ">
          <div className="text-7xl font-bold  font-serif ">Our Services</div>
          <div className="text-2xl font-thin">A delicious and tasty food</div>
          <div className="uppercase border border-white  w-fit  px-3 py-2 hover:bg-white hover:text-black transition">
            Get Started
          </div>
        </div>
      </div>
   
  )
}

export default Ourservices
