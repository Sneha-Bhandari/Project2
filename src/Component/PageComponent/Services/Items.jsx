import React from 'react'
import { ImSpoonKnife } from "react-icons/im";
import { GiCirclingFish } from "react-icons/gi";
import { GiCoffeeCup } from "react-icons/gi";
import { TbMeat } from "react-icons/tb";
import { LuSoup } from "react-icons/lu";
import { BiSolidDrink } from "react-icons/bi";

const Items = () => {
    const item=[
        {
            icon:<ImSpoonKnife />,
            title:"Enjoy Eating",
            description:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
        },
        {
            icon:<GiCirclingFish />,
            title:"Fresh Sea Foods",
            description:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
        },
        {
            icon:<GiCoffeeCup />,
            title:"Cup of Coffees",
            description:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
        },
        {
            icon:<TbMeat />,
            title:"Meat Eaters",
            description:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
        },
        {
            icon:<LuSoup />,
            title:"Free Hot Soup",
            description:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
        },
        {
            icon:<BiSolidDrink />,
            title:"Drinks & Beverages",
            description:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
        },
        {
            icon:<ImSpoonKnife />,
            title:"Meat Eaters",
            description:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
        },
        {
            icon:<ImSpoonKnife />,
            title:"Cup of Coffees",
            description:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
        },
       
        

    ]
  return (
    <div className='h-lvh'>
      <div className='grid grid-cols-4 gap-5 mx-auto w-10/12 h-full   justify-center items-center mt-24 ' >
        {item.map((val,i)=>{
            return(
                <div  key={i}>
                    <div className='  p-6 w-full h-full  flex flex-col gap-3'>
                    <div className='bg-orange-500  rounded-full w-fit h-fit p-6 text-white text-4xl' >{val.icon}</div>
                    <div className='text-orange-500 uppercase tracking-wide font-medium font-serif'>{val.title}</div>
                    <div className='text-gray-500 text-left text-base'>{val.description}</div>
                    </div>
                </div>
            )
        })}
      </div>

    </div>
  )
}

export default Items
