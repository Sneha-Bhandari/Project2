import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  const images = [
    {
      image: "wall.jpg",
      description: "Eat,Drink at Gourmet",
      button: "Get Started",
    },
    { image: "wall1.jpg",
    description: "Enjoy Delicious food at Gourmet",
    button: "Get Started" },
   
  ];

  return (
    <div>
      <div className="relative h-lvh w-full ">
        <Carousel
          autoPlay
          interval={3000}
          showStatus={false}
          infiniteLoop
          showThumbs={true}
          // showIndicators={true}
          // showStatus={true}
          // showDots={true}
          showArrows={false}
        >
          {images.map((val, index) => {
            return (
              <div key={index}>
                <div>
                  <img
                    src={val.image}
                    alt="image"
                    className="w-screen h-screen object-cover"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white flex flex-col gap-4">

                <div className="text-7xl font-bold mb-3 font-serif ">{val.description}</div>
                <div className="uppercase border border-white  w-fit ml-60 px-3 py-2 hover:bg-white hover:text-black transition">{val.button}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
        
      </div>
    </div>
  );
}

export default Banner;
