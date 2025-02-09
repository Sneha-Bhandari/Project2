import React from 'react'
import { Carousel } from "react-responsive-carousel";


const Testimonial = () => {
    
    const testimonials = [
        {
          quote:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
          name: "Mellisa Howard",
          position: "CEO, XYZ Company",
          image:" human1.jpg"
        },
        {
          quote:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
          name: "John Doe",
          position: "CTO, ABC Corporation",
          image:"human2.jpg"
        },
        {
          quote:
            "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave.",
          name: "Jane Smith",
          position: "Designer, Example Studio",
          image: "human3.jpg"
        },
      ];
      
  return (
    <div className='h-full mb-6 mt-12 '>
        <div className='flex w-full flex-col items-center group overflow-clip pt-24  gap-'>
<div className='bg-orange-500 w-24 h-0.5 mb-6 group-hover:w-1/2 transition-all duration-700 delay-75 ease-in-out'></div>
       <h1 className='text-5xl font-serif font-semibold '>Testimonial</h1>
       <div className='h-full md:w-6/12 w-full p-6 flex flex-col  '>
        <Carousel className=' '
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={2000}
        showArrows={false}
        renderDotsOutside={false}
        
       >
            {testimonials.map((val,i)=>{
                return (
                    <div key={i} className=' md:flex md:justify-center group  overflow-clip    md:h-full md:w-full flex-col '>
                        <div className=' mb-6 text-xl font-normal tracking-wide  px-12 text-center overflow-clip  '>"{val.quote}"</div>
                       <div className='flex flex-col  mb-24 lg:flex-row justify-center  gap-6   '>
                        <div className=' h-9 w-9 rounded-full md:h-16 md:w-16  '>
                          <img className='rounded-full object-cover shadow-lg border-2 border-orange-500 ' src={val.image} alt="" /></div>
          
                        <div className='flex flex-col items-start  gap-1   '>
                            <h1 className='font-serif font-medium'>{val.name}</h1>
                            <h2 className='  text-gray-500 '>{val.position}</h2>
                        </div>
                       </div>
                    </div>
                )
            })}
        </Carousel>
       </div>
        </div>
    </div>
  )
}

export default Testimonial

