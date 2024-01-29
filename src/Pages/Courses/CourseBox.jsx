import React from 'react';
import { Link } from 'react-router-dom';

const CourseBox = ({c}) => {
    // console.log(c);
    const {id,image,subcategory}=c
    return (
        <div className='flex flex-col justify-center gap-5 border items-center p-2 rounded-md'>
            <img className='w-[300px] h-[250px] rounded-md' src={image} alt="" />
            <h1 className='text-2xl font-bold'>{subcategory}</h1>
            <Link to={`/coursedetails/${id}`}><button className='btn btn-warning'>বিস্তারিত দেখি</button></Link>
        </div>
    );
};

export default CourseBox;