import React from "react";
import LaptopImage from "../../../assets/Image/Laptop-1.avif";
import { Link } from "react-router-dom";

const FreeTeShikhun = () => {
  return (
    <div className="bg-[#4a5466] flex flex-col md:flex-row md:gap-10 my-10 rounded-md shadow-md text-white">
      <div className="w-full md:w-[40%] p-10">
        <img className="rounded-md" src={LaptopImage} alt="" />
      </div>
      <div className="w-full md:w-[60%] p-10 flex flex-col justify-center items-center gap-5 text-center">
        <h1 className="text-4xl font-bold">ফ্রী তে শিখুন</h1>
        <p>
          স্কিল ডেভেলপমেন্ট এখন অনেক সহজ, একদম ফ্রি। জয়েন করুন ৮ টি ভিন্ন
          ক্যাটাগরিতে ৪০ টি স্কিলের ওপর অসংখ্য লাইভ ওয়েবিনার, লাইভ কোর্স এবং
          রেকর্ডেড কোর্সসমুহতে।
        </p>
        {/* <Link to={'/freeclassdb'}> <button className='btn btn-warning'>ফ্রী তে শিখুন</button></Link> */}
        <Link to={"/"}>
          {" "}
          <button className="btn btn-warning">ফ্রী তে শিখুন</button>
        </Link>
      </div>
    </div>
  );
};

export default FreeTeShikhun;
