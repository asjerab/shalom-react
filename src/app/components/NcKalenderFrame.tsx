import Image from 'next/image';
import React from "react";
import CustomSwiper from "./NcCustomSwiper";


interface CalendarProps {
  data: { month: string; id: string; date: number; image?: string }[];
}

const Calendar: React.FC<CalendarProps> = ({ data }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getDaysInMonth = (month: string) => {
    const monthIndex = months.indexOf(month);
    return new Date(2024, monthIndex + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: string) => {
    const monthIndex = months.indexOf(month);

    return new Date(2024, monthIndex, 0).getDay();
  };

  const currentMonthIndex = new Date().getMonth();

  return (
    <CustomSwiper initialIndex={currentMonthIndex}>
      {months.map((month) => (
        <div key={month} className="w-full">
  <div className="pb-16">
    <h2
      className="font-bold primaryFontHeadings text-slate-50 pt-10"
      style={{ fontSize: "clamp(15px, 5vw, 35px)" }}
    >
      {month}
    </h2>
  </div>
  <div className="grid grid-cols-7 gap-2 uppercase primaryFontRegular text-slate-50" style={{ fontSize: "clamp(12px, 3.5vw, 20px)" }}>
    {["Man", "Tir", "Ons", "Tor", "Fre", "Lør", "Søn"].map((day) => (
      <div key={day} className="font-bold w-full text-center pb-5">
        {day}
      </div>
    ))}
    {Array.from({ length: getFirstDayOfMonth(month) }).map((_, i) => (
      <div key={i}></div>
    ))}
    {Array.from({ length: getDaysInMonth(month) }, (_, i) => i + 1).map((day) => {
      const dateData = data.find((d) => d.month === month && d.date === day);

      return (
        <div key={day} className="kalender-day-box relative border-none bg-[#1e1e1e] h-[46px] rounded-[4px]">
          {dateData ? (
            <a href={dateData.id}>
              <p className="relative z-10 text-slate-50 cursor-pointer">
                {day}
              </p>  
              {dateData.image && (
                <Image
                  src={"/" + dateData.image}
                  alt={``}
                  width={640}
                  height={640}
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-[4px]"
                />
              )}
            </a>
          ) : (
            <span className="relative z-10 flex justify-end items-start text-[12px] h-full px-2 py-1" style={{fontSize:"clamp(8px, 2vw, 15px)"}}>{day}</span>
          )}
        </div>
      );
    })}
  </div>
</div>
      ))}
    </CustomSwiper>
  );
};

export default Calendar;