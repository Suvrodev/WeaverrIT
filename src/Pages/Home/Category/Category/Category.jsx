import React, { useEffect, useState } from 'react';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import SubCategory from '../SubCategory/SubCategory';
import { Helmet } from 'react-helmet-async';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

import 'swiper/css/navigation';



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


    const settings = {
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
            initialSlide: 0 // Set initial slide to 0 for desktop view
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0 // Set initial slide to 0 for medium-sized devices
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0, // Set initial slide to 0 for mobile devices
            infinite: true,
          }
        }
      ]
    };
    

    return (
       <div className='p-5'>
            

            <div className='text-center'>
                <h1 className='text-4xl font-extrabold my-5'>আমাদের কোর্সসমুহ  </h1>

              {/* Computer View Start */}
               <div className='my-4 bg-green-600 rounded-md mx-10 md:mx-0 hidden md:block'>
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
                {/* Computer View End */}


                {/* Mobile View Start */}
                <div className='md:hidden my-5'>
                <Swiper
                  rewind={true}
                  navigation={true}
                  breakpoints={{
                      480: {
                        slidesPerView: 1,
                        spaceBetween: 50,
                      },
                      768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                      },
                      1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                      },
                    }}
                  modules={[Navigation]}
                  className="mySwiper  w-10/12 mx-20"
                >
                  {
                              categories.map((category,idx)=><div
                              key={idx}
                              onClick={()=>handleCategory(category.id)}
                              className='m-10 pd'
                              >
                                <SwiperSlide className='w-6/12 mx-auto my-2 rounded-md text-white font-bold text-center '
                                 onClick={()=>handleCategory(category.id)}
                                >  {category.category} </SwiperSlide>
                              </div>)
                          }    
              </Swiper>
                  </div>
                {/* Mobile View end */}

               <SubCategory id={id}></SubCategory>
            </div>
       </div>
    );
};

export default Category;