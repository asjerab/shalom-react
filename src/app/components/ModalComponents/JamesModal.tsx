import Link from "next/link";
import { useState, useEffect } from "react";

export default function JamesModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        className="btn  rounded-xl bg-[#222222] text-slate-50 border-none hover:bg-[#1a1a1a]"
        onClick={openModal}
      >
        Les mer
      </button>

      {/* Modal for mobile (less than 768px) */}
      {isMobile && (
        <div
          className={`fixed left-1/2 transform -translate-x-1/2 w-full bottom-0 z-50 bg-[#1a1a1a] rounded-t-[25px] ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <nav className="flex justify-between items-center p-[2em]">
            <h1 className="primaryFontRegular uppercase text-slate-50 text-[20px]">
              James Ministry
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
          <p className="primaryFontRegular font-light p-[2em] text-slate-50">
            Love In Action - kjærlighet i handling. Rundt om i hele verden er
            det barn og unge som må avslutte sin skolegang på grunn av fattigdom
            og mangel på midler. Dette innebærer blant annet at foreldre ikke
            har mulighet til å dekke skolegang for barna sine, og dette setter
            en stopper for barnas fremtid. Vi ønsker å være en løsning til dette
            problemet ved å investere i deres framtid. Derfor har vi et arbeid,
            kalt James 1:27 Ministry, som driver med nettopp dette.
            <br />
            <br />
            Arbeidet bistår med kostnader knyttet til skolegang slik at barn og
            unge kan få muligheten til å få en utdanning.
          </p>
        </div>
      )}

      {/* Modal for desktop (larger than 768px) */}
      {!isMobile && (
        <div
          className={`modal-container modal-container fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] max-w-full m-[auto 0] z-50 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="modal-content modal-content bg-[#1a1a1a] rounded-[25px] p-[3em] m-[1em]">
            <nav className="py-5 flex justify-between items-center">
              <h1 className="primaryFontRegular font-bold text-slate-50 text-3xl">
                James Ministry
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
              Love In Action - kjærlighet i handling. Rundt om i hele verden er
              det barn og unge som må avslutte sin skolegang på grunn av
              fattigdom og mangel på midler. Dette innebærer blant annet at
              foreldre ikke har mulighet til å dekke skolegang for barna sine,
              og dette setter en stopper for barnas fremtid. Vi ønsker å være en
              løsning til dette problemet ved å investere i deres framtid.
              Derfor har vi et arbeid, kalt James 1:27 Ministry, som driver med
              nettopp dette.
              <br />
              <br />
              Arbeidet bistår med kostnader knyttet til skolegang slik at barn
              og unge kan få muligheten til å få en utdanning.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
