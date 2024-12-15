import Image from "next/image";
import Link from "next/link";
import newYearsBilde from "/public/heroBgImages/newYearsImage.png";

export default function NewYearsPoster() {
  return (
    <main className="flex justify-center items-center pt-[150px] p-[30px]">
      <div
        className="relative"
        style={{ borderRadius: "10px", overflow: "hidden" }}
      >
        <Image src={newYearsBilde.src} width={1075} height={600} alt="bilde" />
        <Link href="/event/arrangement/Nyttaarsaften">
          <button className="absolute flex items-center gap-2 bottom-5 right-5 px-6 py-2 md:px-8 md:py-3 lg:px-10 lg:py-3 rounded-[8px] text-slate-50 bg-black text-sm md:text-base active:scale-95 duration-150 ease-in-out">
            Mer info
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </button>
        </Link>
      </div>
    </main>
  );
}
