import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

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
    <div className="bg-white">
      <div className="h-1/2 mt-80 w-full grid grid-cols-3 gap-12 bg-lime-100 ">
        <div className="grid grid-rows-3   mt-12 ml-12  font-serif justify-center">
          <div className="text-black  font-bold tracking-tighter  py-8">
            About Us
          </div>
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            illum velit nisi numquam minus veritatis deleniti reprehenderit
            sequi.
          </p>
          <div className="flex gap-4 ">
            {aboutus.map((val, i) => {
              return (
                <div key={i}>
                  <div className=" text-sm text-orange-500 ">{val.icons}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col py-8 mt-12 ml-12 px-4  gap-6 tracking-tight text-base ">
          <h1 className="font-serif x font-bold">Opening Hour</h1>
          <div className="flex flex-col ">
            <h1>Sunday-Thursday</h1>
            <h1 className="text-gray-600">5AM-10PM</h1>
          </div>

          <div className="flex flex-col gap-2 mt-3 font-serif">
            <h1 className="font-bold">Contact Info</h1>
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
        <div className="flex gap-3  flex-col  mt-12 ml-24  py-6">
          <div className=" font-bold font-serif">Quick Links</div>
          {links.map((value, index) => {
            return <div key={index}>
             <div className="text-orange-500">{value.title}</div> 
              </div>;
          })}
        </div>
      </div>
      <div className="bg-white  flex gap-2 text-gray-600  justify-center p-12">
        Copyright©2025 All rights reserved | This template is made with
        <h1 className="text-xs py-2 gap-2 ">
          <FaRegHeart />
        </h1>
        by <a className='text-orange-500' href="www.collorlib.com">Colorlib</a>
      </div>
    </div>
  );
};

export default Footer1;
