import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';


const CourseBox = ({c}) => {
    // console.log(c);
    const {id,image,subcategory}=c

    useEffect(()=>{
        AOS.init({
            duration: 1000
        });
    },[])

    return (
        <div data-aos="fade-left"  data-aos-anchor-placement="top-bottom" className='flex flex-col justify-center gap-5 border items-center p-2 rounded-md'>
            <img className='w-[300px] h-[250px] rounded-md' src={image} alt="" />
            <h1 className='text-2xl font-bold'>{subcategory}</h1>
            <Link to={`/coursedetails/${id}`}><button className='btn btn-warning'>বিস্তারিত দেখি</button></Link>
        </div>
    );
};

export default CourseBox;