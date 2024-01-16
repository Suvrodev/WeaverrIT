import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";


const ErrorPage = () => {
    return (
        <div className={`w-full h-[550px] bg-red-400 flex flex-col items-center justify-center gap-5`}>
            <p className='text-4xl font-bold'>Comming Soon............</p>
            <Link to={'/'}> <button className="btn btn-success text-white">Go to Home <FaHome/></button></Link>
        </div>
    );
};

export default ErrorPage;

