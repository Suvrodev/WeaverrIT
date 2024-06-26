import React from "react";

const ReviewBox = ({ c }) => {
  const { Course, name, image, comment } = c;
  return (
    <div className="bg-[#FFFFFF] text-black p-5 rounded-md h-[300px] md:h-[280px] relative m-5 md:m-0">
      <p>{comment}</p>
      <div className="flex flex-col flex-grow-0  absolute bottom-[15px] w-full  ">
        <p className="h-[1px] w-full bg-black my-5"></p>
        <div className="flex gap-5 ">
          <div className="w-[15%] h-[50px] flex items-center justify-center">
            <div className="w-[45px] h-[45px] bg-slate-500 flex justify-center items-center rounded-full">
              <p className="font-bold text-white">{image}</p>
            </div>
          </div>
          <div className="w-[85%]">
            <h1 className="text-xl font-bold">{name}</h1>
            <p>{Course}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewBox;
