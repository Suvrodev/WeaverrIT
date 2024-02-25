import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const TeamMate = () => {

    const [mate,setMate]=useState([])
    const [ceo,setCEO]=useState([])

    useEffect(()=>{
        fetch('TeamMate.json')
        .then(res=>res.json())
        .then(data=>{
            // const newData=data.filter(d=>d.found==1101)
            setMate(data)
            // setCeo(data)
        })
    },[])


    useEffect(()=>{
        fetch('CEO.json')
        .then(res=>res.json())
        .then(data=>{
            setCEO(data)
        })
    },[])


   
  
    console.log("Mate: ",mate);
    console.log("CEO: ",ceo);




    return (
        <div>
           <h1 className='text-[#4CBD90] text-center my-4 text-2xl font-bold'>Leadership</h1>

            <div className='grid grid-col-1 md:grid-cols-4 gap-4 items-center place-items-center '>
            {
                ceo.map((m,idx)=> <div key={idx}>
                    <div className='w-[290px] bg-white text-black rounded-2xl relative'>
                        <img className='w-full h-[300px] rounded-2xl' src={m?.image} alt="" />
                        <div className='w-11/12 flex flex-col items-center justify-center mx-auto rounded-md text-black  p-3'>
                            <h1 className='text-xl font-bold'>{m?.Name}</h1>
                            <p className=' font-bold'>{m?.position}</p>
                        </div>
    
                    </div>
                </div> )
            }
            </div>

            <div className='w-8/12 mx-auto h-[1px] bg-white my-10'></div>

            <h1 className='text-[#4CBD90] text-center my-4 text-2xl font-bold'>Our Team Member</h1>

            <div className='grid grid-col-1 md:grid-cols-4 gap-4 items-center place-items-center '>
            {
                mate.map((m,idx)=> <div key={idx}>
                    <div className='w-[290px] bg-white text-black rounded-2xl relative'>
                        <img className='w-full h-[300px] rounded-2xl' src={m?.image} alt="" />
                        <div className='w-11/12 flex flex-col items-center justify-center mx-auto rounded-md text-black  p-3'>
                            <h1 className='text-xl font-bold'>{m?.Name}</h1>
                            <p className=' font-bold'>{m?.position}</p>
                        </div>
    
                    </div>
                </div> )
            }
            </div>
        </div>
    );
};

export default TeamMate;