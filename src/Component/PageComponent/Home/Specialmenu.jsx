import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Specialmenu = () => {
  const menuItems = [
    {
      image: "wall1.jpg",
      cost: "$11.50",
      description: "Organic Tomato Salad, Gorgonzola cheese grapeds",
    },
    {
      image: "wall1.jpg",
      cost: "$11.50",
      description: "Baked Brocoli",
    },
    {
      image: "wall1.jpg",
      cost: "$11.50",
      description: "Organic Tomato Salad, Gorgonzola cheese grapeds",
    },
    {
      image: "wall.jpg",
      cost: "$11.50",
      description: "Organic Tomato Salad, Gorgonzola cheese grapeds",
    },
  ];
  return (
    <div className=" ">
      <div className="h-1/2  flex flex-col py-5 justify-center items-center mt-12  gap-4">
        <div className="bg-orange-500 w-24 h-0.5"></div>
        <div className="text-5xl font-serif font-semibold">Special Menu</div>
      </div>
      <div className=" bg-green-200">
      

        <div className="bg-gray-100 relative">
          <Carousel
            showArrows={true}
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
           
            centerMode={false}
            centerSlidePercentage={50}
            loop
               
                
                
                scrollAnimationDuration={1000}
          >
            {menuItems.map((val, i) => {
              return (
                <div key={i}>
                  <div className="mt-12">
                    <img className="h-1/2 w-1/2 object-cover " src={val.image} alt="" />
                    <div className="absolute top-1/2 mx-auto p-8 flex flex-col gap-4 items-center justify-center">

                      <div className="text-5xl text-white font-serif font-bold">{val.cost}</div>
                      <div className="text-5xl text-white font-serif font-bold capitalize">{val.description}</div>
                      </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Specialmenu;
