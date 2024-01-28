import React from 'react';
import WeaverLogo from '../../../assets/Logo/Site_Logo.png'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {


    const NavItems=<div className='lg:flex items-center justify-center'>
        <li><NavLink className={({isActive})=> isActive? 'text-blue-500 font-extrabold':''}  to='/home'>Home</NavLink ></li>
        <li><NavLink className={({isActive})=> isActive? 'text-blue-500 font-extrabold':''}  to='/menu'>Service</NavLink >
            {/* <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul> */}
        </li>
        <li><NavLink className={({isActive})=> isActive? 'text-blue-500 font-extrabold':''}  to='/about'>About</NavLink ></li>
        <li><NavLink className={({isActive})=> isActive? 'text-blue-500 font-extrabold':''}  to='/contact'>Contact</NavLink ></li>
   </div>

    return (
        <div className='bg-[#0B1221]  sticky top-0 z-10 bg-opacity-5 '>
          <div className="navbar bg-[#0B1221] max-w-7xl mx-auto ">
              <div className="navbar-start  ">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#0B1221] rounded-box w-52">
                      {
                          NavItems
                      }
                    
                  {/* <NavItems/> */}
                  </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl">Weaverr IT</a> */}
                <Link to={'/home'}><img className='w-20 md:w-44' src={WeaverLogo} alt="" /></Link>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {/* <NavItems></NavItems> */}
                    {NavItems}
                </ul>
              </div>
              <div className="navbar-end">
                <a className="btn">Login</a>
              </div>
            </div>
        </div>
    );
};

export default Header;