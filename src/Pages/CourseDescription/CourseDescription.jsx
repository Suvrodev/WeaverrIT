import React from 'react';

const CourseDescription = () => {
    return (
        <div className='p-5 md:p-0'>
           <h1 className='text-2xl font-bold'>কোর্স সম্পর্কে </h1>
           <div className='my-4'>
             <p>ফ্রিল্যান্স গ্রাফিক ডিজাইনার হিসেবে আপনি যদি ক্যারিয়ার শুরু করতে চান, তাহলে আপনার জন্যই “ফ্রিল্যান্সিং উইথ গ্রাফিক ডিজাইন” লাইভ কোর্স। ইন্সট্রাকশনে আছেন বন্ধন পোদ্দার অর্জুন ভাই, আর মার্কেটপ্লেসের ইনকাম মডিউলে হেল্প করার জন্য থাকবেন রাব্বি হাসান ভাই ও মুনিম বিন সেলিম ভাই। </p>
           </div>

           <div>
             <h1 className='text-xl font-bold'>কোর্সটি করে কী কী শিখতে পারবো?</h1>
             <div className='my-4 flex flex-col gap-2'>
                <p>- অ্যাডোবি ফটোশপ </p>
                <p>- অ্যাডোবি ইলাস্ট্রেটর</p>
                <p>- ক্যানভা</p>
                <p>- AI উইথ মিডজার্নি</p>
                <p>- মাইক্রোস্টক ইনকাম অপরচুনিটিস</p>
                <p>- ফাইভার আপওয়ার্ক হ্যাকস</p>
                <p>- আউট অব মার্কেটপ্লেস ক্লায়েন্ট হান্টিং</p>
                <p>- ব্র্যান্ড গাইডলাইন</p>
                <p>- ডিজাইন প্রিন্সিপাল</p>
             </div>
           </div>

           <div>
                <h1 className='text-xl font-bold mb-4'>যে মার্কেটপ্লেসগুলো আমরা কভার করবো:</h1>
                <ul>
                    <li>Freelancer</li>
                    <li>Fiverr</li>
                    <li>Upwork</li>
                    <li>Out of Market Place</li>
                </ul>
           </div>

           <div className='my-6'>
              <h1 className='text-2xl font-bold mb-4'>কারিকুলামটাকে কীভাবে সাজানো হয়েছে?</h1>
              <div className='flex flex-col gap-2'>
                <p>- আমরা শুরুটা করবো ফটোশপ দিয়েই। ফটোশপের খুঁটিনাটি থেকে শুরু করে এডভান্সড লেভেলের বিষয়গুলো আমরা শিখে ফেলবো।</p>
                <p>- এরপর আমরা শিখবো এ আই(স্পেশালি মিডজার্নি)) ব্যবহার করে কীভাবে ডিজাইন করতে হয়</p>
                <p>- ফটোশপ ব্যবহার করে আমরা কয়েকটা রিয়েল লাইফ প্রোজেক্ট করে ফেলবো।</p>
                <p>- ফটোশপ শেষ হয়ে গেলে আমরা চলে যাবো ইনকাম মডিউলে অর্থাৎ মার্কেটপ্লেসে কীভাবে কাজ পেতে হয়। </p>
                <p>- এরপর আমরা শিখবো অ্যাডোবি ইলাস্ট্রেটর। এবং একইভাবে ইলাস্ট্রেটর শেখা হয়ে গেলে আমরা এটারও ইনকাম মডিউল কভার করে ফেলবো</p>
              </div>
           </div>

           
        </div>
    );
};

export default CourseDescription;