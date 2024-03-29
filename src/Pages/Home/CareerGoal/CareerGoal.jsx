import React, { useEffect, useState } from 'react';
import CareerGoalBox from './CareerGoalBox';

const CareerGoal = () => {


    const [categories,setCategories]=useState([])
    useEffect(()=>{
        fetch('category.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])

    // console.log(categories);

    return (
        <div className='text-center my-10 overflow-auto text-white'>
            <h1 className='text-4xl font-bold text-white'>ক্যারিয়ার গোল সেট করুন</h1>
            <p className='font-bold'>নিচের অপশন গুলো থেকে আপনার গোল সিলেক্ট করে শেখা শুরু করুন</p>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-5 items-center justify-center my-5 '>
                {
                    categories.map((c,idx)=><CareerGoalBox key={idx} c={c}></CareerGoalBox>)
                }
            </div>
        </div>
    );
};

export default CareerGoal;