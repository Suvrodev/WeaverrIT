import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import OnMount from '../../Layout/Refer/OnMount/OnMount';
import { FaCheckCircle } from "react-icons/fa";
import SoftWareYouWillLearn from '../SoftWareYouWillLearn/SoftWareYouWillLearn';
import CourseCuriculam from '../CourseCuriculam/CourseCuriculam';
import CourseDescription from '../CourseDescription/CourseDescription';


const CourseDetails = () => {
    const {id}=useParams()
    // console.log(id);

    const navigate=useNavigate()

    const [course,setCourse]=useState([])
    useEffect(()=>{
        fetch('/subCategory.json')
        .then(res=>res.json())
        .then(data=>{
            const newData=data.find(d=>d.id==id)
            setCourse(newData)
        })
    },[])
    // console.log(course);
    const {desc,image,provide,online,offline,categoryName}=course

    let provides;
    if(provide){
        provides=provide.split(",")
    }
    // console.log(provides);

    const handleEnroll=()=>{
        console.log("Handle Enrol");
        if(id==1){
            navigate('/enroll')
        }
    }



    return (
        <div>
            <Helmet>
                 <title> {categoryName?categoryName:"Details"} | WeaverrIT</title>
            </Helmet>
            <OnMount></OnMount>

          <div className='flex flex-col md:flex-row gap-0 items-center max-w-7xl mx-auto '>
             <div className='w-full md:w-[50%] p-5 flex flex-col justify-center items-center '>
                 <h1 className='my-5 text-2xl font-bold text-yellow-500'>কোর্স সম্পর্কে</h1>
                 <h1 className='p-0 text-white'>{desc?desc:<p className='text-2xl font-bold' key={1122}>UpComming</p>}</h1>
             </div>
             <div className='w-full md:w-[50%] p-5 flex items-center justify-end '>
                  <img className='w-[450px] h-[300px] rounded-xl' src={image} alt="" />
             </div>
          </div>


          <div className='flex flex-col md:flex-row gap-0 mt-10  '>
             <div className='w-full md:w-[50%] flex flex-col  items-center '>
                 <h1 className=' text-2xl font-bold text-yellow-500'>এই কোর্সে আপনি কি কি পাবেন?</h1>
                 <h1 className='grid grid-cols-1 md:grid-cols-2 gap-6 my-10'>
                    {/* { 
                        provides ?
                        provides.map((p,idx)=><p key={idx}><li className='text-white' >{p}</li></p>):
                        <h1 className=' text-2xl font-bold text-white' key={"key"}>UpComming</h1>
                    } */}
                    { 
                        provides ?
                        provides.map((p,idx)=><p key={idx} className='flex items-center gap-2'><FaCheckCircle className='text-green-500' />{p}</p>):
                        <div><h1 className=' text-2xl font-bold text-white'>UpComming</h1></div>
                    }

                 </h1>
             </div>
             <div className='w-full md:w-[50%]   flex flex-col  gap-5 '>
                  <h1 className='text-4xl'>Admission is going on</h1>
                  <div className='bg-[#4CBD90] p-5 rounded-lg flex flex-col gap-2 w-full md:w-10/12 '>
                     <h1 className='text-lg font-bold'>Course fee Online</h1>
                     <h1 className='text-xl font-bold'>{online?online:"Upcomming"}</h1>
                     <button onClick={handleEnroll} className='btn bg-white w-full md:w-6/12 text-[#4CBD90] font-bold border-0 '>Enroll Now</button>
                  </div>

                  <div className='bg-[#4CBD90] p-5 rounded-lg flex flex-col gap-2  w-full md:w-10/12'>
                     <h1 className='text-lg font-bold'>Course fee Offline</h1>
                     <h1 className='text-xl font-bold'>{offline?offline:"Upcomming"}</h1>
                     <button  className='btn bg-white w-full md:w-6/12 text-[#4CBD90] font-bold border-0'>Enroll Now</button>
                  </div>
                 
             </div>
          </div>


         {
            id==1 &&
            <div>
                  {/* Course CuriCulam Start */}
                  <div>
                    <CourseCuriculam id={id}></CourseCuriculam>
                </div>
                {/* Course CuriCulam End */}

                 {/* SoftWare you will Learn Start           */}
                <div>
                    <SoftWareYouWillLearn id={id}></SoftWareYouWillLearn>
                </div>
                {/* SoftWare you will Learn End           */}

              

                <CourseDescription></CourseDescription>
            </div>
         }

        </div>
    );
};

export default CourseDetails;