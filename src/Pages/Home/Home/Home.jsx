import React from 'react';
import Banner from '../../CommonPage/Banner/Banner';
import Category from '../Category/Category/Category';
import Footer from '../../CommonPage/Footer/Footer';

const Home = () => {
    return (
        <div>
            <h1>This is Home</h1> 
             <Banner></Banner>
             <Category></Category>
             <Footer></Footer>
        </div>
    );
};

export default Home; 