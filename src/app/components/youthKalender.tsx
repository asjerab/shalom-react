// "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";

// interface DateType {
//   month: string;
//   year: string;
// }

// interface Event {
//   month: string;
//   title: string;
//   day: string;
//   date: string;
//   id?: string;
// }

// export default function Kalender() {
//   const [currentDate, setCurrentDate] = useState<DateType>({
//     month: "",
//     year: "",
//   });

//   const [visibleMonth, setVisibleMonth] = useState<string>("");
//   const [visibleCount, setVisibleCount] = useState<number>(5);
//   const [showMore, setShowMore] = useState<boolean>(true);

//   useEffect(() => {
//     const date = new Date();
//     const month = date.toLocaleString("nb-NO", { month: "long" });
//     const year = date.getFullYear().toString();

//     const formattedMonth =
//       month.charAt(0).toUpperCase() + month.slice(1).toLowerCase(); // Ensure first letter is capitalized

//     setCurrentDate({ month: formattedMonth, year });
//     setVisibleMonth(formattedMonth); // Ensure month names are consistently capitalized
//   }, []);

//   const handleMonthClick = (month: string) => {
//     const year = new Date().getFullYear().toString();
//     setVisibleMonth(month);
//     setVisibleCount(5);
//     setShowMore(true);
//     setCurrentDate({ month, year });
//   };

//   const handleToggleClick = () => {
//     if (showMore) {
//       if (visibleCount + 5 >= filteredEvents.length) {
//         setVisibleCount(filteredEvents.length);
//         setShowMore(false);
//       } else {
//         setVisibleCount((prevCount) => prevCount + 5);
//       }
//     } else {
//       setVisibleCount(5);
//       setShowMore(true);
//     }
//   };

//   const events: Event[] = [
//     // JUNI
//     { month: "Juni", id: "/event/kalenderYouth/Gudstjeneste", title: "Gudstjeneste", day: "lør", date: "01" },
//     { month: "Juni", id: "/event/kalenderYouth/Connect", title: "Connect", day: "ons", date: "05" },
//     { month: "Juni", id: "/event/kalenderYouth/Evangelisering", title: "Evangelisering", day: "fre", date: "07" },
//     { month: "Juni", title: "5 års markering", day: "lør", date: "08" },
//     { month: "Juni", id: "/event/kalenderYouth/AlphakursTheUpperRoom", title: "Alphakurs & The Upper Room", day: "søn", date: "09" },
//     { month: "Juni", id: "/event/kalenderYouth/Bibelstudie", title: "Bibelstudie", day: "ons", date: "12" },
//     { month: "Juni", id: "/event/kalenderYouth/Bønnemøte", title: "Bønn", day: "tor", date: "13" },
//     { month: "Juni", id: "/event/kalenderYouth/Gudstjeneste", title: "Gudstjeneste", day: "lør", date: "15" },
//     { month: "Juni", id: "/event/kalenderYouth/Gudstjeneste", title: "Gudstjeneste", day: "lør", date: "22" },
//     { month: "Juni", id: "/event/kalenderYouth/Gudstjeneste", title: "Gudstjeneste", day: "søn", date: "30" },
//     /////////////////////////////
//     // AUGUST
//     { month: "August", title: "Shalom Youth Leir", day: "tor", date: "01" },
//     { month: "August", title: "Shalom Youth Leir", day: "fre", date: "02" },
//     { month: "August", title: "Shalom Youth Leir", day: "lør", date: "03" },
//     { month: "August", title: "Shalom Youth Leir", day: "søn", date: "04" },
//     { month: "August", title: "Bønn Og Faste", day: "Tor", date: "15" },
//     { month: "August", title: "Bønn Og Faste", day: "Tor", date: "16" },
//     { month: "August", title: "Bønn Og Faste", day: "Tor", date: "17" },
//     { month: "August", id: "/event/kalenderYouth/TjenesteKickOff", title: "Tjeneste Kick Off", day: "Tor", date: "22" },
//     { month: "August", id: "/event/kalenderYouth/Gudstjeneste", title: "Gudstjeneste", day: "Tor", date: "24" },
//     { month: "August", id: "/event/kalenderYouth/Gudstjeneste", title: "Gudstjeneste", day: "Tor", date: "31" },
//     /////////////////////////////
//     // September
//     { month: "September", id: "/event/kalenderYouth/Bibelstudie", title: "Bibelstudie", day: "ons", date: "04" },
//     { month: "September", id: "/event/kalenderYouth/Bonnemote", title: "Bønnemøte", day: "tor", date: "05" },
//     { month: "September", title: "Day & Night", day: "lør", date: "07" },
//     { month: "September", id: "/event/kalenderYouth/Connect", title: "Connect", day: "Ons", date: "11" },
//     { month: "September", id: "/event/kalenderYouth/Evangelisering", title: "Evangelisering", day: "fre", date: "13" },
//     { month: "September", id: "/event/kalenderYouth/Gudstjeneste", title: "Gudstjeneste", day: "lør", date: "14" },
//     { month: "September", id: "/event/kalenderYouth/Bibelstudie", title: "Bibelstudie", day: "ons", date: "18" },
//     { month: "September", id: "/event/kalenderYouth/Bonnemote", title: "Bønnemøte", day: "tor", date: "19" },
//     { month: "September", id: "/event/kalenderYouth/Gudstjeneste", title: "Gudstjeneste", day: "lør", date: "21" },
//     { month: "September", id: "/event/kalenderYouth/Connect", title: "Connect", day: "ons", date: "25" },
//     { month: "September", title: "Høstkonferanse", day: "fre", date: "27" },
//     { month: "September", title: "Høstkonferanse", day: "lør", date: "28" },
//     { month: "September", title: "Høstkonferanse", day: "søn", date: "29" },
//     /////////////////////////////
//     // Oktober
//     { month: "Oktober", id: "/event/kalenderYouth/Bibelstudie", title: "Bibelstudie", day: "ons", date: "02" },
//     { month: "Oktober", id: "/event/kalenderYouth/Bonnemote", title: "Bønnemøte", day: "tor", date: "03" },
//     { month: "Oktober", id: "/event/kalenderYouth/Gudstjeneste", title: "Gudstjeneste", day: "lør", date: "05" },
//     { month: "Oktober", id: "/event/kalenderYouth/Connect", title: "Connect", day: "ons", date: "09" },
//     { month: "Oktober", id: "/event/kalenderYouth/Evangelisering", title: "Evangelisering", day: "fre", date: "11" },
//     { month: "Oktober", id: "/event/kalenderYouth/Gudstjeneste", title: "Gudstjeneste", day: "lør", date: "12" },
//     { month: "Oktober", id: "/event/kalenderYouth/Bibelstudie", title: "Bibelstudie", day: "ons", date: "16" },
//     { month: "Oktober", id: "/event/kalenderYouth/Bonnemote", title: "Bønnemøte", day: "tor", date: "17" },
//     { month: "Oktober", id: "/event/kalenderYouth/Gudstjeneste", title: "Gudstjeneste", day: "lør", date: "19" },
//     { month: "Oktober", id: "/event/kalenderYouth/Connect", title: "Connect", day: "ons", date: "23" },
//     { month: "Oktober", id: "/event/kalenderYouth/Evangelisering", title: "Evangelisering", day: "fre", date: "25" },
//     { month: "Oktober", id: "/event/kalenderYouth/Gudstjeneste", title: "Gudstjeneste", day: "lør", date: "26" },
//     { month: "Oktober", id: "/event/kalenderYouth/Bibelstudie", title: "Bibelstudie", day: "ons", date: "30" },
//     { month: "Oktober", id: "/event/kalenderYouth/Bonnemote", title: "Bønnemøte", day: "tor", date: "31" },
//     /////////////////////////////
//     // November
//     { month: "November", id: "/event/kalenderYouth/Gudstjeneste", title: "Gudstjeneste", day: "lør", date: "02" },
//     { month: "November", id: "/event/kalenderYouth/Connect", title: "Connect", day: "ons", date: "06" },
//     { month: "November", id: "/event/kalenderYouth/Evangelisering", title: "Evangelisering", day: "fre", date: "08" },
//     { month: "November", id: "/event/kalenderYouth/Gudstjeneste", title: "Gudstjeneste", day: "lør", date: "09" },
//     { month: "November", id: "/event/kalenderYouth/Bibelstudie", title: "Bibelstudie", day: "ons", date: "13" },
//     { month: "November", id: "/event/kalenderYouth/Bønnemøte", title: "Bønnemøte", day: "tor", date: "14" },
//     { month: "November", id: "/event/kalenderYouth/Gudstjeneste", title: "Gudstjeneste", day: "lør", date: "16" },
//     { month: "November", id: "/event/kalenderYouth/Connect", title: "Connect", day: "ons", date: "20" },
//     { month: "November", id: "/event/kalenderYouth/Evangelisering", title: "Evangelisering", day: "fre", date: "22" },
//     { month: "November", id: "/event/kalenderYouth/Gudstjeneste", title: "Gudstjeneste", day: "lør", date: "23" },
//     { month: "November", id: "/event/kalenderYouth/Bibelstudie", title: "Bibelstudie", day: "ons", date: "27" },
//     { month: "November", id: "/event/kalenderYouth/Bønnemøte", title: "Bønnemøte", day: "tor", date: "28" },
//     { month: "November", id: "/event/kalenderYouth/Gudstjeneste", title: "Gudstjeneste", day: "lør", date: "30" },
//         /////////////////////////////
//     // November
//     { month: "Desember", id: "/event/kalenderYouth/Connect", title: "Connect", day: "ons", date: "04" },
//     { month: "Desember", id: "/event/kalenderYouth/Evangelisering", title: "Evangelisering", day: "fre", date: "06" },
//     { month: "Desember", id: "/event/kalenderYouth/Gudstjeneste", title: "Gudstjeneste", day: "lør", date: "07" },
//     { month: "Desember", id: "/event/kalenderYouth/Connect", title: "Connect", day: "tor", date: "12" },
//     { month: "Desember", id: "/event/kalenderYouth/Gudstjeneste", title: "Gudstjeneste", day: "lør", date: "14" },
//     { month: "Desember", id: "/event/kalenderYouth/Evangelisering", title: "Evangelisering", day: "fre", date: "20" },
//     { month: "Desember", id: "/event/kalenderYouth/Gudstjeneste", title: "Gudstjeneste", day: "lør", date: "21" },
//     // Add more events as needed
//   ];

//   const filteredEvents = events.filter((event) => event.month === visibleMonth);

//   return (
//     <main className="flex justify-center items-center p-[25px]">
//       <div className="w-full max-w-[1325px] py-[100px]">
//         <nav className="nav-kalender flex justify-between items-end">
//           <div>
//             <h1
//               className="primaryFontRegular text-slate-50 font-[600] my-5 leading-[84px] flex items-center gap-5"
//               style={{ fontSize: "clamp(36px, 12vw, 80px)" }}
//             >
//               Kalender
//               <span className="Kelsi-fill text-slate-50">x</span>
//             </h1>
//             <p
//               className="primaryFontRegular font-[300] w-full max-w-[682px] text-slate-50"
//               style={{ fontSize: "clamp(15px, 2.5vw, 25px)" }}
//             >
//               Dette er shalom youth sin helt egne kalenderen, her kan du se hva
//               som skjer i løpet av måneden du har valgt. I tillegg ser du
//               datoene for de ulike arrangementene samt dagen det skal være på.
//             </p>
//           </div>
//           <div>
//             <p className="primaryFontRegular flex gap-2 font-[500] text-[25px] text-slate-50">
//               {currentDate.month} <span className="Kelsi-fill">x</span>{" "}
//               <span className="primaryFontBold text-[700]">
//                 {currentDate.year}
//               </span>
//             </p>
//           </div>
//         </nav>
//         <div className="flex gap-3 py-10 flex-wrap">
//           {[
//             "Juni",
//             "Juli",
//             "August",
//             "September",
//             "Oktober",
//             "November",
//             "Desember",
//           ].map((month) => (
//             <button
//               key={month}
//               onClick={() => handleMonthClick(month)}
//               className={`primaryFontRegular font-[500] btn btn-responsive rounded-full ${
//                 visibleMonth === month
//                   ? "bg-slate-50 text-[#191919]"
//                   : "bg-[#191919] text-slate-50"
//               } border-none hover:bg-slate-50 hover:text-[#191919]`}
//               style={{ fontSize: "clamp(10px, 3vw, 20px)" }}
//             >
//               {month}
//             </button>
//           ))}
//         </div>

//         <div className="flex justify-between pb-[15px]">
//           <div>
//             <h1 className="primaryFontHeadings text-[#c5c5c5]">Event</h1>
//           </div>
//           <div className="dag-dato-kalender-wrapper flex gap-10">
//             <p className="primaryFontHeadings text-[#c5c5c5]">Dag</p>
//             <p className="primaryFontHeadings text-[#c5c5c5]">Dato</p>
//           </div>
//         </div>

//         <div>
//           {filteredEvents.length > 0 ? (
//             filteredEvents.slice(0, visibleCount).map((event, index) => (
//               <Link key={index} href={event.id ? event.id : "#"}>
//                 <div className="flex justify-between items-center border-t-[1px] border-[#ffffff88] py-5 cursor-pointer hover:px-[5px] hover:scale-[1] duration-75">
//                   <h1
//                     className="KalenderHomeTitle primaryFontRegular font-[500] text-slate-50 flex flex-wrap"
//                     style={{ fontSize: "clamp(15px, 5vw, 25px)" }}
//                   >
//                     {event.title}
//                   </h1>
//                   <div className="flex items-center">
//                     <p
//                       className="primaryFontRegular font-[500] uppercase bg-slate-50 text-[#0D0D0D] py-[5px] px-[15px] rounded-full"
//                       style={{ fontSize: "clamp(10px, 3.5vw, 20px)" }}
//                     >
//                       {event.day}
//                     </p>
//                     <p
//                       className="primaryFontRegular font-[500] uppercase bg-slate-50 text-[#0D0D0D] text-[20px] py-[5px] px-[15px] rounded-full"
//                       style={{ fontSize: "clamp(10px, 3.5vw, 20px)" }}
//                     >
//                       {event.date}
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             ))
//           ) : (
//             <p className="primaryFontRegular text-[20px] font-[500] text-slate-50">
//               Ingen arrangementer for denne måneden.
//             </p>
//           )}

//           {filteredEvents.length > 5 && (
//             <div className="flex justify-center pt-5">
//               <button
//                 onClick={handleToggleClick}
//                 className="btn btn-responsive rounded-full primaryFontRegular font-[500] uppercase bg-slate-50 text-[#0D0D0D] py-[5px] px-[15px]"
//               >
//                 {showMore ? "Se mer" : "Vis mindre"}
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </main>
//   );
// }

export default function youthKalender() {
  return (
    <main className="flex justify-center items-center  py-[100px] px-[35px]">
      <div className="w-full max-w-[1325px]">
        <div>
          <h1
            className="light dark primaryFontRegular text-slate-50 font-[600] my-5 leading-[84px] flex items-center gap-5"
            style={{ fontSize: "clamp(36px, 12vw, 80px)" }}
          >
            Kalender
            <span className="Kelsi-fill text-slate-50">x</span>
          </h1>{" "}
        </div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
}
