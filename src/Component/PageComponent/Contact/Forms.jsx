
import React from "react";
import { IoLocation } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Formik, Form, Field } from "formik";
//import * as yup from "yup";

const Forms = () => {
  const forming = [
    {
      name: "Name",
      type: "text",
      placeholder: "",
    },
    {
      name: "Phone",
      type: "number",
      placeholder: "",
    },
    {
      name: "Email",
      type: "email",
      placeholder: "",
    },
    {
      name: " WriteMessage",
      type: "textarea",
      placeholder: "",
    },
  ];
  const details = [
    {
      Location: "34 Street Name, City Name Here, United States",
      phone: "+1 242 4942 290",
      email: "info@yourdomain.com",
    },
  ];
  return (
    <div className="h-fit ">
      <div className="flex   justify-center  items-center mx-auto h-fit w-11/12 mt-12 ">
       
          
          <div className="bg-white w-1/2 h-full   ">
          <Formik initialValues={{ Name: "", Phone: "", Email: "", WriteMessage: "" }}>
            {() => (
              <Form className="flex flex-col gap-6">
                {forming.map((field, i) => (
                  <div key={i}>
                    <label className="text-gray-600 font-medium">{field.name}</label>
                    <Field
                      as={field.type === "textarea" ? "textarea" : "input"}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full  border border-gray-300  px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                ))}
                <button
                  type="submit"
                  className="bg-orange-500 text-white font-medium py-2 px-4  hover:bg-orange-200 hover:text-black transition duration-300 w-fit"
                >
                  Send Message
                </button>
              </Form>
            )}
          </Formik>
        
        </div>
        <div className=" w-1/2 h-full flex flex-col items-center pt-12  justify-start mx-auto">
          <div className="flex flex-col gap-8">
            <h1 className="text-2xl font-serif font-semibold tracking-tighter">
              Contact Details
            </h1>

            {details.map((val, i) => {
              return (
                <div className="  w-72 text-xl flex flex-col gap-8" key={i}>
                  <div className="flex gap-3">
                    <h1 className="text-orange-500 text-3xl">
                      <IoLocation />
                    </h1>{" "}
                    {val.Location}
                  </div>
                  <div className="flex gap-3">
                    <h1 className="text-orange-500 text-3xl">
                      <IoCall />
                    </h1>
                    {val.phone}
                  </div>
                  <div className="flex gap-3">
                    <h1 className="text-orange-500 text-3xl">
                      <MdEmail />
                    </h1>
                    {val.email}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
