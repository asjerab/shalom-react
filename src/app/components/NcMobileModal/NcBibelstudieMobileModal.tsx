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
            Bibelstudie
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
          Å studere Bibelen er en måte å bli bedre kjent med Gud. Bibelstudie
          gir deg muligheten til å dykke dypere i Guds ord sammen med andre og
          styrke forståelsen din for tekstene. Sammen med dyktige undervisere,
          går man gjennom en bok i Bibelen over en periode og ser på historien,
          konteksten og hvordan vi kan anvende det i våre liv. I bibelstudie går
          vi inn i Ordet sammen, men vi lærer også hvordan vi skal lese Bibelen
          på egen hånd. Studiet holdes annenhver onsdag kl. 18:00.
          <br />
          <br />
          Dette kurset har påmelding. Trykk nedenfor og fyll ut skjemaet dersom
          du ønsker å delta.
        </p>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeqfFJm6cBVCvVCQV8hIdk-gcRCsrmLJexgZJeiqZVg00mEqQ/viewform">
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
