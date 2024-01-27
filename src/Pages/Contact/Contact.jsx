import React, { useEffect, useState } from 'react';
import './Contact.css'
import logo1 from '../../assets/Logo/Site_Logo.png'

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

    return (
        <div className='bg-white overflow-auto'>
            {batteryLevel !== null ? (
                <p>Battery Level: {batteryLevel.toFixed(2)}%</p>
            ) : (
                <p>Checking battery level...</p>
            )}


            <div className='text-[#4CBD90] text-center font-bold'>
              <img className='w-4/12 mx-auto my-10' src={logo1} alt="" />
              <h1 className=''>Email: <span>weaverrit@gmail.com</span> </h1>
              <h1>Phone: <span>01911-473105</span> </h1>
            </div>

        



            <div className="max-w-md mx-auto bg-[#4CBD90] p-6 rounded-md shadow-md my-10 overflow-auto">
              <h2 className="text-lg mb-4 text-black text-center font-bold">Email US</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-input mt-1 block w-full p-2 rounded-md"
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
                    className="form-input mt-1 block w-full p-2 rounded-md"
                    placeholder="Subject"
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-bold">Message</label>
                  <textarea
                    id="message"
                    className="form-textarea mt-1 block w-full p-2 rounded-md resize-none"
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
    );
};

export default Contact;