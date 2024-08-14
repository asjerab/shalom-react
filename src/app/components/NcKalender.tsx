"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

interface DateType {
  month: string;
  year: string;
}

interface Event {
  month: string;
  title: string;
  day: string;
  date: string;
  id?: string;  // Make sure to include id in the Event interface
}

export default function Kalender() {
  const [currentDate, setCurrentDate] = useState<DateType>({
    month: "",
    year: "",
  });

  const [visibleMonth, setVisibleMonth] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(5);
  const [showMore, setShowMore] = useState<boolean>(true);

  useEffect(() => {
    const date = new Date();
    const month = date.toLocaleString("nb-NO", { month: "long" });
    const year = date.getFullYear().toString();

    setCurrentDate({ month, year });
    setVisibleMonth(month.charAt(0).toUpperCase() + month.slice(1)); // Capitalize the first letter to match event month format
  }, []);

  const handleMonthClick = (month: string) => {
    const year = new Date().getFullYear().toString();
    setVisibleMonth(month);
    setVisibleCount(5); // Reset visible count when switching months
    setShowMore(true);
    setCurrentDate({ month, year });
  };

  const handleToggleClick = () => {
    if (showMore) {
      if (visibleCount + 5 >= filteredEvents.length) {
        setVisibleCount(filteredEvents.length);
        setShowMore(false);
      } else {
        setVisibleCount((prevCount) => prevCount + 5);
      }
    } else {
      setVisibleCount(5);
      setShowMore(true);
    }
  };

  const events: Event[] = [
    // JUNI
    { month: "Juni", id: "/event/KalenderNewCreation/AlphakursTheUpperRoom", title: "Alphakurs & Dypere", day: "lør", date: "juni 01" },
    { month: "Juni", id: "/event/KalenderNewCreation/Gudstjeneste", title: "Gudstjeneste", day: "søn", date: "juni 02" },
    { month: "Juni", id: "/event/KalenderNewCreation/Connect", title: "Connect", day: "tor", date: "juni 06" },
    { month: "Juni", id: "/event/KalenderNewCreation/Evangelisering", title: "Evangelisering", day: "fre", date: "juni 07" },
    {
      month: "Juni",
      id: "/event/KalenderNewCreation/AlphakursTheUpperRoom",
      title: "5 års markering youth",
      day: "lør",
      date: "juni 08",
    },
    { month: "Juni", id: "/event/KalenderNewCreation/AlphakursTheUpperRoom", title: "Alphakurs & Dypere", day: "søn", date: "juni 09" },
    { month: "Juni", id: "/event/KalenderNewCreation/Bibelstudie", title: "Bibelstudie", day: "ons", date: "juni 12" },
    { month: "Juni", id: "/event/KalenderNewCreation/Bønnemøte", title: "Bønn", day: "tor", date: "juni 13" },
    { month: "Juni", id: "/event/KalenderNewCreation/AlphakursTheUpperRoom", title: "Alphakurs & Dypere", day: "lør", date: "juni 15" },
    { month: "Juni", id: "/event/KalenderNewCreation/Gudstjeneste", title: "Gudstjeneste", day: "søn", date: "juni 23" },
    { month: "Juni", id: "/event/KalenderNewCreation/Gudstjeneste", title: "Gudstjeneste", day: "søn", date: "juni 30" },
    /////////////////////////////
    // AUGUST
    {
      month: "August",
      id: "/event/KalenderNewCreation/AlphakursTheUpperRoom",
      title: "Shalom Youth Leir",
      day: "Man",
      date: "juni 05",
    },
    {
      month: "August",
      id: "/event/KalenderNewCreation/AlphakursTheUpperRoom",
      title: "Shalom Youth Leir",
      day: "Tir",
      date: "juni 06",
    },
    {
      month: "August",
      id: "/event/KalenderNewCreation/AlphakursTheUpperRoom",
      title: "Shalom Youth Leir",
      day: "Ons",
      date: "juni 07",
    },
    {
      month: "August",
      id: "/event/KalenderNewCreation/AlphakursTheUpperRoom",
      title: "Shalom Youth Leir",
      day: "Tor",
      date: "juni 08",
    },
    /////////////////////////////
    // Add more events as needed
  ];

  const filteredEvents = events.filter((event) => event.month === visibleMonth);

  return (
    <>
      <main className="flex justify-center items-center p-[25px]">
        <div className="w-full max-w-[1325px] py-[100px]">
          <nav className="nav-kalender flex justify-between items-end">
            <div>
              <h1
                className="primaryFontRegular text-slate-50 font-[600] my-5 leading-[84px] flex items-center gap-5"
                style={{ fontSize: "clamp(36px, 12vw, 80px)" }}
              >
                Kalender
                <span className="Kelsi-fill text-slate-50">x</span>
              </h1>
              <p
                className="primaryFontRegular font-[300] w-full max-w-[682px] text-slate-50"
                style={{ fontSize: "clamp(15px, 2.5vw, 25px)" }}
              >
                Dette er shalom youth sin helt egne kalenderen, her kan du se
                hva som skjer i løpet av måneden du har valgt. I tillegg ser du
                datoene for de ulike arrangementene samt dagen det skal være på.
              </p>
            </div>
            <div>
              <p className="primaryFontRegular flex gap-2 font-[500] text-[25px] text-slate-50">
                {currentDate.month} <span className="Kelsi-fill">x</span>{" "}
                <span className="primaryFontBold text-[700]">
                  {currentDate.year}
                </span>
              </p>
            </div>
          </nav>
          <div className="flex gap-3 py-10 flex-wrap">
            {[
              "Juni",
              "Juli",
              "August",
              "September",
              "Oktober",
              "November",
              "Desember",
            ].map((month) => (
              <button
                key={month}
                onClick={() => handleMonthClick(month)}
                className={`primaryFontRegular font-[500] btn btn-responsive rounded-full ${
                  visibleMonth === month
                    ? "bg-slate-50 text-[#191919]"
                    : "bg-[#191919] text-slate-50"
                } border-none hover:bg-slate-50 hover:text-[#191919]`}
                style={{ fontSize: "clamp(10px, 3vw, 20px)" }}
              >
                {month}
              </button>
            ))}
          </div>

          <div className="flex justify-between pb-[15px]">
            <div>
              <h1 className="primaryFontHeadings text-[#c5c5c5]">Event</h1>
            </div>
            <div className="dag-dato-kalender-wrapper flex gap-10">
              <p className="primaryFontHeadings text-[#c5c5c5]">Dag</p>
              <p className="primaryFontHeadings text-[#c5c5c5]">Dato</p>
            </div>
          </div>

          <div>
            {filteredEvents.length > 0 ? (
              filteredEvents.slice(0, visibleCount).map((event, index) => (
                <Link key={index} href={event.id ? event.id : "#"}>
                <div
                  key={index}
                  className="flex justify-between items-center border-t-[1px] border-[#ffffff88] py-5 cursor-pointer"
                >
                  <h1
                    className="primaryFontRegular font-[500] text-slate-50"
                    style={{ fontSize: "clamp(15px, 5vw, 25px)" }}
                  >
                    {event.title}
                  </h1>
                  <div className="flex items-center">
                    <p
                      className="primaryFontRegular font-[500] uppercase bg-slate-50 text-[#0D0D0D] py-[5px] px-[15px] rounded-full"
                      style={{ fontSize: "clamp(10px, 3.5vw, 20px)" }}
                    >
                      {event.day}
                    </p>
                    <p
                      className="primaryFontRegular font-[500] uppercase bg-slate-50 text-[#0D0D0D] text-[20px] py-[5px] px-[15px] rounded-full"
                      style={{ fontSize: "clamp(10px, 3.5vw, 20px)" }}
                    >
                      {event.date}
                    </p>
                  </div>
                </div>
                </Link>
              ))
            ) : (
              <p className="primaryFontRegular text-[20px] font-[500] text-slate-50 text-center py-5">
                No events
              </p>
            )}

            {filteredEvents.length > 0 && (
              <div className="flex justify-center items-center m-10">
                <button
                  onClick={handleToggleClick}
                  className="btn btn-responsive rounded-full primaryFontRegular font-[500] uppercase bg-slate-50 text-[#0D0D0D] py-[5px] px-[15px]"
                >
                  {showMore ? "Se mer" : "Vis mindre"}
                </button>
              </div>
            )}

          </div>
        </div>
      </main>
    </>
  );
}
