import React from 'react';

const SubCategoryCard = ({subCategory}) => {
    // console.log("Box:");
    // console.log(subCategory);

    const {id,categoryid,subcategory,image}=subCategory
    return (
        <div className='border p-2 rounded-md relative'>
           <img className='w-full h-[150px] md:h-[250px] rounded-md' src={image} alt="" />
           <h1 className='my-2 md:text-2xl font-bold mb-20'>{subcategory}</h1>
           <button className='btn w-full md:w-1/4 btn-warning md:absolute  md:bottom-5 right-0 md:right-5 font-bold'>Detail</button>
        </div>
    );
};

export default SubCategoryCard;