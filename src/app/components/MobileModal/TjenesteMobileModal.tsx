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
          <h1 className="Onest-Regular uppercase text-slate-50 text-[20px]">
            Tjenestekurs
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
        <p className="Onest-Regular font-light px-[2em] text-slate-50">
          Dette er et kurs for deg som ønsker å tjenestegjøre i fellesskapet. På
          tjenestekurs vil du få lære om hva tjeneste er, hvorfor vi
          tjenestegjør og hvordan Gud sier vi skal tjenestegjøre. Deretter kan
          du bli med i en av de mange tjenestene vi har som fellesskap. Kurset
          går over fire tirsdager fra kl 18:00 - 19:30.
          <br />
          <br />
          Dette kurset har påmelding. Klikk nedenfor og fyll ut skjemaet dersom
          du ønsker å delta.
        </p>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSerL_wsSXphDQfwW-WZY9al7T8Ply6C9yRb-DSES4a2Ds0dfA/viewform">
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
