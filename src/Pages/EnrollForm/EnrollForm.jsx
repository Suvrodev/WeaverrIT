import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import OnMount from '../../Layout/Refer/OnMount/OnMount';
import Swal from 'sweetalert2';

const EnrollForm = () => {

    const [hideModal,setHideModal]=useState(false)
    const [paymentMethod, setPaymentMethod] = useState('');

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
        console.log("Now: ",event.target.value);
    };


    const [gender,setGender]=useState("")
    const handleGenderChange=(event)=>{
        setGender(event.target.value)
        console.log("Gender: ",event.target.value);
    }

    const [religion,setReligion]=useState("")
    const handleReligionChange=(event)=>{
        setReligion(event.target.value)
        console.log("Religion: ",event.target.value);
    }

    const [blood,setBlood]=useState("")
    const handleBloodChange=(event)=>{
        setBlood(event.target.value)
        console.log("Blood Group: ",event.target.value);
    }


    const errorMessage=(message)=>{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: message,
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }

    

    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log("Submit");
      


        const Form=event.target;
        
        const transaction=Form.transaction.value
        const bn=Form.bn.value
        const name=Form.name.value
        const nameBn=Form.namebn.value;
        const mobile=Form.phone.value
        const whatsapp=Form.whatsapp.value
        const email=Form.email.value;
        const facebookid=Form.fb.value;
        const study=Form.study.value;
        const district=Form.district.value;
        const promocode=Form.promocode.value;
        const id = Date.now().toString();

      
        const formData={id,transaction,paymentMethod,bn, name,nameBn,mobile,whatsapp,email,facebookid,study,district,promocode,gender,religion,blood}
        console.log(formData);

        if(!paymentMethod){
            errorMessage("Give Payment Wallet")
            return
        }
        if(!gender){
            errorMessage("Give Gender")
            return
        }
        if(!religion){
            errorMessage("Give Religion")
            return
        }
        if(!blood){
            errorMessage("Give Blood Group")
            return
        }

        document.getElementById('enrollProgressModal').showModal()
     
            fetch(`https://sheetdb.io/api/v1/6xuzpqj77uzg7`,{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(res=>res.json())
            .then(data=>{
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
            })
      
    }
    return (
        <div>
             <Helmet>
                <title>Free Class | WeaverrIT</title>
            </Helmet>
            <OnMount></OnMount>

           

           
            <div className="card-body  flex flex-col justify-center  ">
            <h1 className="text-3xl font-bold text-center text-[#4CBD90]">Submit Your Data for Graphics Design Course</h1>
           
          

            <form onSubmit={handleSubmit} >
            
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-bold">Transaction ID</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Transiction id"
                        className="input input-bordered bg-[#0B1221] text-white"
                        name="transaction"
                        required
                    />
                </div>

                <div className='flex gap-6 my-4'>
                    <div className='flex items-center gap-4'>
                       <input type="radio" name="paymentMethod"  className="radio radio-accent" value="bkash"  checked={paymentMethod === 'bkash'} onChange={handlePaymentMethodChange} />
                       <p>bKash</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <input type="radio" name="paymentMethod"  value="nagad" className="radio radio-accent" checked={paymentMethod === 'nagad'} onChange={handlePaymentMethodChange} />
                        <p>Nagad</p>
                    </div>
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-bold">bKash/Nagad Number</span>
                    </label>
                    <input
                        type="number"
                        placeholder="bKash/Nagad Number"
                        className="input input-bordered bg-[#0B1221] text-white"
                        name="bn"
                        required
                    />
                </div>

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

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-bold">নাম</span>
                    </label>
                    <input
                        type="text"
                        placeholder="নাম (বাংলায়)"
                        className="input input-bordered bg-[#0B1221] text-white"
                        name="namebn"
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
                      placeholder="যে নাম্বার দিয়ে Whatsapp গ্রুপে Add থাকবেন"
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
                      name="district"
                      required
                  />
                  </div>
              <div className="form-control">
                  <label className="label">
                      <span className="label-text font-bold">Promocode(optional)</span>
                  </label>
                  <input
                      type="text"
                      placeholder="Promocode(Optional)"
                      className="input input-bordered bg-[#0B1221] text-white"
                      name="promocode"
                  />
                </div>

                <div className='flex gap-6 my-4'>
                    <label className="label">
                        <span className="label-text font-bold">Gender: </span>
                    </label>

                    <div className='flex items-center gap-4'>
                       <input type="radio" name="male" className="radio radio-accent" value="male"  checked={gender === 'male'} onChange={handleGenderChange} />
                       <p>Male</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <input type="radio" name="female" className="radio radio-accent" value="female"  checked={gender === 'female'} onChange={handleGenderChange} />
                        <p>Female</p>
                    </div>
                </div>

                <div className='flex gap-6 my-4 items-start'>
                    <label className="label">
                        <span className="label-text font-bold">Religion: </span>
                    </label>

                   <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>
                             <div className='flex items-center gap-4'>
                                <input type="radio" name="muslim" className="radio radio-accent" value="muslim"  checked={religion === 'muslim'} onChange={handleReligionChange}/>
                                <p>Muslim</p>
                             </div>

                            <div className='flex items-center gap-4'>
                                <input type="radio" name="hinduism" className="radio radio-accent" value="hinduism"  checked={religion === 'hinduism'} onChange={handleReligionChange} />
                                <p>Hinduism</p>
                            </div>

                            <div className='flex items-center gap-4'>
                                <input type="radio" name="buddhist" className="radio radio-accent" value="buddhist"  checked={religion === 'buddhist'} onChange={handleReligionChange} />
                                <p>Buddhist</p>
                            </div>

                            <div className='flex items-center gap-4'>
                                <input type="radio" name="christian" className="radio radio-accent" value="christian"  checked={religion === 'christian'} onChange={handleReligionChange} />
                                <p>Christian</p>
                            </div>
                   </div>
                </div>

                <div className='flex gap-6 my-4 items-start'>
                    <label className="label">
                        <span className="label-text font-bold">Blood Group: </span>
                    </label>

                   <div className='grid grid-cols-2 md:grid-cols-6 gap-2'>
                             <div className='flex items-center gap-4'>
                                <input type="radio" name="A+" className="radio radio-accent" value="A+"  checked={blood === 'A+'} onChange={handleBloodChange}/>
                                <p>A+</p>
                             </div>

                            <div className='flex items-center gap-4'>
                                <input type="radio" name="A-" className="radio radio-accent" value="A-"  checked={blood === 'A-'} onChange={handleBloodChange} />
                                <p>A-</p>
                            </div>

                             <div className='flex items-center gap-4'>
                                <input type="radio" name="B+" className="radio radio-accent" value="B+"  checked={blood === 'B+'} onChange={handleBloodChange}/>
                                <p>B+</p>
                             </div>

                            <div className='flex items-center gap-4'>
                                <input type="radio" name="B-" className="radio radio-accent" value="B-"  checked={blood === 'B-'} onChange={handleBloodChange} />
                                <p>B-</p>
                            </div>

                            <div className='flex items-center gap-4'>
                                <input type="radio" name="AB+" className="radio radio-accent" value="AB+"  checked={blood === 'AB+'} onChange={handleBloodChange} />
                                <p>AB+</p>
                            </div>

                            <div className='flex items-center gap-4'>
                                <input type="radio" name="AB-" className="radio radio-accent" value="AB-"  checked={blood === 'AB-'} onChange={handleBloodChange} />
                                <p>AB-</p>
                            </div>
                   </div>
                </div>

            


                    <div className="form-control mt-6">
                    <input type="submit" className="btn btn-primary " value="Submit" />
                  </div>
                 
            </form>
            </div>


            {/* <button onClick={handleCome} className='btn btn-success text-white'>Come Data</button> */}
            {/* <button className='btn btn-primary' onClick={()=>document.getElementById('md').showModal(2)} >Handle Modal</button> */}


            <div className='rounded-2xl bg-[#646EE4] p-10 w-10/12 mx-auto'>
                <h1 className='font-bold my-4 text-2xl'>***শর্তাবলীঃ </h1>
                <div className='flex flex-col gap-6'>
                    <p>
                        ১. বিকাশ বা নগদ যে নাম্বার থেকেই টাকা প্রদান করেন সেই পুরো নাম্বারটি (১১ ডিজিট সহ) প্রদান করতে হবে
                    </p>
                    <p>
                        ২. আপনার Whatsapp এর নাম্বারটি দেওয়ার আগে Check করে নিন। যে Whatsapp নাম্বারটি দিবেন শুধু সেই নাম্বারটিই আমাদের Whatsapp গ্রুপে Add করা হবে। দ্বিতীয় কোনো নাম্বার Add করা হবে না
                    </p>
                </div>
            </div>


            <dialog id="enrollProgressModal" className={`modal  ${hideModal?'hidden':''} `}>
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

export default EnrollForm;