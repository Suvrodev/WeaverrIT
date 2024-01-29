import { useLottie } from 'lottie-react';
import React from 'react';
import FQ from '../../../../public/Lotte_1.json'


const FAQ = () => {
    const options = {
        animationData: FQ,
        loop: true
      };
    
      const { View } = useLottie(options);

    return (
        <div className='mt-20' data-aos="zoom-in-right">
        <h1 className='text-center text-4xl w-11/12 md:w-1/2 rounded-xl text-white bg-yellow-500 mx-auto p-4'>সাধারন প্রশ্ন ও উত্তর</h1>

        <div className='flex flex-col md:flex-row items-center bg-black '>
            <div className='clientQsn w-full md:w-1/2 p-2 md:m-10'>

                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        আমরা কি Online এবং Offline Course দুটোই করতে পারবো?
                    </div>
                        <div className="collapse-content">
                            <p className='text-[#4CBD90]'>হ্যাঁ দুটোই করতে পারবেন</p>
                        </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        এখন কি কি কোর্স চালু আছে?
                    </div>
                        <div className="collapse-content">
                            <p className='text-[#4CBD90]'>এখন শুধু Graphics Design এর কোর্স চালু আছে?</p>
                        </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                       কোর্স শেষে আমরা কি কি ধরনের সুবিধা পাবো?
                    </div>
                        <div className="collapse-content">
                            <p className='text-[#4CBD90]'>Fiver, Upwork, Freeluncher এবং Linkdin এর মাধ্যমে আপনাদের কাজ পাওয়ার সম্পস্ত সিস্টেম দেখিয়ে দেওয়া হবে</p>
                        </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        আপনাদের কি সাপোর্ট সেশন থাকবে
                    </div>
                        <div className="collapse-content">
                            <p className='text-[#4CBD90]'>হ্যাঁ, অবশ্যই থাকবে। আপনাদের সমস্ত প্রোবলেম Solve করে দেওয়া হবে</p>
                        </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        আপনাদের কন্টাক্ট নাম্বার?
                    </div>
                        <div className="collapse-content">
                            <p className='text-[#4CBD90]'>আমাদের সাথে 01911-473105 এই নাম্বারে ফোনে যোগযোগ করতে পারবেন</p>
                        </div>
                </div>
                
              
                

            </div>

            <div className='anim w-full md:w-1/2 flex items-center justify-center'>
                {View}
            </div>
        </div>
    </div>
    );
};

export default FAQ;