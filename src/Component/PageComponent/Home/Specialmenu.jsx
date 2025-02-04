// // import React from "react";
// // import { Carousel } from "react-responsive-carousel";
// // import "react-responsive-carousel/lib/styles/carousel.min.css";

// // const Specialmenu = () => {
// //   const menuItems = [
// //     {
// //       image: "wall1.jpg",
// //       cost: "$11.50",
// //       description: "Organic Tomato Salad, Gorgonzola cheese grapeds",
// //     },
// //     {
// //       image: "wall1.jpg",
// //       cost: "$11.50",
// //       description: "Baked Brocoli",
// //     },
// //     {
// //       image: "wall1.jpg",
// //       cost: "$11.50",
// //       description: "Organic Tomato Salad, Gorgonzola cheese grapeds",
// //     },
// //     {
// //       image: "wall.jpg",
// //       cost: "$11.50",
// //       description: "Organic Tomato Salad, Gorgonzola cheese grapeds",
// //     },
// //   ];
// //   return (
// //     <div className=" ">
// //       <div className="h-1/2  flex flex-col py-5 justify-center items-center mt-12  gap-4">
// //         <div className="bg-orange-500 w-24 h-0.5"></div>
// //         <div className="text-5xl font-serif font-semibold">Special Menu</div>
// //       </div>
// //       <div className=" bg-green-200">
      

// //         <div className="bg-gray-100 relative">
// //           {/* <Carousel
// //             showArrows={true}
// //             autoPlay
// //             infiniteLoop
// //             showThumbs={false}
// //             showStatus={false}
           
// //             centerMode={false}
// //             centerSlidePercentage={50}
// //             loop
               
                
                
// //                 scrollAnimationDuration={1000}
// //           >
// //             {menuItems.map((val, i) => {
// //               return (
// //                 <div key={i}>
// //                   <div className="mt-12">
// //                     <img className="h-1/2 w-1/2 object-cover " src={val.image} alt="" />
// //                     <div className="absolute top-1/2 mx-auto p-8 flex flex-col gap-4 items-center justify-center">

// //                       <div className="text-5xl text-white font-serif font-bold">{val.cost}</div>
// //                       <div className="text-5xl text-white font-serif font-bold capitalize">{val.description}</div>
// //                       </div>
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </Carousel> */}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Specialmenu;

// import React, { useState } from "react";

// import { Carousel } from "react-responsive-carousel";
// //import "react-multi-carousel/lib/styles.css";


// const Specialmenu = () => {

//   const [Show, setShow] = useState(null)



//   const menuItems = [
//     {
//       image: "wall1.jpg",
//       cost: "$11.50",
//       description: "Organic Tomato Salad, Gorgonzola cheese grapeds",
//     },
//     {
//       image: "wall1.jpg",
//       cost: "$11.50",
//       description: "Baked Brocoli",
//     },
//     {
//       image: "wall1.jpg",
//       cost: "$11.50",
//       description: "Organic Tomato Salad, Gorgonzola cheese grapeds",
//     },
//     {
//       image: "wall.jpg",
//       cost: "$11.50",
//       description: "Organic Tomato Salad, Gorgonzola cheese grapeds",
//     },
//   ];


//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },

//   };








//   return (

//     <div className="bg-white h-lvh px-6 py-12 group overflow-clip ">
//       <div className="text-center  mb-8">
//         <div className="bg-orange-500 w-24 h-0.5 mx-auto group-hover:w-1/2 transition-all duration-700 delay-75 ease-in-out"></div>
//         <h1 className="text-4xl font-serif font-semibold mt-6">Special Menu</h1>
//       </div>

//       <Carousel
//         responsive={responsive}
//         infinite={true}
//         showDots={true}
//         swipeable={true}
//         draggable={true}
//         arrows={false}
//         // autoPlay={true}
//         // autoPlaySpeed={3000}
//         keyBoardControl={true}
//         // transitionDuration={500}
//         itemClass="px-4"
//       >
//         {menuItems.map((val, i) => (
//           <div
//             key={i}
//             onMouseEnter={() => {
//               setShow(i)
//             }}
//             onMouseLeave={() => {
//               setShow(null)
//             }}
//             className=" bg-white w-full  mx-auto h-96 flex items-center shadow-md rounded-lg  overflow-hidden group"
//           >
//             <img
//               src={val.image}
//               alt={val.description}
//               className={`group-hover:scale-110 ${Show == i ? "transition-all" : ""}   transition-all ease-in-out duration-300  h-full  w-full bg-cover`}
//             // className="w-full h-full object-cover"
//             />
//             <div className={` group-hover:scale-110 h-full ${Show == i ? " transition-all text-textcolorred" : "opacity-50"}  transition-all ease-in-out duration-300 flex flex-col items-center justify-between  h-20  w-full  absolute`}>
//               <p className=" text-xl text-white font-bold">{val.cost}</p>
//               <p className=" text-sm text-white mt-2">{val.description}</p>
//             </div>
//           </div>
//         ))}
//       </Carousel>
//     </div>


//   );
// };

// export default Specialmenu;
