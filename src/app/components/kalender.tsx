"use client";
import { useState, useEffect } from "react";

interface DateType {
  month: string;
  year: string;
}

export default function Kalender() {
  const [currentDate, setCurrentDate] = useState<DateType>({
    month: "",
    year: "",
  });

  useEffect(() => {
    const date = new Date();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear().toString(); // Ensure year is a string

    setCurrentDate({ month, year });
  }, []);

  return (
    <>
      <main className="flex justify-center items-center p-[25px]">
        <div className="w-full max-w-[1325px] py-[100px] pb-[200px]">
          <nav className="nav-kalender flex justify-between items-end">
            <div>
              <h1 className="primaryFontBold uppercase text-slate-50" style={{fontSize: "clamp(35px, 10vw, 100px)"}}>
                Kalender
              </h1>
              <p className="primaryFontRegular font-[300] w-full max-w-[682px] text-slate-50" style={{fontSize: "clamp(15px, 2.5vw, 25px)"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                maximus, orci eget finibus varius, eros turpis laoreet mauris,
                quis blandit risus dui a erat.
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
            <button className="btn btn-responsive rounded-full bg-[#191919] border-none text-slate-50 hover:bg-slate-50 hover:text-[#191919]">Juni</button>
            <button className="btn btn-responsive rounded-full bg-[#191919] border-none text-slate-50 hover:bg-slate-50 hover:text-[#191919]">Juli</button>
            <button className="btn btn-responsive rounded-full bg-[#191919] border-none text-slate-50 hover:bg-slate-50 hover:text-[#191919]">August</button>
            <button className="btn btn-responsive rounded-full bg-[#191919] border-none text-slate-50 hover:bg-slate-50 hover:text-[#191919]">September</button>
            <button className="btn btn-responsive rounded-full bg-[#191919] border-none text-slate-50 hover:bg-slate-50 hover:text-[#191919]">Oktober</button>
            <button className="btn btn-responsive rounded-full bg-[#191919] border-none text-slate-50 hover:bg-slate-50 hover:text-[#191919]">November</button>
            <button className="btn btn-responsive rounded-full bg-[#191919] border-none text-slate-50 hover:bg-slate-50 hover:text-[#191919]">Desember</button>
          </div >

          <div>
            <div className="flex justify-between items-center border-y-[1px] border-slate-50">
              <h1>Gudstjeneste</h1>
              <div className="flex">
                <p className="">lør</p>
                <p>juni 01</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
