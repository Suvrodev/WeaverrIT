import React from 'react';
import developerImage from '../../../assets/DEV/Suvrodev.jpg'


const DeveloperModal = () => {


    const handlePhoneCall = () => {
        window.location.href = 'tel:+8801951912997'; // Replace +1234567890 with the phone number you want to call
        // console.log("Ok");
      }
      const handleEmail=()=>{
        // window.location.href = 'mailto:weaverrit@gmail.com';
        const mailtoLink = document.createElement('a');
        mailtoLink.href = 'mailto:weaverrit@gmail.com'; // Replace weaverrit@gmail.com with the email address you want to send to
        mailtoLink.click();
  
      }
    return (
        <div className='text-center'>
            <img className='w-[150px] h-[150px] mx-auto rounded-full' src={developerImage} alt="" />
            <h1 className='text-2xl font-bold'>Suvrodeb Howlader</h1>
            <p className='italic mb-2'>Computer Science Engineering </p> <p>at</p> <p> North Western University</p>
            <h1 className='cursor-pointer text-white hover:text-[#4CBD90]  duration-500' onClick={()=> window.location = 'mailto:suvrodev.cse@yahoo.com'}>Email: <span>suvrodev.cse@gmail.com</span> </h1>
            <h1 className='cursor-pointer text-white hover:text-[#4CBD90] duration-500' onClick={()=>handlePhoneCall()}>Phone: <span>01951912997</span> </h1>
        </div>
    );
};

export default DeveloperModal;