import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoginAnim from '../../../../public/Login_Lottie.json'
import { useLottie } from 'lottie-react';

const Login = () => {

    const options = {
        animationData: LoginAnim,
        loop: true
      };
    
      const { View } = useLottie(options);

    

    const navigate=useNavigate();
    const loc=useLocation()
    //console.log(loc)
    const from= loc.state?.from?.pathname || '/';
   // console.log(from)



   const [showPassword,setShowPassword]=useState(false)
   const handleShowPassword=()=>{
    setShowPassword(!showPassword)
   }
//    console.log(showPassword);

  
   

    return (
        <div className="flex flex-col-reverse md:flex-row ">
          <div className="w-full md:w-[50%]   flex items-center justify-center ">
            <div className="card-body  flex flex-col justify-center  ">
            <h1 className="text-3xl font-bold text-center">Login now!</h1>

            <form onSubmit="">
              <div className="form-control">
                  <label className="label">
                      <span className="label-text font-bold">Email</span>
                  </label>
                  <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      name="email"
                      required
                  />
                  </div>


                  <div className="form-control relative">
                  <label className="label font-bold">
                      <span className="label-text">Password</span>
                  </label>
                  <input
                      type={showPassword?'text':'password'}
                      placeholder="password"
                      className="input input-bordered"
                      name="password"
                      required
                  />

                  <div onClick={handleShowPassword} className='absolute right-10 bottom-3'>
                   {showPassword? 'Hide':'Show' }
                  </div>
                
                  </div>
                    <div className="form-control mt-6">
                    <input type="submit" className="btn btn-primary" value="Login" />
                  </div>
                  <p className='text-center my-2'>Don't have an account? Go to <Link to={'/registration'} className='font-bold underline text-blue-600'>Registration</Link> </p>
            </form>
            </div>
          </div>

          <div className='w-full md:w-[50%] flex items-center justify-center  p-20'>
              <div className='w-full'>
                     {View}    
              </div>
          </div>
      </div>
    );
};

export default Login;