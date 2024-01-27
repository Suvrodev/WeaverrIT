import React from 'react';
import Banner from '../../CommonPage/Banner/Banner';
import Category from '../Category/Category/Category';
import Footer from '../../CommonPage/Footer/Footer';
import CareerGoal from '../CareerGoal/CareerGoal';
import FreeTeShikhun from '../FreeTeShikhun/FreeTeShikhun';

const Home = () => {
    return (
        <div>
            <h1>This is Home</h1> 
             <Banner></Banner>
             <Category></Category>
             <FreeTeShikhun></FreeTeShikhun>
             <CareerGoal></CareerGoal>
             <Footer></Footer>
        </div>
    );
};

export default Home; 