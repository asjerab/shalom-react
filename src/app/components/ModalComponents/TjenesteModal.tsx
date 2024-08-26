import Link from "next/link";
import { useState } from "react";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <main>
      <button
        className="Modal-button-view btn btn-wide rounded-xl bg-[#222222] text-slate-50 border-none hover:bg-[#1a1a1a]"
        onClick={openModal}
      >
        Les mer
      </button>
      {isOpen && (
        <div className="modal-container modal-container fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] max-w-full m-[auto 0] z-50">
          <div className="modal-content modal-content bg-[#1a1a1a] rounded-[25px] p-[3em] m-[1em]">
            <nav className="py-5 flex justify-between items-center">
              <h1 className="primaryFontRegular font-bold text-slate-50 text-3xl">
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </nav>
            <p className="primaryFontRegular text-slate-50 py-5 text-[17px] modal-p">
              Dette er et kurs for deg som ønsker å tjenestegjøre i
              fellesskapet. På tjenestekurs vil du få lære om hva tjeneste er,
              hvorfor vi tjenestegjør og hvordan Gud sier vi skal tjenestegjøre.
              Deretter kan du bli med i en av de mange tjenestene vi har som
              fellesskap. Kurset går over fire tirsdager fra kl 18:00 - 19:30.
              <br />
              <br />
              Dette kurset har påmelding. Klikk nedenfor og fyll ut skjemaet
              dersom du ønsker å delta.
            </p>
            <Link
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSerL_wsSXphDQfwW-WZY9al7T8Ply6C9yRb-DSES4a2Ds0dfA/viewform"
            >
              <button className="button-modal btn btn-wide rounded-xl bg-[#ffffff] text-[#111] border-none hover:bg-[#d3d2d2]">
                Påmelding
              </button>
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
