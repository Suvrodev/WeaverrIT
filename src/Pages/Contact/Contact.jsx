import React, { useEffect, useState } from "react";
import "./Contact.css";
import logo1 from "../../assets/Logo/Site_Logo.png";
import mapImage from "../../assets/Contact Image/Map.jpg";
import {
  FaArrowRight,
  FaCheck,
  FaClock,
  FaFacebook,
  FaHeadset,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaMap,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import OnMount from "../../Layout/Refer/OnMount/OnMount";
import BatteryLevel from "../../Layout/Refer/BatteryLevel/BatteryLevel";

import contactImage from "../../assets/Contact Image/contactImage.png";

const Contact = () => {
  const handleSubmit = () => {};

  const handlePhoneCall = () => {
    window.location.href = "tel:+8801911473105"; // Replace +1234567890 with the phone number you want to call
    // console.log("Ok");
  };
  const handleEmail = () => {
    // window.location.href = 'mailto:weaverrit@gmail.com';
    const mailtoLink = document.createElement("a");
    mailtoLink.href = "mailto:weaverrit@gmail.com"; // Replace weaverrit@gmail.com with the email address you want to send to
    mailtoLink.click();
  };

  const handleWhatsapp = () => {
    const whatsappUrl = `https://wa.me/8801911473105`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className=" overflow-auto p-5">
      <Helmet>
        <title>Contact | WeaverrIT</title>
      </Helmet>
      <OnMount></OnMount>

      {/* <BatteryLevel></BatteryLevel> */}

      {/* <div>
             <img className='w-4/12 mx-auto my-10' src={logo1} alt="" />
            </div> */}

      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center gap-4 bg-white text-black p-3 rounded-xl font-bold shadow-sm my-4">
          <p className="w-[15px] h-[15px] rounded-full bg-[#4CBD90]"></p>
          <p className="uppercase">Contact Info</p>
          <p className="w-[15px] h-[15px] rounded-full bg-[#4CBD90]"></p>
        </div>
        <h1 className="text-4xl text-white font-bold">
          {" "}
          <span className="text-[#4CBD90]">Contact</span> & Join Together
        </h1>
        <p className="my-4">
          Sint nascetur facere, delectus conubia consequuntur, nonummy
          distinctio! Non officiis, id natus non nisl provident justo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10 ">
        <div className="bg-white rounded-md text-black flex flex-col p-5">
          <div className=" flex gap-5 items-center">
            <div>
              <FaMapMarkerAlt className="text-4xl" />
            </div>
            <div>
              <h1 className="font-bold">Location</h1>
              <p className="text-xl font-bold text-[#4CBD90]">Visit US AT</p>
            </div>
          </div>

          <div>
            <p> Jessore Road,Khulna</p>
            <p>Bangladesh</p>
          </div>
        </div>

        <div className="bg-white rounded-md text-black flex flex-col p-5">
          <div className=" flex gap-5 items-center">
            <div>
              <FaPhoneAlt className="text-4xl" />
            </div>
            <div>
              <h1 className="font-bold">Service</h1>
              <p className="text-xl font-bold text-[#4CBD90]">Call Us On</p>
            </div>
          </div>

          <div>
            <p>Office: 01911473105</p>
            <p>Support: 01951912997</p>
          </div>
        </div>

        <div className="bg-white rounded-md text-black flex flex-col p-5">
          <div className=" flex gap-5 items-center">
            <div>
              <FaMailBulk className="text-4xl" />
            </div>
            <div>
              <h1 className="font-bold">Drop a Line</h1>
              <p className="text-xl font-bold text-[#4CBD90]">Mail Address</p>
            </div>
          </div>

          <div>
            <p>Mail: weaverrit@gmail.com</p>
          </div>
        </div>

        <div className="bg-white rounded-md text-black flex flex-col p-5">
          <div className=" flex gap-5 items-center">
            <div>
              <FaClock className="text-4xl" />
            </div>
            <div>
              <h1 className="font-bold">OFFICE HOURS..</h1>
              <p className="text-xl font-bold text-[#4CBD90]">Opening Time</p>
            </div>
          </div>

          <div>
            <p>Saturday – Thrusday : 9am – 6pm</p>
            <p>Friday (Closed)</p>
          </div>
        </div>
      </div>

      {/* <div className=' text-center font-bold'>
              <img className='w-4/12 mx-auto my-10' src={logo1} alt="" />
              <h1 className='cursor-pointer text-black hover:text-[#4CBD90]  duration-500' onClick={()=> window.location = 'mailto:weaverrit@gmail.com'}>Email: <span>weaverrit@gmail.com</span> </h1>
              <h1 className='cursor-pointer text-black hover:text-[#4CBD90] duration-500' onClick={()=>handlePhoneCall()}>Phone: <span>01911-473105</span> </h1>
            </div> */}

      {/* 
           <div className='flex gap-10 my-20'>

            <div className='w-[60%] flex items-start'>
              <div className='bg-[#449977] p-5 w-[250px] rounded-md'>
                  <div className='w-[50px] h-[50px] bg-white flex items-center justify-center rounded-full mx-auto'>
                    <FaHeadset className='text-2xl text-[#449977]' />
                  </div>
                  <h1 className='text-2xl font-bold text-center my-6'>Chat With Live</h1>
                  <p className='text-[18px] text-center'>Porro. Erat gravida adipisci quibusdam faucibus diam molestias? Ante, arcu commo do, non! Phasellus risus.</p>
                 <div className='flex justify-center'>
                   <button className='btn btn-warning my-4'>Live Chat</button>
                 </div>
              </div>
              <img className='h-[490px]' src={contactImage} alt="" />
            </div>

          <div className='w-[40%]'>
              <div className="max-w-md mx-auto bg-[#4CBD90] p-6 rounded-md shadow-md  overflow-auto ">
                <h2 className="text-lg mb-4 text-black text-center font-bold">Email US</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      className="form-input mt-1 block w-full p-2 rounded-md outline-none"
                      placeholder="Your email address"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 font-bold">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="form-input mt-1 block w-full p-2 rounded-md outline-none"
                      placeholder="Subject"
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-bold">Message</label>
                    <textarea
                      id="message"
                      className="form-textarea mt-1 block w-full p-2 rounded-md resize-none outline-none"
                      rows="4"
                      placeholder="Your message here"
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
          </div>



           </div> */}

      <div className="w-full my-20">
        <div className="bg-purple-400 w-full flex flex-col md:flex-row mx-auto">
          <div className="bg-[#4CBD90] w-full md:w-[50%] p-5">
            <h1 className="font-bold text-3xl text-center">
              Perfect Solutions For Your Business
            </h1>
            <p className=" my-4">
              Perfect Solutions For Your Business Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            </p>

            <div className="my-6 flex flex-col gap-2">
              <p className="flex gap-4 items-center">
                {" "}
                <FaCheck /> We are committed to providing quality IT Services{" "}
              </p>
              <p className="flex gap-4 items-center">
                {" "}
                <FaCheck /> We are committed to providing quality IT Services{" "}
              </p>
              <p className="flex gap-4 items-center">
                {" "}
                <FaCheck /> We are committed to providing quality IT Services{" "}
              </p>
              <p className="flex gap-4 items-center">
                {" "}
                <FaCheck /> We are committed to providing quality IT Services{" "}
              </p>
            </div>

            <div className="flex items-center justify-start">
              <div className="w-[50%]">
                <button className="btn bg-white  border-0 text-[#4CBD90]">
                  GET A QUOTE
                </button>
              </div>
              <h1 className="flex items-center gap-4">
                Get Started <FaArrowRight />{" "}
              </h1>
            </div>
          </div>
          <div className="w-full md:w-[50%] bg-white">
            <div className="max-w-md mx-auto  p-6 rounded-md shadow-md  overflow-auto ">
              <h2 className="text-lg mb-4 text-black text-center font-bold">
                Email US
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-input mt-1 block w-full p-2 rounded-md outline-none"
                    placeholder="Your email address"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 font-bold"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="form-input mt-1 block w-full p-2 rounded-md outline-none"
                    placeholder="Subject"
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-bold"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="form-textarea mt-1 block w-full p-2 rounded-md resize-none outline-none"
                    rows="4"
                    placeholder="Your message here"
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-[#4CBD90]">
        <h1 className="text-2xl font-bold">Our Location</h1>
        <img className="w-full mx-auto my-4" src={mapImage} alt="" />
      </div>

      <div className="text-[#4CBD90] flex gap-10 justify-center  md:w-2/12 mx-auto text-2xl text-center ">
        <Link to={"https://www.facebook.com/weaverrit"} target="_blank">
          <FaFacebook />
        </Link>
        <Link
          to={
            "https://twitter.com/weaverrits?fbclid=IwAR37BnxVEH2K1qSEbaYRAZW3Cl459us7YM7WyzYH4tVXySL6Vn-rKoIqq28"
          }
          target="_blank"
        >
          <FaTwitter />
        </Link>
        <Link
          to={
            "https://www.instagram.com/weaverrits/?fbclid=IwAR37BnxVEH2K1qSEbaYRAZW3Cl459us7YM7WyzYH4tVXySL6Vn-rKoIqq28"
          }
          target="_blank"
        >
          <FaInstagram />
        </Link>
        <Link
          to={"https://www.linkedin.com/company/weaverrit/"}
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link to="" onClick={handleWhatsapp} target="_blank">
          <FaWhatsapp />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
