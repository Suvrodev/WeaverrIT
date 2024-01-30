import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

const SubCategoryCard = ({subCategory}) => {
    // console.log("Box:");
    // console.log(subCategory);
    useEffect(()=>{
        AOS.init({
            duration: 1000
        });
    },[])

    const a=0

    const {id,categoryid,subcategory,image}=subCategory
    return (
        <div  data-aos="fade-up"  data-aos-anchor-placement="top-bottom" className='border p-2 rounded-md relative'>
           <img className='w-full h-[150px] md:h-[180px] rounded-md' src={image} alt="" />
           <h1 className='my-2 md:text-[20px] font-bold md-10 md:mb-20'>{subcategory}</h1>
          <Link to={`/coursedetails/${id}`}> <button className={a==1?'':`btn w-full md:w-1/4 btn-warning md:absolute  md:bottom-5 right-0 md:right-5 font-bold`}>Detail</button></Link>
        </div>
    );
};

export default SubCategoryCard;