import React from "react";
import { Carousel } from "react-responsive-carousel";
const images = [
  { image: "wall.jpg" },
  { image: "wall1.jpg" },
  { image: "wall2.jpg" },
];

const Banner = () => {
  return (
    <div className="relative">
      {/* <Carousel 
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 1
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 1
          }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {     
    <img
      src="wall.jpg"
      style={{
        display: 'block',
        height: '100%',
        margin: 'auto',
        width: '100%'
      }}
    />        }

        {images.map((val, i) => {
          return (
            <div key={i}>
              <img className="w-full " src={val.image} alt="" />
            </div>
          );
        })}
      </Carousel> */}

      
       
              <div>
                  {images.map((val,i)=>{
                     return(
                         <div key={i}>
                             <img  className='w-full h-full' src={val.image} alt="" />
                         </div>
                     )
                    })}
                 </div>
            
    

    </div>
  );
};

export default Banner;
