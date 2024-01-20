import React from 'react';

const SubCategoryCard = ({subCategory}) => {
    // console.log("Box:");
    // console.log(subCategory);

    const {id,categoryid,subcategory,image}=subCategory
    return (
        <div className='border p-2 rounded-md relative'>
           <img className='w-full h-[250px] rounded-md' src={image} alt="" />
           <h1 className='text-2xl font-bold mb-20'>{subcategory}</h1>
           <button className='btn btn-warning absolute bottom-5 right-5 font-bold'>Detail</button>
        </div>
    );
};

export default SubCategoryCard;