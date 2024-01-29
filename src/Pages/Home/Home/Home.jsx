import React from 'react';
import Banner from '../../CommonPage/Banner/Banner';
import Category from '../Category/Category/Category';
import Footer from '../../CommonPage/Footer/Footer';
import CareerGoal from '../CareerGoal/CareerGoal';
import FreeTeShikhun from '../FreeTeShikhun/FreeTeShikhun';
import LiveCourse from '../LiveCourse/LiveCourse';
import { Helmet } from 'react-helmet-async';
import OnMount from '../../../Layout/Refer/OnMount/OnMount';
import FAQ from '../FAQ/FAQ';
import FacebookMsg from '../../../Layout/Refer/FacebookMsg/FacebookMsg';

const Home = () => {
    return (
        <div>
            
            <Helmet>
                <title>Home | WeaverrIT</title>
            </Helmet>
            <OnMount></OnMount>
             <Banner></Banner>
             <Category></Category>
            
             <FacebookMsg></FacebookMsg>

             <FreeTeShikhun></FreeTeShikhun>
             <CareerGoal></CareerGoal>
             <LiveCourse></LiveCourse>
             <FAQ></FAQ>
             {/* <Footer></Footer> */}

           
        </div>
    );
};

export default Home; 