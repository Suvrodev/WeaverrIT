import React, { useState } from 'react';
import RegAnim from '../../../../public/Reg_Lottie.json'

import { useLottie } from 'lottie-react';
import { Link } from 'react-router-dom';


const Registration = () => {

    const options = {
        animationData: RegAnim,
        loop: true
      };
    
      const { View } = useLottie(options);




   const [showPassword,setShowPassword]=useState(false)
   const [showPasswordConfirm,setShowPasswordConfirm]=useState(false)
   const [accept,setAccept]=useState(false)

   const handleShowPassword=()=>{
    setShowPassword(!showPassword)
   }
   const handleShowPasswordConfirm=()=>{
     setShowPasswordConfirm(!showPasswordConfirm)
   }

  
   const handleAccept=()=>{
     setAccept(!accept)
   }

  

    return (
        <div className="flex flex-col-reverse md:flex-row ">
          <div className="w-full md:w-[50%]   flex items-center justify-center ">
            <div className="card-body  flex flex-col justify-center  ">
            <h1 className="text-3xl font-bold text-center">Registration now!</h1>

            <form onSubmit="">
              <div className='flex flex-col md:flex-row gap-10 w-ful'>
                <div className="form-control w-full md:w-[50%]">
                    <label className="label">
                        <span className="label-text font-bold">First Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="First Name"
                        className="input input-bordered"
                        name="firstname"
                        required
                    />
                    </div>
                <div className="form-control w-full md:w-[50%]">
                    <label className="label">
                        <span className="label-text font-bold">Last Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="input input-bordered"
                        name="lastname"
                        required
                    />
                    </div>
              </div>
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

              <div className="form-control">
                  <label className="label">
                      <span className="label-text font-bold">Phone Number</span>
                  </label>
                  <input
                      type="number"
                      placeholder="Phone Number"
                      className="input input-bordered"
                      name="phone"
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

                  <div className="form-control relative">
                  <label className="label font-bold">
                      <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                      type={showPasswordConfirm?'text':'password'}
                      placeholder="password"
                      className="input input-bordered"
                      name="password"
                      required
                  />

                        <div onClick={handleShowPasswordConfirm} className='absolute right-10 bottom-3'>
                        {showPasswordConfirm? 'Hide':'Show' }
                        </div>
                  </div>

                  <p className='w-full mx-auto flex items-center'>
                        <input onClick={handleAccept} className='ms-2' type="checkbox" name="accept" id="" />
                        <Link to='/condition' className='ms-2 underline'>Accept Our Terms and Condition</Link>
                 </p>

                    <div className="form-control mt-6">
                    <input type="submit" disabled={!accept} className="btn btn-primary" value="Registration" />
                  </div>
                  <p className='text-center my-2'>Already Have an account? Go to <Link to={'/login'} className='font-bold underline text-blue-600'>Login</Link> </p>
            </form>
            </div>
          </div>

          <div className='w-full md:w-[50%] flex items-center justify-center p-0 md:p-20'>
              <div className='w-full'>
                     {View}    
              </div>
          </div>
      </div>
    );
};

export default Registration;