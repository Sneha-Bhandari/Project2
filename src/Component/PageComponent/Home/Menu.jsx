import React from 'react'

const Menu = () => {
  const images=[
    {
      image:"item1.jpg",
        title:"Baked new Zealand mussels",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
        cost:"$12.00"

    },
    {
      image:"item1.jpg",
        title:"Baked new Zealand mussels",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
        cost:"$12.00"

    },
    {
      image:"item5.jpg",
        title:"Baked new Zealand mussels",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
        cost:"$12.00"

    },
    {
      image:"item5.jpg",
        title:"Baked new Zealand mussels",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
        cost:"$12.00"

    },{
      image:"item5.jpg",
        title:"Baked new Zealand mussels",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
        cost:"$12.00"

    },{
      image:"item5.jpg",
        title:"Baked new Zealand mussels",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
        cost:"$12.00"

    },{
      image:"item5.jpg",
        title:"Baked new Zealand mussels",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
        cost:"$12.00"

    },{
      image:"item5.jpg",
        title:"Baked new Zealand mussels",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
        cost:"$12.00"

    }
]
  return (
    <div >
        <div className=' flex flex-col gap-6 justify-center items-center  mt-14'>
            <div className='bg-orange-500 w-24 h-0.5 rounded-lg'></div>
            <div className='text-5xl font-serif font-bold'>Our Menu</div>
        </div>
     
     <div className='h-full gap-6 items-start justify-start grid  sm:grid-cols-3 lg:grid-cols-2  w-11/12 mx-auto mt-12  '>
      {images.map((val,i)=>{
        return(
     <div key={i} >

            <div  className=' grid grid-cols-2  justify-center items-center mx-auto '>
            <div className='flex flex-col justify-center items-start p-4 gap-3'>
              <div className='text-lg font-serif font-bold  '>{val.title}</div>
             <div className='text-gray-400'>{val.description}</div> 
             <div className='text-orange-400 text-3xl font-medium'>{val.cost}</div>
            </div>
            <img className=' w-full h-full object-cover' src={val.image} alt="Image1" />
            </div>
     </div>


          
        )
      })}
     </div>
    </div>
  )
}

export default Menu
