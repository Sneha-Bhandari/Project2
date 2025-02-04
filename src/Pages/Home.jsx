import React from "react";
import Banner from "../Component/PageComponent/Home/Banner";
import Therestaurant from "../Component/PageComponent/Home/Therestaurant";
import Best from "../Component/PageComponent/Home/Best";
import Blog from "../Component/PageComponent/Home/Blog";
import Testimonial from "../Component/PageComponent/Home/Testimonial";
//import Specialmenu from "../Component/PageComponent/Home/Specialmenu";
import Menu from "../Component/PageComponent/Home/Menu";
//import About from "../Pages/About";

//import { Carousel } from "react-responsive-carousel";


const Home = () => {
  return (
    <div className="relative">
      <Banner/>
      <Therestaurant/>
      <Best/>
      {/* <Specialmenu/> */}
      <Menu/>
      <Testimonial/>
      <Blog/>
    </div>
    
    
  
  );
};

export default Home;
