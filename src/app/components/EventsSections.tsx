import Image from "next/image";
import { useState } from "react";
import YouthLeriImg from "../../../public/EventSectionImages/YouthLeirImg.png";
import NewCreationLeirImg from "../../../public/EventSectionImages/NewCreationLeirImg.png";
import PaasekonfImg from "../../../public/EventSectionImages/PaaskekonfImg.png";

const images = [
  {
    src: PaasekonfImg.src,
    link: "/event/arrangement/Paaskekonf",
    alt: "Påske konferanse Img",
  },
  {
    src: YouthLeriImg.src,
    link: "/event/arrangement/ShalomYouthLeir",
    alt: "Shalom Youth Leir bilde",
  },
];

export default function EventsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (event: any) => {
    event.preventDefault();
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = (event: any) => {
    event.preventDefault();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <main className="flex justify-center mx-auto w-full max-w-[1050px] py-[100px] flex-col p-[35px]">
      <div className="w-full flex flex-col">
        <a href={images[currentIndex].link}>
          <Image
            className="w-full h-auto rounded-[4px] cursor-pointer hover:scale-[1.010] transition-transform duration-150"
            src={images[currentIndex].src}
            width={1505}
            height={0}
            alt={images[currentIndex].alt}
            sizes="100vw"
            style={{
              maxWidth: "100%",
              objectFit: "contain",
            }}
            priority
          />
        </a>
      </div>
      <div className="flex justify-between items-center gap-5 mt-10 paginationFolder">
        <button
          onClick={handlePrev}
          style={{ fontSize: "clamp(12px, 3.5vw, 22px)" }}
          className="flex items-center gap-2 text-slate-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          Prev
        </button>
        <h1
          className="primaryFontBold text-slate-50 text-[20px]"
          style={{ fontSize: "clamp(12px, 3.5vw, 20px)" }}
        >
          {currentIndex + 1}/{images.length}
        </h1>
        <button
          onClick={handleNext}
          style={{ fontSize: "clamp(12px, 3.5vw, 22px)" }}
          className="flex items-center gap-2 text-slate-50"
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </main>
  );
}
