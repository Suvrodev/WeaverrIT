import { useLottie } from "lottie-react";
import React from "react";
import FQ from "../../../../public/Lotte_1.json";

const FAQ = () => {
  const options = {
    animationData: FQ,
    loop: true,
  };

  const { View } = useLottie(options);

  const questions = [
    "আমরা কি Online এবং Offline Course দুটোই করতে পারবো?",
    " এখন কি কি কোর্স চালু আছে?",
    " কোর্স শেষে আমরা কি কি ধরনের সুবিধা পাবো?",
    " আপনাদের কি সাপোর্ট সেশন থাকবে",
    " আপনাদের কন্টাক্ট নাম্বার?",
  ];

  const answers = [
    "হ্যাঁ দুটোই করতে পারবেন",
    "এখন শুধু Graphics Design এর কোর্স চালু আছে",
    "Fiver, Upwork, Freeluncher এবং Linkdin এর মাধ্যমে আপনাদের কাজ পাওয়ার সম্পস্ত সিস্টেম দেখিয়ে দেওয়া হবে",
    "হ্যাঁ, অবশ্যই থাকবে। আপনাদের সমস্ত প্রোবলেম Solve করে দেওয়া হবে",
    "আমাদের সাথে 01911-473105 এই নাম্বারে ফোনে যোগযোগ করতে পারবেন",
  ];

  return (
    <div className="mt-20">
      <h1 className="text-center text-4xl w-11/12 md:w-1/2 rounded-xl text-white  mx-auto p-4">
        সাধারন প্রশ্ন ও উত্তর
      </h1>

      <div className="flex flex-col md:flex-row items-center bg-[#FFF1E9] rounded-md mb-10 ">
        <div className="clientQsn w-full md:w-1/2 p-2 md:m-10">
          {questions.map((question, idx) => (
            <div
              key={idx}
              className="collapse collapse-arrow border-0 bg-[#464444] mb-1"
            >
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                {questions[idx]}
              </div>
              <div className="collapse-content">
                <p className="text-[#4CBD90]"> {answers[idx]} </p>
              </div>
            </div>
          ))}

          {/* New-1 Start */}
          {/* <div className="collapse collapse-arrow border-0 bg-[#464444]">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              আমরা কি Online এবং Offline Course দুটোই করতে পারবো?
            </div>
            <div className="collapse-content">
              <p className="text-[#4CBD90]">হ্যাঁ দুটোই করতে পারবেন</p>
            </div>
          </div> */}
          {/* New-1 end */}

          {/* New-2 Start */}
          {/* <div className="collapse collapse-arrow border-0 bg-[#464444]">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              এখন কি কি কোর্স চালু আছে?
            </div>
            <div className="collapse-content">
              <p className="text-[#4CBD90]">
                {" "}
                এখন শুধু Graphics Design এর কোর্স চালু আছে
              </p>
            </div>
          </div> */}
          {/* New-2 end */}

          {/* New-3 Start */}
          {/* <div className="collapse collapse-arrow border-0 bg-[#464444]">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              কোর্স শেষে আমরা কি কি ধরনের সুবিধা পাবো?
            </div>
            <div className="collapse-content">
              <p className="text-[#4CBD90]">
                {" "}
                Fiver, Upwork, Freeluncher এবং Linkdin এর মাধ্যমে আপনাদের কাজ
                পাওয়ার সম্পস্ত সিস্টেম দেখিয়ে দেওয়া হবে
              </p>
            </div>
          </div> */}
          {/* New-3 end */}

          {/* New-4 Start */}
          {/* <div className="collapse collapse-arrow border-0 bg-[#464444]"> */}

          {/* New-4 end */}

          {/* New-5 Start */}
          {/* <div className="collapse collapse-arrow border-0 bg-[#464444]">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              আপনাদের কন্টাক্ট নাম্বার?
            </div>
            <div className="collapse-content">
              <p className="text-[#4CBD90]">
                আমাদের সাথে 01911-473105 এই নাম্বারে ফোনে যোগযোগ করতে পারবেন
              </p>
            </div>
          </div> */}
          {/* New-5 end */}
        </div>

        <div className="anim w-full md:w-1/2 flex items-center justify-center">
          {View}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
