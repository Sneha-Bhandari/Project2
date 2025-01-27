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
    <div className='h-lvh '>
        <div className='flex flex-col gap-5 justify-center items-center   py-12'>
      <div className='bg-orange-400 w-24 h-0.5'></div>
    <h1 className='text-5xl font-semibold font-serif'>Chefs</h1>
        </div>
       <div className='  h-auto w-5/5 rounded-sm  flex justify-center items-center mx-auto mt-12  '>
       <Carousel className=' p-8 '
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
                <div className='flex flex-col m-2  rounded-md shadow-md' key={i}>
                    <img className='h-80 w-44 object-cover mb-8' src={val.image} alt="" />
                    <div className='text-xl font-bold font-serif'>{val.name}</div>
                    <div className='text-gray-500 font-thin mb-4'>{val.post}</div>
                </div>
            )
        })}
</Carousel>
       </div>
    </div>
  )
}

export default Chefs
