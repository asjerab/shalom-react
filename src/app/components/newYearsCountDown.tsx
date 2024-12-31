import { useEffect, useState } from "react";

const NewYearsCountdown = () => {
  const [timeRemaining, setTimeRemaining] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const newYear = new Date(2025, 0 , 1, 0, 0, 0); 
      const timeDifference = newYear.getTime() - now.getTime();

      if (timeDifference <= 0) {
        setTimeRemaining("🎉 Godt nytt år! 🎉");
        setIsVisible(false);
        return;
      }

      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDifference / 1000) % 60);

      setTimeRemaining(`${hours}h ${minutes}m ${seconds}s`);
    };

    const intervalId = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <main className="flex justify-center items-center pt-[150px] p-[30px] h-screen">
        <div className="flex flex-col text-center primaryFontRegular text-slate-50" style={{fontSize: "clamp(20px, 10vw, 125px)"}}>
            {isVisible && <h1 className="leading-15 primaryFontRegular">2024 slutter om</h1>}
            <h1 className="bg-[#1b1b1b] rounded-full">{timeRemaining}</h1>
            </div>
      </main>
    </>
  );
};

 export default NewYearsCountdown;
