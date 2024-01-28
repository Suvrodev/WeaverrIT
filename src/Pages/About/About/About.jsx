import React from 'react';
import CEO from '../CEO/CEO';
import Supporter from '../Supporters/Supporter';
import Marketers from '../Marketers/Marketers';
import MateBanner from '../../../assets/Banner/MateBanner.avif'
import Logo from '../../../assets/Logo/Site_Logo.png'

const About = () => {
    return (
        <div className='my-10'>
            <div className='relative'>
                <img className='w-[100%] rounded-xl opacity-40' src={MateBanner} alt="" />
                <img className='absolute top-[20%] right-10 w-[250px]' src={Logo} alt="" />
                <h1 className=' absolute top-[30%] right-10 text-4xl font-bold text-center my-4  mx-auto rounded-tr-lg rounded-bl-lg p-2'>Meet with Our Teammate</h1>
            </div>
            <CEO></CEO>
            <Supporter></Supporter>
            <Marketers></Marketers>
        </div>
    );
};

export default About;