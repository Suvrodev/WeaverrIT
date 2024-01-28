import React from 'react';

const Box = ({m}) => {
   
    
    const {image,position,Name}=m;
    return ( 
        <div className='border h-[280px] w-[250px] flex flex-col items-center  gap-2 p-4 mx-auto md:mx-0 '>
            <div className=''><img className='w-[150px] h-[150px] rounded-3xl hover:w-[180px] hover:h-[180px] duration-300 ' src={image} alt="" /></div>
            <h1 className='text-xl font-bold text-center'>{Name}</h1>
            <p className='font-bold text-[#4CBD90]'>{position}</p>
        </div>
    );
};

export default Box;