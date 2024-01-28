import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CourseBox from './CourseBox';

const Courses = () => {
    // const [allCourses,setAllCourses]=useState([])
    const {id}=useParams()
    const { state } = useLocation()
    const allCourses=state.data;
    console.log("All Courses: ",allCourses);
    // console.log("Came ID: ",id);

    const courses=allCourses.filter(all=>all.categoryid==id)
    console.log("This Courses: ",courses);

    // axios.get('category.json')
    // .then(res=>console.log(res.data))

    // console.log(courses);

   

      

   
      

   

    return (
        <div>
          <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-10 '>
            {
                courses.map((c,idx)=><CourseBox key={idx} c={c} ></CourseBox>)
            }
          </div>
        </div>
    );
};

export default Courses;