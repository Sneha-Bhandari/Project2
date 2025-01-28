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
    <div className="h-lvh  ">
      <div className="flex flex-col relative  mt-12 items-center  gap-6 w-11/12 h-full mx-auto py-12">
        <div className="bg-orange-500 w-24 h-[3px] rounded-full absolute top-3   "></div>
        <div>
          <h1 className="font-bold font-serif  text-5xl">Blog</h1>
        </div>

        
        <div className="grid grid-cols-2 mt-4 gap-12">
          {cards.map((val, i) => {
            return (
              <div key={i} className="bg-white shadow-xl rounded-lg ">
                <img
                  src={val.image}
                  alt=""
                  className="w-full h-80 object-cover"
                />
                <div className="flex flex-col p-5 gap-3">
                  <div className="text-xl font-serif text-orange-500 font-semibold">{val.title}</div>
                  <div className="text-gray-400 font-light text-sm">{val.date}</div>
                  <div className="text-gray-500">{val.description}</div>
                  <div className="bg-orange-500 w-fit h-fit px-6 py-2 text-white font-thin">{val.button}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
