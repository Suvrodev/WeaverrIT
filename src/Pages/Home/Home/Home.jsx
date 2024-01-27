import React from 'react';
import Banner from '../../CommonPage/Banner/Banner';
import Category from '../Category/Category/Category';
import Footer from '../../CommonPage/Footer/Footer';
import CareerGoal from '../CareerGoal/CareerGoal';
import FreeTeShikhun from '../FreeTeShikhun/FreeTeShikhun';
import LiveCourse from '../LiveCourse/LiveCourse';

const Home = () => {
    return (
        <div>
            <h1>This is Home</h1> 
             <Banner></Banner>
             <Category></Category>
             <FreeTeShikhun></FreeTeShikhun>
             <CareerGoal></CareerGoal>
             <LiveCourse></LiveCourse>
             {/* <Footer></Footer> */}
        </div>
    );
};

export default Home; 