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
    <div className='h-lvh '>
        <div className='flex flex-col items-center py-24'>
<div className='bg-orange-500 w-24 h-0.5 mb-6'></div>
       <h1 className='text-5xl font-serif font-semibold mb-12'>Testimonial</h1>
       <div className=' h-auto w-1/2 rounded-sm p-8'>
        <Carousel className='  h-full'
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
                    <div key={i} className=' flex flex-col '>
                        <div className=' mb-6 text-xl font-normal -tracking-tighter p-6 text-left w-full'>"{val.quote}"</div>
                       <div className='flex flex-row px-8'>
                        <div className=''><img className='h-16 w-16 mr-5 rounded-full object-cover' src={val.image} alt="" /></div>
                       
                        <div className='flex flex-col gap-2 mb-12 mx-2'>
                            <h1 className='font-serif font-medium'>{val.name}</h1>
                            <h2 className='w-48 text-gray-500 '>{val.position}</h2>
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

