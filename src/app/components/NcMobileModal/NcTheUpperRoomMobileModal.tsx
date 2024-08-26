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
            The Upper Room
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
          Visjonen vår er å se en utrustet generasjon som er rotfestet i
          Kristus. Derfor har vi et kurs som har som mål å forme deg til å ligne
          mer og mer på Kristus gjennom undervisning og bønn. Undervisningen
          holdes hver søndag over syv uker. Hver undervisning vil begynne med én
          time undervisning før man går i bønn sammen i 30 min. I tillegg, vil
          det fra mandag til fredag være morgenandakt. Her starter du dagen med
          Guds ord og bønn sammen med dine søsken i Kristus.
          <br />
          <br />
          Dette kurset har påmelding. Trykk nedenfor og fyll ut skjemaet dersom
          du ønsker å delta.
        </p>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe3xjbXh_j5iW6K-KPNR43eRfX_FxEvYj5WWflKolWsW7e-oQ/viewform">
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
