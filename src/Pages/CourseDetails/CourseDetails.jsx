import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
    const {id}=useParams()
    // console.log(id);

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
    const {desc,image,provide,online,offline}=course

    let provides;
    if(provide){
        provides=provide.split(",")
    }
    // console.log(provides);
    return (
        <div>
          <div className='flex flex-col md:flex-row gap-10 items-center'>
             <div className='w-full md:w-[50%] flex flex-col justify-center items-center'>
                 <h1 className='my-5 text-2xl font-bold text-yellow-500'>কোর্স সম্পর্কে</h1>
                 <h1 className=''>{desc?desc:<p className='text-2xl font-bold' key={1122}>UpComming</p>}</h1>
             </div>
             <div className='w-full md:w-[50%] p-5'>
                  <img className='w-[450px] h-[300px] rounded-xl' src={image} alt="" />
             </div>
          </div>
          <div className='flex flex-col md:flex-row gap-10 items-center'>
             <div className='w-full md:w-[50%] flex flex-col justify-center items-center'>
                 <h1 className='my-5 text-2xl font-bold text-yellow-500'>এই কোর্সে আপনি কি কি পাবেন?</h1>
                 <h1 className=''>
                    { 
                        provides ?
                        provides.map((p,idx)=><li key={idx}>{p}</li>):
                        <h1 className=' text-2xl font-bold' key={"a"}>UpComming</h1>
                    }
                 </h1>
             </div>
             <div className='w-full md:w-[50%] p-5 flex flex-col items-center justify-center gap-5'>
                  <h1 className='text-4xl font-bold'>Fees</h1>
                  <button className='btn bg-blue-600 w-[200px] flex font-bold text-white'>  <p className=''>Online</p> <br /> <p>{online?online:"Upcomming"} </p></button>
                  <button className='btn bg-blue-600 w-[200px] flex font-bold text-white'>  <p className=''>Offline</p> <br /> <p>{offline?offline:"Upcommin"} </p></button>
             </div>
          </div>
        </div>
    );
};

export default CourseDetails;