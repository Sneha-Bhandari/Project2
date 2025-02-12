import React from "react";

const Menu = () => {
  const images = [
    {
      image: "item1.jpg",
      title: "Baked new Zealand mussels",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
      cost: "$12.00",
    },
    {
      image: "item1.jpg",
      title: "Baked new Zealand mussels",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
      cost: "$12.00",
    },
    {
      image: "item5.jpg",
      title: "Baked new Zealand mussels",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
      cost: "$12.00",
    },
    {
      image: "item5.jpg",
      title: "Baked new Zealand mussels",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
      cost: "$12.00",
    },
    {
      image: "item5.jpg",
      title: "Baked new Zealand mussels",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
      cost: "$12.00",
    },
    {
      image: "item5.jpg",
      title: "Baked new Zealand mussels",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
      cost: "$12.00",
    },
    {
      image: "item5.jpg",
      title: "Baked new Zealand mussels",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
      cost: "$12.00",
    },
    {
      image: "item5.jpg",
      title: "Baked new Zealand mussels",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
      cost: "$12.00",
    },
  ];
  return (
    <div className=" ">

        <div className=" flex flex-col gap-6 justify-center items-center group overflow-clip mt-14">
          <div className="bg-orange-500 w-24 h-0.5 rounded-lg group-hover:w-1/2 group-hover:scale-110 transition-all duration-500 delay-75 ease-in-out"></div>
          <div className="text-5xl font-serif w-fit font-bold">Our Menu</div>
        </div>

      <div className="h-full items-start justify-start grid gap-8 lg:gap-0  sm:grid-cols-3 lg:grid-cols-2  w-11/12 mx-auto mt-12  ">
        {images.map((val, i) => {
          return (
            <div key={i} className="overflow-clip group hover:border-gray-200">
              <div
                className={`lg:grid flex flex-col-reverse lg:grid-cols-2   justify-center items-center `}
                >
                <div
                  className={`flex flex-col ${
                    i < 2 || (i > 3 && i < 6) ? "lg:order-first " : "lg:order-last"
                  } justify-center items-start p-2 gap-3`}
                  >
                  <div className="text-lg font-serif font-bold  ">
                    {val.title}
                  </div>
                  <div className="text-gray-400">{val.description}</div>
                  <div className="text-orange-400 text-3xl font-medium">
                    {val.cost}
                  </div>
                </div>
                <div className="h-52 overflow-clip w-full">
                  <img
                    className=" w-full bg-red-500 h-full object-cover transition-all duration-700 delay-75 ease-in-out   group-hover:scale-110 "
                    src={val.image}
                    alt="Image1"
                    />
                </div>
              </div>
            </div>
          );
        })}
      </div>
                
    </div>
  );
};

export default Menu;
