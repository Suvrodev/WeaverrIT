import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SoftWareYouWillLearn = ({id}) => {
    

    const [softwares,setSoftwares]=useState([])


    useEffect(()=>{
        axios.get('/Software.json')
        .then(res=>{
            let data=res.data
            let softs=data.filter(d=>d.subcategoryid==id)
            setSoftwares(softs)
        })
    },[])

    // console.log("Softwares: ",softwares);

    return (
        <div className='my-4 p-5'>
            <h1 className=' font-bold text-2xl'>Software You will Learn</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    softwares.map((sft,idx)=> <div
                    sft={sft}
                    key={idx}
                    className='flex gap-5 items-center'
                    >
                       <img className='w-[50px] h-[50px] rounded-full' src={sft?.image} alt="" />
                       <h1 className='text-xl'>{sft?.name}</h1>
                    </div> )
                }
            </div>
        </div>
    );
};

export default SoftWareYouWillLearn;