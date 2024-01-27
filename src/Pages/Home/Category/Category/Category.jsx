import React, { useEffect, useState } from 'react';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import SubCategory from '../SubCategory/SubCategory';



const Category = () => {


    const [id,setId]=useState(1)
    const [categories,setCategories]=useState([])
   
    useEffect(()=>{
        fetch('category.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])

    


    const handleCategory=(id)=>{
        console.log(id);
        setId(id)
    }


    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 3
    //   };


    //url https://react-slick.neostack.com/docs/example/responsive

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 0
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 0
            }
          }
        ]
      };

    return (
       <div className='p-5'>
            <div className='text-center'>
                <h1 className='text-4xl font-extrabold'>আমাদের কোর্সসমুহ: {categories.length}  </h1>

               <div className='my-4 bg-green-600 rounded-md mx-10 md:mx-0 '>
                <Slider {...settings}>
                        {
                            categories.map((category,idx)=><div
                            className=' rounded-md w-[450px] p-2 md:p-5 '
                            key={idx}
                            onClick={()=>handleCategory(category.id)}
                            >
                                {category.category}
                            </div>)
                        }    
                    </Slider>
               </div>

               <SubCategory id={id}></SubCategory>
            </div>
       </div>
    );
};

export default Category;