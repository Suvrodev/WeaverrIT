import React, { useEffect, useState } from 'react';
import CareerGoal from '../Home/CareerGoal/CareerGoal';
import { Helmet } from 'react-helmet-async';
import ServiceBox from './ServiceBox';
import SubCategoryCard from '../Home/Category/SubCategory/SubCategoryCard';

const Service = () => {

    const [all,setAll]=useState([])
    // const [graphicsCategory,setGraphicsCategory]=useState([])
    // const [webCategory,setWebCategoryCategory]=useState([])
    // const [marketingCategory,setMArketingCategory]=useState([])
    // const [programmingCategory,setpPogrammingCategory]=useState([])
    // const [basicComputerCategory,setBasicComputerCategory]=useState([])


    useEffect(()=>{
        fetch('subCategory.json')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setAll(data)
        })
    },[])

    // console.log("All: ",all);
    const graphicsCategory=all.filter(a=>a.categoryName=="Graphics & MultipleMedia")
    const webCategiries=all.filter(a=>a.categoryName=="Web & App Development")
    const marketingCategory=all.filter(a=>a.categoryName=="Marketing & Business")
    const programmingCategory=all.filter(a=>a.categoryName=="Computer Programming")
    const basicComputerCategory=all.filter(a=>a.categoryName=="Basic Computer")

    // console.log(basicComputerCategory);
   

  
    

    return (
        <div className='mb-10'>
            <Helmet>
                <title>Service | WeaverrIT</title>
            </Helmet>
            <CareerGoal></CareerGoal>

            <div>
                <h1 className='text-2xl font-bold my-4'>Graphics & Multimedia</h1>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                    {
                       graphicsCategory.map((g,idx)=><SubCategoryCard subCategory={g} key={idx} ></SubCategoryCard>) 
                    }
                </div>
            </div>
            <div>
                <h1 className='text-2xl font-bold mt-10 mb-4'>Web & App Development</h1>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                    {
                       webCategiries.map((g,idx)=><SubCategoryCard subCategory={g} key={idx} ></SubCategoryCard>) 
                    }
                </div>
            </div>
            <div>
                <h1 className='text-2xl font-bold mt-10 mb-4'>Marketing & Business</h1>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                    {
                       marketingCategory.map((g,idx)=><SubCategoryCard subCategory={g} key={idx} ></SubCategoryCard>) 
                    }
                </div>
            </div>
            <div>
                <h1 className='text-2xl font-bold mt-10 mb-4'>Computer Programming</h1>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                    {
                       programmingCategory.map((g,idx)=><SubCategoryCard subCategory={g} key={idx} ></SubCategoryCard>) 
                    }
                </div>
            </div>
            <div>
                <h1 className='text-2xl font-bold mt-10 mb-4'>Basic Computer</h1>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                    {
                       basicComputerCategory.map((g,idx)=><SubCategoryCard subCategory={g} key={idx} ></SubCategoryCard>) 
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;