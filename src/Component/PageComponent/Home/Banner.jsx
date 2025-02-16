import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

function Banner() {
  const images = [
    {
      image: "aaa.jpg",
      description: "Eat,Drink at Gourmet",
      button: "Get Started",
    },
    {
      image: "aa.avif",
      description: "Enjoy Delicious food at Gourmet",
      button: "Get Started",
    },
  ];

  return (
    <div>
      <div className="relative h-lvh w-full ">
        <Carousel
          autoPlay
          interval={1000}
          showStatus={false}
          infiniteLoop
          showThumbs={true}
          // showIndicators={true}
          // showStatus={true}
          showArrows={false}
        >
          {images.map((val, index) => {
            return (
              <div key={index} className="">
                <div>
                  <img
                    src={val.image}
                    alt="image"
                    className="w-screen h-screen object-cover "
                  />
                  <div className="absolute md:w-1/2  md:left-1/4 top-1/2 px-6  justify-center items-center  text-center text-white flex flex-col gap-4">
                    <div className="md:text-6xl text-4xl font-bold mb-3 font-serif">
                      {val.description}
                    </div>
                    <Link
                      to={"/"}
                      className="uppercase  border border-white  w-fit  px-3 py-2  hover:bg-white hover:text-black  transition-all duration-700 delay-75 ease-in-out"
                    >
                      {val.button}
                    </Link>
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


