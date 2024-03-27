import React from "react";
import corporateImage from "../../../assets/BusineesImage/Corporate-1.jpg";
import { useNavigate } from "react-router-dom";

const WeaverrBusiness = () => {
  const navigate = useNavigate();

  const handleGoAbout = () => {
    navigate("/about");
  };
  return (
    <div className="flex flex-col md:flex-row gap-5 md:gap-10 m-5 md:m-0 bg-[#4a5466] p-5 rounded-xl my-0 md:my-16 text-white">
      <div className="flex flex-col items-center justify-center w-full md:w-[70%] text-center md:text-left">
        <h1 className="text-3xl font-bold ">Weaverr for About</h1>
        {/* <p className='my-4'>জয়েন করুন আমাদের কর্পোরেট স্কিলস ট্রেইনিং প্রোগ্রামে, ট্রেইনিং নিন দেশ সেরা ইন্ডাস্ট্রি এক্সপার্ট দের থেকে আর সাজিয়ে নিন আপনার টিমকে নতুন ভাবে</p> */}
        <p className="my-4">
          At Weaverr IT, our primary aim is to empower the community through
          exceptional learning standards. We are{" "}
          <span className="cursor-pointer" onClick={handleGoAbout}>
            .....
          </span>
        </p>
        <button className="btn btn-warning" onClick={handleGoAbout}>
          বিস্তারিত দেখি
        </button>
      </div>

      <div className="w-full md:w[30%] p-5 flex items-center justify-center">
        <img className="rounded-md" src={corporateImage} alt="" />
      </div>
    </div>
  );
};

export default WeaverrBusiness;
