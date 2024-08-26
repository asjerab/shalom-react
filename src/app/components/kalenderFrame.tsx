import React from "react";
import CustomSwiper from "./CustomSwiper";

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
          <div className="grid grid-cols-7 gap-2 uppercase primaryFontHeadings text-slate-50">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <div key={day} className="font-bold w-full text-center">
                {day}
              </div>
            ))}
            {Array.from({ length: getFirstDayOfMonth(month) }).map((_, i) => (
              <div key={i}></div>
            ))}
            {Array.from({ length: getDaysInMonth(month) }, (_, i) => i + 1).map(
              (day) => {
                const dateData = data.find(
                  (d) => d.month === month && d.date === day
                );

                return (
                  <div key={day} className="relative border-[1px] border-[#535353] p-2 rounded-[8px]">
                    {dateData ? (
                      <>
                        <a href={dateData.id} className="relative z-10 text-blue-500 cursor-pointer">
                          {day}
                        </a>
                        {dateData.image && (
                          <img
                            src={"_next/static/media/" + dateData.image}
                            alt={``}
                            className="absolute top-0 left-0 w-full h-full object-cover rounded-[8px]"
                          />
                        )}
                      </>
                    ) : (
                      <span className="relative z-10">{day}</span>
                    )}
                  </div>
                );
              }
            )}
          </div>
        </div>
      ))}
    </CustomSwiper>
  );
};

export default Calendar;