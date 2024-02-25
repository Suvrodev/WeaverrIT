import React from 'react';
import { Link } from 'react-router-dom';
import imageOfBanner from '../../../assets/Banner/weaverrit_banner.png'
import './Banner.css'
import { Typewriter } from 'react-simple-typewriter';
import { FaWhatsapp } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='w-full md:h-[450px] md:w-[100%] bg-[var(--banner-color)] flex flex-col items-center md:flex-row rounded-lg'>
            <div className='w-full md:w-[50%] h-[450px] flex items-center justify-center flex-col gap-5 p-5'>
                {/* <h1>Online Based IT Firm</h1> */}
                <h1 className='text-3xl font-bold'>ক্যারিয়ার শুরু হোক <br />দক্ষতার <span className='text-yellow-300'> আত্মবিশ্বাসে</span> </h1>
                <p className='text-center'>অভিজ্ঞ মেন্টর আর আপডেটেড কারিকুলাম নিয়ে ক্রিয়েটিভ আইটি ইনস্টিটিউট প্রস্তুত আপনার ক্যারিয়ার গড়ার অগ্রযাত্রায়।</p>
                
                <span style={{ color: 'yellow', fontWeight: 'bold' }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                    words={['প্রস্তুতি নিন', 'দেরী না করে এখনি শুরু করুন', 'সময় অপেক্ষা করবে না']}
                    loop={100}
                    cursor
                    cursorStyle='...'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
                </span>


                <div className='flex flex-col md:flex-row gap-5'>
                  <Link to={'/contact'}><button className='btn btn-warning text-white text-2xl'>Contact</button></Link>
                  {/* <button className='btn btn-warning border-0 text-white text-xl'>Whatsapp </button> */}
                </div>
                <p className='star'></p>
            </div>
            <div className='w-full md:w-[50%] flex items-center justify-center p-5'>
                <img src={imageOfBanner} alt="" />
            </div>


            
        </div>
    );
};

export default Banner;