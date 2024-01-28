import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/CommonPage/Header/Header';
import Footer from '../Pages/CommonPage/Footer/Footer';
import MessengerCustomerChat from 'react-messenger-customer-chat';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>


            {/* Messenger Start */}
            <MessengerCustomerChat
                pageId="<PAGE_ID>"
                appId="<APP_ID>"
                htmlRef="<REF_STRING>"
            />
            {/* Messenger End */}
            
        </div>
    );
};

export default Main;