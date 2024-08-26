import React from 'react';
import CustomSwiper from './CustomSwiper';

interface CalendarProps {
  data: { month: string; id: string; date: number }[];
}

const Calendar: React.FC<CalendarProps> = ({ data }) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (month: string) => {
    const monthIndex = months.indexOf(month);
    return new Date(2024, monthIndex + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: string) => {
    const monthIndex = months.indexOf(month);
    return new Date(2024, monthIndex, 1).getDay();
  };

  const currentMonthIndex = new Date().getMonth();

  return (
    <CustomSwiper initialIndex={currentMonthIndex}>
      {months.map((month) => (
        <div key={month} className="border p-4">
          <h2 className="text-lg font-bold">{month}</h2>
          <div className="grid grid-cols-7 gap-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="font-bold">{day}</div>
            ))}
            {Array.from({ length: getFirstDayOfMonth(month) }).map((_, i) => (
              <div key={i} className="border p-2"></div>
            ))}
            {Array.from({ length: getDaysInMonth(month) }, (_, i) => i + 1).map((day) => {
              const dateData = data.find(d => d.month === month && d.date === day);
              return (
                <div key={day} className="border p-2">
                  {dateData ? (
                    <a href={dateData.id} className="text-blue-500">{day}</a>
                  ) : (
                    <span>{day}</span>
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