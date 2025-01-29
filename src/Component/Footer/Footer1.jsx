import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer1 = () => {
  const aboutus = [
    { icons: <FaTwitter /> },
    { icons: <FaFacebookF /> },
    { icons: <TiSocialLinkedin /> },
    { icons: <FaInstagram /> },
  ];
  const links = [
    { title: "About" },
    { title: "Terms of Use" },
    { title: "Disclaimers" },
    { title: "Contact" },
  ];
  return (
    <div className="bg-gray-100 mt-24 py-12 ">
     <div className=" w-11/12 flex  h-full justify-evenly px-12 flex-col gap-5 mx-auto">
     <div className=" w-full flex gap-12  mt-12 ">
        <div className="w-1/3 font-serif ">
          <div className="text-black h-fit w-fit  font-bold tracking-tighter">
            About Us
          </div>
          <p className="text-gray-600 pb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            illum velit nisi numquam minus veritatis deleniti reprehenderit
            sequi.
          </p>
          <div className="flex gap-4 ">
            {aboutus.map((val, i) => {
              return (
                <div key={i}>
                  <div className=" text-xl text-orange-500 ">{val.icons}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-1/3 flex flex-col  px-4  gap-6 tracking-tight text-base ">
          <h1 className="font-serif font-bold">Opening Hour</h1>
          <div className="flex flex-col ">
            <h1>Sunday-Thursday</h1>
            <h1 className="text-gray-600">5AM-10PM</h1>
          </div>

       
        </div>
        <div className="w-1/3 flex gap-3  pl-12 flex-col  ">
          <div className=" font-bold font-serif">Quick Links</div>
          {links.map((value, index) => {
            return <div key={index}>
             <Link to={'/'} className="text-orange-500">{value.title}</Link> 
              </div>;
          })}
        </div>
      </div>
      <div>
            <h1 className="font-bold ">Contact Info</h1>
           <div className="flex flex-row gap-32  justify-start items-center mx-auto mt-3 font-serif">
           <div className="flex  gap-10">
           <div>
              <h1 className="font-medium">Address:</h1>
              <p className="text-gray-600">
                34 Street Name, City Name Here, United States
              </p>
            </div>
            <div>
              <h1 className="font-medium">Phone:</h1>
              <p className="text-gray-600">+1 242 4942 290</p>
            </div>
            <div>
              <h1 className="font-medium">Email:</h1>
              <p className="text-gray-600">info@yourdomain.com</p>
            </div>
           </div>
          </div>
      </div>
      <div className="flex gap-2 text-gray-600 mt-10 justify-center  ">
        Copyright © 2025 All rights reserved | This template is made with
        <h1 className="text-sm  py-2 gap-2 ">
          <FaRegHeart />
        </h1>
        by <a className='text-orange-500' href="www.collorlib.com">Colorlib</a>
      </div>
     </div>
    </div>
  );
};

export default Footer1;
