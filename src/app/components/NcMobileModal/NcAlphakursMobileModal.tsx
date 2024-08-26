import Link from "next/link";
import { useState } from "react";

export default function TestModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Button to open the modal */}
      <button
        className="Mobile-modal-view hidden btn btn-wide rounded-xl bg-[#222222] text-slate-50 border-none hover:bg-[#1a1a1a]"
        onClick={openModal}
      >
        Les mer
      </button>

      {/* Modal */}
      <div
        className={`fixed left-1/2 transform -translate-x-1/2 w-full bottom-0 z-50 bg-[#1a1a1a] rounded-t-[25px] ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <nav className="flex justify-between items-center p-[2em]">
          <h1 className="primaryFontRegular uppercase text-slate-50 text-[20px]">
            Alphakurs
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8 text-slate-50 cursor-pointer bg-[#111] rounded-full p-2"
            onClick={closeModal}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </nav>
        <p className="primaryFontRegular font-light px-[2em] text-slate-50">
          Alphakurs er en introduksjon til den kristne tro. Kurset er for deg
          som er nyfrelst, men også for deg som ønsker å vite mer om troen. Her
          går vi gjennom grunnleggende temaer som er fundamentet i vår tro.
          Blant disse er syndefallet, frelse, omvendelse og dåp. Undervisningen
          holdes hver søndag over syv uker. Hver kursdag begynner med én time
          undervisning før du får muligheten til å stille spørsmål og diskutere
          temaet som har vært undervist.
          <br />
          <br />
          Dette kurset har påmelding. Trykk nedenfor og fyll ut skjemaet dersom
          du ønsker å delta.
        </p>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSetchxXf0oHHc_m84O_NxPaIWyn6Gk6c0M4CcOOcuau7EaJRg/viewform">
          <div className="p-[2em]">
            <button className="btn w-full bg-[#101010] text-slate-50 border-none hover:bg-[#131313]">
              Påmelding
            </button>
          </div>
        </Link>
      </div>
    </>
  );
}
