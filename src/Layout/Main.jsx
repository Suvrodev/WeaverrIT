import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/CommonPage/Header/Header';
import Footer from '../Pages/CommonPage/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;