import React from 'react';
import LaptopImage from '../../../assets/Image/Laptop-1.avif'

const FreeTeShikhun = () => {
    return (
        <div className='bg-[#101828] flex flex-col md:flex-row md:gap-10 my-10 rounded-md'>
            <div className='w-full md:w-[40%] p-10'>
                <img className='rounded-md' src={LaptopImage} alt="" />
            </div>
            <div className='w-full md:w-[60%] p-10 flex flex-col justify-center items-center gap-5 text-center'>
                 <h1 className='text-4xl font-bold'>ফ্রী তে শিখুন</h1>
                 <p>স্কিল ডেভেলপমেন্ট এখন অনেক সহজ, একদম ফ্রি। জয়েন করুন ৮ টি ভিন্ন ক্যাটাগরিতে ৪০ টি স্কিলের ওপর অসংখ্য লাইভ ওয়েবিনার, লাইভ কোর্স এবং রেকর্ডেড কোর্সসমুহতে।</p>
                 <button className='btn btn-warning'>ফ্রী তে শিখুন</button>
            </div>
        </div>
    );
};

export default FreeTeShikhun;