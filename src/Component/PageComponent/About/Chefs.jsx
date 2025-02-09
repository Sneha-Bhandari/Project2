import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const Chefs = () => {
  const chef = [
    {
      image: 'person.jpg',
      name: 'Mellisa Howard',
      post: 'CEO Founder',
    },
    {
      image: 'person2.jpg',
      name: 'Mellisa Howard',
      post: 'CEO Founder',
    },
    {
      image: 'person.jpg',
      name: 'Mellisa Howard',
      post: 'CEO Founder',
    },
    {
      image: 'person2.jpg',
      name: 'Mellisa Howard',
      post: 'CEO Founder',
    },
  ];

  return (
    <div className="h-auto my-12">
      {/* Section Title */}
      <div className="flex flex-col group gap-5 justify-center items-center">
        <div className="bg-orange-400 w-24 h-0.5 group-hover:w-1/2 transition-all duration-700 ease-in-out"></div>
        <h1 className="text-4xl md:text-5xl font-semibold font-serif">Chefs</h1>
      </div>

      {/* Carousel */}
      <div className="h-auto w-full md:w-11/12 mx-auto mt-12">
        <Carousel
          showIndicators={false}
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          stopOnHover={true}
          centerMode={true}
          centerSlidePercentage={100 / 3} // Adjust for 3 slides
        >
          {chef.map((val, i) => (
            <div
              className="flex flex-col items-center p-4 group rounded-md shadow-lg transition-transform duration-500 ease-in-out"
              key={i}
            >
              {/* Chef Image */}
              <img
                className="h-64 md:h-80 w-40 md:w-44 lg:w-48 object-cover rounded-md transition-transform duration-500 ease-in-out group-hover:scale-110 mb-4"
                src={val.image}
                alt={val.name}
              />
              {/* Chef Name */}
              <div className="text-lg md:text-xl font-bold font-serif transition-transform duration-500 ease-in-out group-hover:scale-105">
                {val.name}
              </div>
              {/* Chef Position */}
              <div className="text-gray-500 font-light text-sm md:text-base mb-2 transition-transform duration-500 ease-in-out group-hover:scale-105">
                {val.post}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Chefs;
