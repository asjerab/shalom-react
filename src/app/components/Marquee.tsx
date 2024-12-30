import Link from "next/link";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";

const MarqueeSlider = () => {
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const newYear = new Date(2025, 0, 1, 0, 0, 0); // Jan 1, 00:00:00
      const timeDifference = newYear.getTime() - now.getTime();

      if (timeDifference <= 0) {
        setTimeRemaining("🎉 Godt nytt år! 🎉");
        return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDifference / 1000) % 60);

      setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    const intervalId = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Link href="/event/arrangement/Nyttaarsaften">
        <div className="Marquee fixed top-0 bg-[#204ac0] w-full  z-50">
          <Marquee className="p-2 flex">
            <h1 className="primaryFontBold px-10 text-slate-50 uppercase">
              2024 ender om{" "}
            </h1>
            <span className="Kelsi-fill text-slate-50">x</span>
            <h1 className="primaryFontBold px-10 text-slate-50 uppercase">
              {timeRemaining}
            </h1>
            <span className="Kelsi-fill text-slate-50">x</span>
            <h1 className="primaryFontBold px-10 text-slate-50 uppercase">
              2024 ender om{" "}
            </h1>
            <span className="Kelsi-fill text-slate-50">x</span>
            <h1 className="primaryFontBold px-10 text-slate-50 uppercase">
              {timeRemaining}
            </h1>
            <span className="Kelsi-fill text-slate-50">x</span>
            <h1 className="primaryFontBold px-10 text-slate-50 uppercase">
              2024 ender om{" "}
            </h1>
            <span className="Kelsi-fill text-slate-50">x</span>
            <h1 className="primaryFontBold px-10 text-slate-50 uppercase">
              {timeRemaining}
            </h1>
            <span className="Kelsi-fill text-slate-50">x</span>
            <h1 className="primaryFontBold px-10 text-slate-50 uppercase">
              2024 ender om{" "}
            </h1>
            <span className="Kelsi-fill text-slate-50">x</span>
          </Marquee>
        </div>
      </Link>
    </>
  );
};

export default MarqueeSlider;
