import React from 'react';

const LiveCourseCard = ({liveCourse}) => {
    // console.log(liveCourse);
    const {title,desc,image}=liveCourse
    return (
        <div className='border rounded-lg p-5'>
           <img className='w-[105px] h-[105px] rounded-full mx-auto my-6' src={image} alt="" />
           <h1 className='text-2xl my-4'>{title}</h1>
           <p className='text-sm'>{desc}</p>
        </div>
    );
};

export default LiveCourseCard;