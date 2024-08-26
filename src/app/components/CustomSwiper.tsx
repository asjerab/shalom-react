"use client";
import React, { useState, useEffect } from 'react';

interface CustomSwiperProps {
  children: React.ReactNode[];
  initialIndex: number;
}

const CustomSwiper: React.FC<CustomSwiperProps> = ({ children, initialIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : children.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < children.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children.map((child, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handlePrev}
          className="bg-gray-800 text-white p-2 mx-2"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-800 text-white p-2 mx-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CustomSwiper;