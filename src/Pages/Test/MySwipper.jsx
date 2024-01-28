import React, { useEffect, useRef, useState } from 'react';
import './mySwipper.css'

const MySwipper = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const data = [1, 2, 3, 4, 5, 6, 7, 8];
  
    const handlePlusClick = () => {
      setCurrentIndex(prevIndex => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };
  
    const handleMinusClick = () => {
      setCurrentIndex(prevIndex => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    };
  
    const renderItems = () => {
      const items = [];
      for (let i = 0; i < 4; i++) {
        let index = (currentIndex + i) % data.length;
        items.push(<span key={index} className="swiper-item">{data[index]}</span>);
      }
      return items;
    };

  

    return (
        <div className="flex items-center justify-center">
      <button onClick={handleMinusClick} className="p-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 hidden sm:block">{ '<' }</button>
      <div className="swiper-container">{ renderItems() }</div>
      <button onClick={handlePlusClick} className="p-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 hidden sm:block">{ '>' }</button>
      <button onClick={handleMinusClick} className="p-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 block sm:hidden">{ '<' }</button>
      <span className="swiper-container">{data[currentIndex]}</span>
      <button onClick={handlePlusClick} className="p-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 block sm:hidden">{ '>' }</button>
    </div>
    );
};

export default MySwipper;