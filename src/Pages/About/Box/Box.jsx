import React from 'react';

const Box = ({m}) => {
   
    
    const {image,position,Name}=m;
    return ( 
        <div className=' h-[350px] w-[220px] flex flex-col items-center justify-center mx-auto md:mx-0 '>
            <div className='h-[250px] w-[180px] '>
                <img className='h-[250px]  w-[180px] rounded-3xl mx-auto hover:scale-105 duration-300 ' src={image} alt="" />
            </div>
            <div className='my-2 text-center'>
                <h1 className='text-xl font-bold text-center'>{Name}</h1>
                <p className='font-bold text-[#4CBD90]'>{position}</p>
            </div>
        </div>
    );
};

export default Box;