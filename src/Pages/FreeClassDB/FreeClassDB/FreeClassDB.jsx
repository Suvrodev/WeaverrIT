import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import OnMount from '../../../Layout/Refer/OnMount/OnMount';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const FreeClassDB = () => {


    const nativate=useNavigate()

    const [hideModal,setHideModal]=useState(false)
     

    const [allData,setAllData]=useState([])
    const handleCome=()=>{
        fetch('https://sheetdb.io/api/v1/lg5u6p6lxaymq')
        .then(res=>res.json())
        .then(data=>setAllData(data))
    }

    console.log(allData);

    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log("Submit");
        document.getElementById('md').showModal()

        const Form=event.target;
        
        const name=Form.name.value
        const mobile=Form.phone.value
        const whatsapp=Form.whatsapp.value
        const email=Form.email.value;
        const facebookid=Form.fb.value;
        const study=Form.study.value;
        const zila=Form.zila.value;
        const promocode=Form.promocode.value;
        const id = Date.now().toString();

        const formData={name,mobile,whatsapp,email,facebookid,study,zila,promocode,id}
        // console.log(formData);

        // nativate('/')
        

        fetch('https://sheetdb.io/api/v1/lg5u6p6lxaymq', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
       })
    .then((response) => response.json())
    .then((data) => {
        if(data.created>0){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Info saved Successfully",
                showConfirmButton: false,
                timer: 1500
              });

              setHideModal(true)
              window.location.reload();

        }
    });

    }

    const handleJoinMessengerGroup=()=>{
        console.log("Messenger Group");
        // window.location.href="https://m.me/j/AbZ0Z1zMvMTDZhkj/"
        window.open('https://m.me/j/AbZ0Z1zMvMTDZhkj/', '_blank');
    }

   

    return (
        <div>
             <Helmet>
                <title>Free Class | WeaverrIT</title>
            </Helmet>
            <OnMount></OnMount>

           

           
            <div className="card-body  flex flex-col justify-center  ">
            <h1 className="text-3xl font-bold text-center text-[#4CBD90]">Submit Your Data for Free Class</h1>

            <div className='flex justify-end'>
                <button onClick={handleJoinMessengerGroup} className='btn btn-primary'>Join Our Messenger Group</button>
            </div>

            <form onSubmit={handleSubmit} >
            
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-bold">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Name"
                        className="input input-bordered bg-[#0B1221] text-white"
                        name="name"
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
                      className="input input-bordered bg-[#0B1221] text-white"
                      name="phone"
                      required
                  />
                  </div>

                  <div className="form-control">
                  <label className="label">
                      <span className="label-text font-bold">Whatsapp Number</span>
                  </label>
                  <input
                      type="number"
                      placeholder="Whatsapp Number"
                      className="input input-bordered bg-[#0B1221] text-white"
                      name="whatsapp"
                      required
                  />
                  </div>

              <div className="form-control">
                  <label className="label">
                      <span className="label-text font-bold">Email</span>
                  </label>
                  <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered bg-[#0B1221] text-white"
                      name="email"
                      required
                  />
                  </div>
              <div className="form-control">
                  <label className="label">
                      <span className="label-text font-bold">Facebook ID</span>
                  </label>
                  <input
                      type="text"
                      placeholder="Facebook id"
                      className="input input-bordered bg-[#0B1221] text-white"
                      name="fb"
                      required
                  />
                  </div>
              <div className="form-control">
                  <label className="label">
                      <span className="label-text font-bold">Education Qualification</span>
                  </label>
                  <input
                      type="text"
                      placeholder="Education Qualification"
                      className="input input-bordered bg-[#0B1221] text-white"
                      name="study"
                      required
                  />
                  </div>
              <div className="form-control">
                  <label className="label">
                      <span className="label-text font-bold">District </span>
                  </label>
                  <input
                      type="text"
                      placeholder="District"
                      className="input input-bordered bg-[#0B1221] text-white"
                      name="zila"
                      required
                  />
                  </div>
              <div className="form-control">
                  <label className="label">
                      <span className="label-text font-bold">Promocode</span>
                  </label>
                  <input
                      type="text"
                      placeholder="Promocode(Optional)"
                      className="input input-bordered bg-[#0B1221] text-white"
                      name="promocode"
                      
                  />
                  </div>

            


                    <div className="form-control mt-6">
                    <input type="submit" className="btn btn-primary " value="Submit" />
                  </div>
                 
            </form>
            </div>


            {/* <button onClick={handleCome} className='btn btn-success text-white'>Come Data</button> */}
            {/* <button className='btn btn-primary' onClick={()=>document.getElementById('md').showModal(2)} >Handle Modal</button> */}


            <dialog id="md" className={`modal  ${hideModal?'hidden':''} `}>
                <div className="modal-box bg-green-600">
                    <h3 className="font-bold text-lg">Loading</h3>
                    <div className='flex items-center justify-center '>
                       <span className="loading loading-infinity loading-lg W-[6/12] mx-auto "></span>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                          <button className="btn bg-red-600 text-white">X</button>
                        </form>
                </div>
                </div>
            </dialog>
          </div>


       
    );
};

export default FreeClassDB;