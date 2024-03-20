import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/CommonPage/Header/Header";
import Footer from "../Pages/CommonPage/Footer/Footer";
import MessengerCustomerChat from "react-messenger-customer-chat";
import ScrollToTop from "react-scroll-to-top";
import ScrollTop from "./Refer/ScrollTop/ScrollTop";
import { CustomChat, FacebookProvider } from "react-facebook";
import FacebookMsg from "./Refer/FacebookMsg/FacebookMsg";
import BackToTopButton from "./Refer/BackToTopButton/BackToTopButton";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>

      <BackToTopButton></BackToTopButton>
      <FacebookMsg></FacebookMsg>

      {/* <div className="flex ">
        <div className="bg-green-600">
          <ScrollTop></ScrollTop>
        </div>
        <div>
          <FacebookMsg></FacebookMsg>
        </div>
      </div> */}
    </div>
  );
};

export default Main;
