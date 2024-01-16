import React from 'react';
import { Link } from 'react-router-dom';
import imageOfBanner from '../../../assets/Banner/weaverrit_banner.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='w-full md:w-[95%] bg-[#51B8E5] flex flex-col md:flex-row rounded-lg'>
            <div className='w-full md:w-[50%] h-[350px] flex items-center justify-center flex-col gap-5'>
                {/* <h1>Online Based IT Firm</h1> */}
                <h1 className='text-3xl font-bold'>ক্যারিয়ার শুরু হোক <br />দক্ষতার <span className='text-yellow-300'> আত্মবিশ্বাসে</span> </h1>
                <Link to={'/contact'}><button className='btn btn-warning text-white text-2xl'>Contact</button></Link>
                <p className='star'></p>
            </div>
            <div className='w-full md:w-[50%] flex items-center justify-center '>
                <img src={imageOfBanner} alt="" />
            </div>
        </div>
    );
};

export default Banner;