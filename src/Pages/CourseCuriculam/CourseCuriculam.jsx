import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CourseCuriculam = ({id}) => {
    const [curiculams,setCuriculams]=useState([])
    useEffect(()=>{
        axios.get('/subCategory.json')
        .then(res=>{
            let data=res.data
            let cur=data.find(d=>d.id==id)
            setCuriculams(cur.curiculam)

        })
    },[])

    console.log("Curriculams: ",curiculams);
    return (
        <div className='my-10 p-5 '>
           <h1 className='text-xl font-bold'>Course Curiculam</h1>
           <div className='my-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
              {
                curiculams &&
                curiculams.map((c,idx)=> <p key={idx}><li>{c}</li></p> )
              }
           </div>
        </div>
    );
};

export default CourseCuriculam;