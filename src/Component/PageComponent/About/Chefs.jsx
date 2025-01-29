import React from 'react'
import { Carousel } from "react-responsive-carousel";

const Chefs = () => {
    const chef=[
        {
            image:"person.jpg",
            name:"Mellisa Howard",
            post:"CEO Founder"
        },
        {
            image:"person2.jpg",
            name:"Mellisa Howard",
            post:"CEO Founder"
        },
        {
            image:"person.jpg",
            name:"Mellisa Howard",
            post:"CEO Founder"
        },
        {
            image:"person2.jpg",
            name:"Mellisa Howard",
            post:"CEO Founder"
        },
        
    ]

  return (
    <div className='h-lvh my-12 '>
        <div className='flex flex-col group gap-5 justify-center items-center'>
      <div className='bg-orange-400 w-24 h-0.5 group-hover:w-1/2 transition-all duration-700 delay-75 ease-in-out'></div>
    <h1 className='text-5xl font-semibold font-serif'>Chefs</h1>
        </div>
       <div className='  h-auto w-11/12 rounded-sm  flex justify-center items-center mx-auto mt-12  '>
       <Carousel className='  '
  showIndicators={false}
  showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        stopOnHover={true}
        
          
          
          
          
        centerMode={true}
        centerSlidePercentage={33.33} 
>
 
        {chef.map((val,i)=>{
            return(
                <div className='flex flex-col m-2 overflow-clip group rounded-md shadow-md' key={i}>
                    <img className='h-80 w-44 object-cover transition-all duration-700 delay-75 ease-in-out   group-hover:scale-110 mb-8' src={val.image} alt="" />
                    <div className='text-xl font-bold font-serif transition-all duration-700 delay-75 ease-in-out   group-hover:scale-110'>{val.name}</div>
                    <div className='text-gray-500 font-thin mb-4 transition-all duration-700 delay-75 ease-in-out   group-hover:scale-110'>{val.post}</div>
                </div>
            )
        })}
</Carousel>
       </div>
    </div>
  )
}

export default Chefs
