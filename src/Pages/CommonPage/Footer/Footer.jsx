import React, { useState } from "react";
import "./Footer.css";
import Logo from "../../../assets/Logo/Site_Logo.png";
import ScrollToTop from "react-scroll-to-top";
import ReactModal from "react-modal";
import DeveloperModal from "../../../Layout/Refer/DeveloperModal/DeveloperModal";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleWhatsapp = () => {
    const whatsappUrl = `https://wa.me/8801911473105`;
    window.open(whatsappUrl, "_blank");
  };

  const phoneNumber = "+880 1911473105";
  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const emailAddress = "weaverrit@gmail.com";
  const handleEmail = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  //#51B8E5
  //4A5466
  return (
    <div className="  bg-[#0B1221] flex flex-col items-center text-white mt-10">
      <footer className="footer p-10  rounded-md grid grid-cols-1 md:grid-cols-4 justify-evenly max-w-7xl mx-auto">
        <aside>
          <img className="w-[146px]" src={Logo} alt="" />
          <p>অনলাইন লাইভ স্কিল ডেভেলপমেন্ট প্ল্যাটফর্ম।</p>
          <div className="flex gap-4 text-xl mt-2">
            <Link to={"https://www.facebook.com/weaverrit"} target="_blank">
              {" "}
              <FaFacebook />{" "}
            </Link>
            <Link
              to={
                "https://twitter.com/weaverrits?fbclid=IwAR37BnxVEH2K1qSEbaYRAZW3Cl459us7YM7WyzYH4tVXySL6Vn-rKoIqq28"
              }
              target="_blank"
            >
              {" "}
              <FaTwitter />{" "}
            </Link>
            <Link
              to={
                "https://www.instagram.com/weaverrits/?fbclid=IwAR37BnxVEH2K1qSEbaYRAZW3Cl459us7YM7WyzYH4tVXySL6Vn-rKoIqq28"
              }
              target="_blank"
            >
              {" "}
              <FaInstagram />{" "}
            </Link>
            <Link to={"https://www.linkedin.com/company/weaverrit/"}>
              {" "}
              <FaLinkedin />{" "}
            </Link>
            <Link to="" onClick={handleWhatsapp}>
              {" "}
              <FaWhatsapp />{" "}
            </Link>
            {/* <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a> */}
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Quick Link</h6>

          <Link to="/service" className="link link-hover">
            Service
          </Link>

          <a className="link link-hover">Free Course</a>
          <a className="link link-hover">We do?</a>
          <a className="link link-hover">Blog</a>
        </nav>
        <nav>
          <h6 className="footer-title">Support</h6>
          <Link to="/about" className="link link-hover">
            About us
          </Link>

          <a className="link link-hover" onClick={handlePhoneCall}>
            +880 1911473105
          </a>
          <a className="link link-hover" onClick={handleEmail}>
            weaverrit@gmail.com
          </a>

          {/* <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a> */}
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>

          <Link to="/condition" className="link link-hover">
            Terms of use
          </Link>
          <a className="link link-hover">Privacy policy</a>
          {/* <a className="link link-hover">Cookie policy</a> */}
        </nav>
      </footer>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <h1 className="text-xl font-bold cursor-pointer" onClick={()=>document.getElementById('my_modal_1').showModal()}>Contact With Developer</h1> */}
      <dialog id="my_modal_1" className="modal  ">
        <div className="modal-box">
          <DeveloperModal></DeveloperModal>
          <div className="modal-action invi">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Footer;
