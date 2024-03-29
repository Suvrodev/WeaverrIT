import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';


const CareerGoalBox = ({c}) => {
    // console.log("Check:",c);
    const {id,category,image,courseno}=c

    useEffect(()=>{
        AOS.init({
            duration: 2000
        });
    },[])



    const [courses,setCourses]=useState([])
    useEffect(()=>{
        fetch('subCategory.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    
    return (
        <div data-aos="flip-left"  data-aos-anchor-placement="top-bottom" className='bg-[#FFF1E9] flex flex-col items-center justify-center gap-5 p-5 rounded-md m-5 md:m-0 ' >
             <div className='w-[75px] h-[75px] rounded-full bg-white flex items-center justify-center'>
                <img className='w-[50px] h-[50px]' src={image} alt="" />
             </div>
             <div>
                <p className='text-black font-bold'>{category}</p>
                <p className='text-black font-bold'>Course: {courseno} </p>
             </div>
             <Link to={`/category/${id}`} state={{ data: courses }} className='w-10/12'> <button  className='btn bg-[#1D2939] w-full text-white'>VIEW COURSES</button></Link>
        </div>
    );
};

export default CareerGoalBox;