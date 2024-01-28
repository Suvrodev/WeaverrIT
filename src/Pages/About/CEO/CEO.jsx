import React, { useEffect, useState } from 'react';
import Box from '../Box/Box';

const CEO = () => {

    const [mate,setMate]=useState([])

    useEffect(()=>{
        fetch('TeamMate.json')
        .then(res=>res.json())
        .then(data=>{
            const newData=data.filter(d=>d.found==1101)
            setMate(newData)
        })
    },[])

    // console.log(mate);

    return (
        <div className='my-10'>
            <h1 className='bg-[#4CBD90] w-10/12 md:w-2/12 text-center rounded-tr-lg rounded-bl-lg p-2 font-bold text-2xl my-4 mx-auto'>CEO</h1>
            {
                mate.map((m,idx)=><Box key={idx} m={m}></Box>)
            }
        </div>
    );
};

export default CEO;