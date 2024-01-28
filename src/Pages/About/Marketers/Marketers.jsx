import React, { useEffect, useState } from 'react';
import Box from '../Box/Box';

const Marketers = () => {
    const [mate,setMate]=useState([])

    useEffect(()=>{
        fetch('TeamMate.json')
        .then(res=>res.json())
        .then(data=>{
            const newData=data.filter(d=>d.found==1103)
            setMate(newData)
        })
    },[])

    return (
        <div className=''>
            <h1 className='bg-[#4CBD90] w-10/12 md:w-2/12 text-center rounded-tr-lg rounded-bl-lg p-2 font-bold text-2xl my-5 mx-auto'>Marketers</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-10'> 
                {
                    mate.map((m,idx)=><Box key={idx} m={m}></Box>)
                }
            </div>
           
        </div>
    );
};

export default Marketers;