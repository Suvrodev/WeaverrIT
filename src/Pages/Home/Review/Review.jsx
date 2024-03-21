import axios from "axios";
import React, { useEffect, useState } from "react";
import ReviewBox from "./ReviewBox";

const Review = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios.get("Review.json").then((res) => {
      setComments(res.data);
    });
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center">
        দেখে নিন কি বলছেন ওয়েভার আইটি এর গ্র্যাজুয়েটরা
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {comments.map((c, idx) => (
          <ReviewBox key={idx} c={c}></ReviewBox>
        ))}
      </div>
    </div>
  );
};

export default Review;
