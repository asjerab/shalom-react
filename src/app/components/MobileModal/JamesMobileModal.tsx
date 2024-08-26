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
            James 1:27 Ministry
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
          Love In Action - kjærlighet i handling. Rundt om i hele verden er det
          barn og unge som må avslutte sin skolegang på grunn av fattigdom og
          mangel på midler. Dette innebærer blant annet at foreldre ikke har
          mulighet til å dekke skolegang for barna sine, og dette setter en
          stopper for barnas fremtid. Vi ønsker å være en løsning til dette
          problemet ved å investere i deres framtid. Derfor har vi et arbeid,
          kalt James 1:27 Ministry, som driver med nettopp dette.
          <br />
          <br />
          Arbeidet bistår med kostnader knyttet til skolegang slik at barn og
          unge kan få muligheten til å få en utdanning.
        </p>
        <div className="p-[2em]">
          <button className="btn w-full bg-[#101010] text-slate-50 border-none hover:bg-[#131313]">
            Påmelding
          </button>
        </div>
      </div>
    </>
  );
}
