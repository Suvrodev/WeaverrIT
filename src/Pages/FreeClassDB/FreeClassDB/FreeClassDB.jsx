import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import OnMount from '../../../Layout/Refer/OnMount/OnMount';
import Swal from 'sweetalert2';

const FreeClassDB = () => {


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
        console.log(formData);

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
        }
    });

    }
    return (
        <div>
             <Helmet>
                <title>Free Class | WeaverrIT</title>
            </Helmet>
            <OnMount></OnMount>

           

           
            <div className="card-body  flex flex-col justify-center  ">
            <h1 className="text-3xl font-bold text-center">Submit yourself for Free Class</h1>

            <form onSubmit={handleSubmit}>
            
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-bold">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Name"
                        className="input input-bordered"
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
                      className="input input-bordered"
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
                      className="input input-bordered"
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
                      className="input input-bordered"
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
                      className="input input-bordered"
                      name="fb"
                      required
                  />
                  </div>
              <div className="form-control">
                  <label className="label">
                      <span className="label-text font-bold">Study</span>
                  </label>
                  <input
                      type="text"
                      placeholder="Study"
                      className="input input-bordered"
                      name="study"
                      required
                  />
                  </div>
              <div className="form-control">
                  <label className="label">
                      <span className="label-text font-bold">Zila</span>
                  </label>
                  <input
                      type="text"
                      placeholder="Zila"
                      className="input input-bordered"
                      name="zila"
                      required
                  />
                  </div>
              <div className="form-control">
                  <label className="label">
                      <span className="label-text font-bold">Promocode</span>
                  </label>
                  <input
                      type="number"
                      placeholder="Promocode(Optional)"
                      className="input input-bordered"
                      name="promocode"
                      
                  />
                  </div>

            


                    <div className="form-control mt-6">
                    <input type="submit" className="btn btn-primary" value="Submit" />
                  </div>
                 
            </form>
            </div>


            <button onClick={handleCome} className='btn btn-success text-white'>Come Data</button>
          </div>


       
    );
};

export default FreeClassDB;