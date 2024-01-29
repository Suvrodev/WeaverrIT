import React from 'react';
import Banner from '../../CommonPage/Banner/Banner';
import Category from '../Category/Category/Category';
import Footer from '../../CommonPage/Footer/Footer';
import CareerGoal from '../CareerGoal/CareerGoal';
import FreeTeShikhun from '../FreeTeShikhun/FreeTeShikhun';
import LiveCourse from '../LiveCourse/LiveCourse';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | WeaverrIT</title>
            </Helmet>
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