import React from "react";
import { IoLocation, IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Forms = () => {
  const forming = [
    {
      name: "Name",
      type: "text",
      placeholder: "Enter your Name",
    },
    {
      name: "Phone",
      type: "number",
      placeholder: "Enter your Number",
    },
    {
      name: "Email",
      type: "email",
      placeholder: "Enter your Email",
    },
    {
      name: "WriteMessage",
      type: "textarea",
      placeholder: "Write a message",
    },
  ];

  const details = [
    {
      Location: "34 Street Name, City Name Here, United States",
      phone: "+1 242 4942 290",
      email: "info@yourdomain.com",
    },
  ];

  // Yup Validation Schema
  const validationSchema = Yup.object({
    Name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    Phone: Yup.string()
      .required("Phone number is required")
      .matches(/^\d+$/, "Phone must be a valid number")
      .min(10, "Phone number must be at least 10 digits"),
    Email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    WriteMessage: Yup.string()
      .required("Message is required")
      .min(30, "Message must be at least 30 characters"),
  });

  return (
    <div className="h-auto py-12 bg-gray-50">
      <div className="flex flex-col md:flex-row justify-center items-start gap-10 md:gap-16 w-11/12 mx-auto">
        {/* Form Section */}
        <div className="md:bg-white md:shadow-md md:p-6 md:rounded-md w-full md:w-1/2">
          <Formik
            initialValues={{
              Name: "",
              Phone: "",
              Email: "",
              WriteMessage: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              console.log("Form Submitted:", values);
              alert("Form submitted successfully!");
              resetForm(); // Reset form after submission
            }}
          >
            {({ errors, touched }) => (
              <Form className="flex flex-col gap-6">
                {forming.map((field, i) => (
                  <div key={i}>
                    <label className="text-gray-600 font-medium">
                      {field.name}
                    </label>
                    <Field
                      as={field.type === "textarea" ? "textarea" : "input"}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      className={`w-full resize-none border px-4 py-2 mt-2 rounded-md focus:outline-none focus:ring-2 ${
                        errors[field.name] && touched[field.name]
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:ring-orange-500"
                      }`}
                    />
                    <ErrorMessage
                      name={field.name}
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                ))}
                <button
                  type="submit"
                  className="bg-orange-500 text-white font-medium py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300 w-fit"
                >
                  Send Message
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Contact Details Section */}
        <div className="flex flex-col items-start justify-start w-full md:w-1/2 gap-8">
          <h1 className="text-2xl md:text-3xl font-serif font-semibold tracking-tighter">
            Contact Details
          </h1>
          {details.map((val, i) => (
            <div className="flex flex-col gap-6" key={i}>
              <div className="flex gap-3 items-center">
                <IoLocation className="text-orange-500 text-3xl" />
                <p className="text-lg md:text-xl">{val.Location}</p>
              </div>
              <div className="flex gap-3 items-center">
                <IoCall className="text-orange-500 text-3xl" />
                <p className="text-lg md:text-xl">{val.phone}</p>
              </div>
              <div className="flex gap-3 items-center">
                <MdEmail className="text-orange-500 text-3xl" />
                <p className="text-lg md:text-xl">{val.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forms;
