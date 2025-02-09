import React from 'react'

const NewsBanner = () => {
  return (
    <div>
    <div className="relative md:h-full h-[100vh] mb-6">
      <img className="w-full h-full object-cover " src="wallpaper1.jpg" alt="Image" />
      <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center text-white flex flex-col gap-6 ">
        <div className="text-7xl font-bold  font-serif ">News & Articles</div>
        <div className="text-3xl font-thin">A delicious and tasty food</div>
        <div className="uppercase border border-white  w-fit  px-3 py-2 hover:bg-white hover:text-black transition">
          Get Started
        </div>
      </div>
    </div>
 
  </div>
 
  )
}

export default NewsBanner
