import React from "react";

const Blog = () => {
  const cards = [
    {
      image: "food.jpg",
      title: "How To Bake A Good Taste Food",
      date: "April 22, 2018",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        button:"Read More"
    },
    {
      image: "food1.jpg",
      title: "How To Bake A Good Taste Food",
      date: "April 22, 2018",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        button:"Read More"

    },
  ];
  return (
    <div className="md:h-lvh h-full flex flex-col gap-6">
      <div className="flex flex-col group overflow-clip w-1/2 h-full  items-center justify-center mx-auto gap-6">
      <div className="w-24 group-hover:w-full transition-all duration-700 delay-75 ease-in-out bg-orange-500 h-0.5"></div>
        <div className="font-bold font-serif text-5xl tracking-tight mb-3 ">
         Blog
        </div>
       </div>


        
        <div className="md:grid md:grid-cols-2 md:h-fit h-full w-full pb-3 gap-6 px-3 lg:px-12">
          {cards.map((val, i) => {
            return (
              <div key={i} className="bg-white border overflow-clip group flex flex-col gap-12 my-6 lg:shadow-md border-white hover:border-gray-200  rounded-lg ">
               <div className="h-88 overflow-clip w-full">
               <img
                  src={val.image}
                  alt=""
                  className="w-full transition-all duration-700 delay-75 ease-in-out  group-hover:scale-110 h-80 object-cover"
                />
               </div>
                <div className="flex flex-col p-5 gap-3">
                  <div className="text-xl font-serif text-orange-500 font-semibold">{val.title}</div>
                  <div className="text-gray-400 font-light text-sm">{val.date}</div>
                  <div className="text-gray-500">{val.description}</div>

                  <div className={`bg-orange-500 transition-all duration-700 delay-75 ease-in-out group-hover:bg-white group-hover:text-orange-500 border-orange-500 border w-fit  cursor-pointer h-fit px-6 py-2 text-white font-thin`}>{val.button}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    
  );
};

export default Blog;
