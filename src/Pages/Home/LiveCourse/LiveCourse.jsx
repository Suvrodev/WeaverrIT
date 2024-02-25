import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LiveCourseCard from './LiveCourseCard';

const LiveCourse = () => {

    const [liveCourses,setLiveCourses]=useState([])
    
    useEffect(()=>{
        fetch('LiveCourse.json')
        .then(res=>res.json())
        .then(data=>setLiveCourses(data))
    },[])
    
    
    return (
        <div className='text-center my-4 text-white'>
            <h1 className='text-4xl font-bold'>কি কি পাচ্ছেন লাইভ কোর্সে</h1>
            <p className='my-2'>দেখে নিন কি কি পাচ্ছেন ওয়েভার আইটির লাইভ কোর্সে জয়েন করলে</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 my-4'>
                {
                    liveCourses.map((liveCourse,idx)=><LiveCourseCard key={idx} liveCourse={liveCourse} ></LiveCourseCard>)
                }
            </div>
        </div>
    );
};

export default LiveCourse;