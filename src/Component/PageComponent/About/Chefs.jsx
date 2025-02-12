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
   
    <div className="h-screen flex flex-col w-11/12 mx-auto  items-center justify-center bg-white">
          <div className="flex flex-col group gap-5 justify-center items-center">
        <div className="bg-orange-400 w-24 h-0.5 group-hover:w-1/2 transition-all duration-700 ease-in-out"></div>
        <h1 className="text-5xl font-semibold font-serif">Chefs</h1>
      </div>

            <div className="w-full h-2/3 bg-red-300 overflow-clip flex items-center  justify-center">
                <Carousel className=''
                    autoPlay  
                    interval={3000}  
                    infiniteLoop  
                    showArrows={false}
                    showStatus={false}
                    showThumbs={false}
                    centerMode
                    centerSlidePercentage={33.33}
                    stopOnHover={false}
                    
                >

                    {chef.map((person, index) => (
                        <div key={index} className="flex flex-col items-center mb-10">
                            <div className="w-64 h-64   overflow-hidden mb-6 ">
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h4 className="text-xl font-semibold mt-4">{person.name}</h4>
                            <p className="text-center w-full text-gray-600 text-lg px-8">
                                {person.post}
                            </p>
                           
                        </div>
                    ))}

                </Carousel>
            </div>
        </div>
      
     

      
     
      
  );
};

export default Chefs;
