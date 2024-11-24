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
        className="flex transition-transform duration-[500ms] ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children.map((child, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mt-5">
        <button
          onClick={handlePrev}
          className="primaryFontHeadings flex items-center gap-2 text-slate-50  hover:bg-[#151515] p-3 rounded-[8px]"
          style={{ fontSize: "clamp(15px, 5vw, 25px)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          <p>Tilbake</p>
        </button>
        <button
          onClick={handleNext}
          className="primaryFontHeadings flex items-center gap-2 text-slate-50  hover:bg-[#151515] p-3 rounded-[8px]"
          style={{ fontSize: "clamp(15px, 5vw, 25px)" }}
        >
          <p>Neste</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CustomSwiper;
