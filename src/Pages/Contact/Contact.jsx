import React, { useEffect, useState } from 'react';
import './Contact.css'
import logo1 from '../../assets/Logo/Site_Logo.png'
import mapImage from '../../assets/Contact Image/Map.jpg'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Contact = () => {


 


    const [batteryLevel, setBatteryLevel] = useState(null);

    useEffect(() => {
      // Check if the Battery Status API is supported
      if ('getBattery' in navigator) {
        navigator.getBattery().then((battery) => {
          // Update the battery level in the state
          setBatteryLevel(battery.level * 100);

          // Add an event listener to update the battery level when it changes
          battery.addEventListener('levelchange', () => {
            setBatteryLevel(battery.level * 100);
          });
        });
      } else {
        // The Battery Status API is not supported
        console.error('Battery Status API is not supported in this browser');
      }
    }, []);



  const handleSubmit=()=>{
  }

  
    const handlePhoneCall = () => {
      window.location.href = 'tel:+8801911473105'; // Replace +1234567890 with the phone number you want to call
      // console.log("Ok");
    }
    const handleEmail=()=>{
      // window.location.href = 'mailto:weaverrit@gmail.com';
      const mailtoLink = document.createElement('a');
      mailtoLink.href = 'mailto:weaverrit@gmail.com'; // Replace weaverrit@gmail.com with the email address you want to send to
      mailtoLink.click();

    }

   
  


    return (
        <div className='bg-white overflow-auto p-5'>
           <Helmet>
                <title>Contact | WeaverrIT</title>
            </Helmet>

            {/* {batteryLevel !== null ? (
                <p>Battery Level: {batteryLevel.toFixed(2)}%</p>
            ) : (
                <p>Checking battery level...</p>
            )} */}


            <div className=' text-center font-bold'>
              <img className='w-4/12 mx-auto my-10' src={logo1} alt="" />
              <h1 className='cursor-pointer text-black hover:text-[#4CBD90]  duration-500' onClick={()=> window.location = 'mailto:weaverrit@gmail.com'}>Email: <span>weaverrit@gmail.com</span> </h1>
              <h1 className='cursor-pointer text-black hover:text-[#4CBD90] duration-500' onClick={()=>handlePhoneCall()}>Phone: <span>01911-473105</span> </h1>
            </div>

        



            <div className="max-w-md mx-auto bg-[#4CBD90] p-6 rounded-md shadow-md my-10 overflow-auto">
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


            <div className='text-center text-[#4CBD90]'>
              <h1 className='text-2xl font-bold'>Our Location</h1>
              <img className='w-10/12 mx-auto my-4' src={mapImage} alt="" />
            </div>

            <div className='text-[#4CBD90] flex gap-10 justify-center  md:w-2/12 mx-auto text-2xl text-center '>
              <Link to={'https://www.facebook.com/weaverrit'} target='_blank'><FaFacebook/></Link>
              <Link to={'https://twitter.com/weaverrits?fbclid=IwAR37BnxVEH2K1qSEbaYRAZW3Cl459us7YM7WyzYH4tVXySL6Vn-rKoIqq28'} target='_blank'><FaTwitter/></Link>
              <Link to={'https://www.instagram.com/weaverrits/?fbclid=IwAR37BnxVEH2K1qSEbaYRAZW3Cl459us7YM7WyzYH4tVXySL6Vn-rKoIqq28'} target='_blank'><FaInstagram/></Link>
              <Link to={'https://www.linkedin.com/company/weaverrit/'} target='_blank'><FaLinkedin/></Link>
            </div>
        </div>
    );
};

export default Contact;