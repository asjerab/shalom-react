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
              <div key={day} className="font-bold">
                {day}
              </div>
            ))}
            {Array.from({ length: getFirstDayOfMonth(month) }).map((_, i) => (
              <div key={i} className="border p-2"></div>
            ))}
            {Array.from({ length: getDaysInMonth(month) }, (_, i) => i + 1).map(
              (day) => {
                const dateData = data.find(
                  (d) => d.month === month && d.date === day
                );

                return (
                  <div key={day} className="relative border p-2">
                    {dateData ? (
                      <>
                        <a href={dateData.id} className="text-blue-500 cursor-pointer">
                          {day}
                          {dateData.image && (
                            <img
                              src={"_next/static/media/" + dateData.image}
                              alt={``}
                              className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
                            />
                          )}
                        </a>
                      </>
                    ) : (
                      <span>{day}</span>
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
