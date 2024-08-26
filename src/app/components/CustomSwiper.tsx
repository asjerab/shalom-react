"use client";
import React, { useState, useEffect } from "react";

interface CustomSwiperProps {
  children: React.ReactNode[];
  initialIndex: number;
}

const CustomSwiper: React.FC<CustomSwiperProps> = ({
  children,
  initialIndex,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : children.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < children.length - 1 ? prevIndex + 1 : 0
    );
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
      <div className="flex justify-between mt-10">
        <button onClick={handlePrev} className="primaryFontHeadings flex items-center gap-2 text-slate-50 hover:underline" style={{fontSize:"clamp(15px, 5vw, 25px)"}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-7 border-[1px] border-slate-50 text-slate-50 rounded-full"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
          Tilbake
        </button>
        <button
          onClick={handleNext}
          className="primaryFontHeadings flex items-center gap-2 text-slate-50 text-[25px] hover:underline" style={{fontSize:"clamp(15px, 5vw, 25px)"}}
        >
          Neste
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-7 border-[1px] border-slate-50 text-slate-50 rounded-full"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CustomSwiper;
