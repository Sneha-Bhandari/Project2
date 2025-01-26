import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Specialmenu = () => {
    const menuItems=[
        {
            image:"food1.jpg",
            cost:"$11.50",
            description:"Organic Tomato Salad, Gorgonzola cheese grapeds"

        },
        {
            image:"food.jpg",
            cost:"$11.50",
            description:"Baked Brocoli"

        },
        {
            image:"wall1.jpg",
            cost:"$11.50",
            description:"Organic Tomato Salad, Gorgonzola cheese grapeds"

        },
        {
            image:"wall.jpg",
            cost:"$11.50",
            description:"Organic Tomato Salad, Gorgonzola cheese grapeds"

        }
    ]
  return (

<div className="h-screen bg-lime-100 flex flex-col items-center py-4">
     
      <div className="flex flex-col items-center mb-10">
        <div className="bg-orange-500 w-16 h-0.5 mb-4"></div>
        <h1 className="text-4xl font-serif font-semibold tracking-tighter">
          Special Menu
        </h1>
      </div>

      {/* Carousel */}
      <div className=" ">
        <Carousel
          showArrows={true}
          autoPlay
          infiniteLoop
          showThumbs
          showStatus={false}
          interval={3000}
          centerMode={true}
          centerSlidePercentage={33.3}
          className=" "
        >
          <div className='flex h-full w-full'>
            {menuItems.map((val,i)=>{
                return(
                    <div key={i}>
                        <img src={val.image} alt="" />
                    </div>
                )
            })}
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Specialmenu;
