import React from 'react';
import CEO from '../CEO/CEO';
import Supporter from '../Supporters/Supporter';
import Marketers from '../Marketers/Marketers';
import MateBanner from '../../../assets/Banner/MateBanner.avif'
import Logo from '../../../assets/Logo/Site_Logo.png'
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <div className=''>
             <Helmet>
                <title>About | WeaverrIT</title>
            </Helmet>

            <div className='relative'>
                <img className='w-[100%] rounded-xl opacity-40' src={MateBanner} alt="" />
                <img className='absolute top-[20%] right-10 w-[250px]' src={Logo} alt="" />
                <h1 className=' absolute top-[40%] md:top-[30%] right-10 text-xl md:text-4xl font-bold text-center my-4  mx-auto rounded-tr-lg rounded-bl-lg p-2'>Meet with Our Teammate</h1>
            </div>
            <div className='my-10'>
                <CEO></CEO>
                <Supporter></Supporter>
                <Marketers></Marketers>
            </div>
        </div>
    );
};

export default About;