import Link from "next/link";
import { useState, useEffect } from "react";

export default function ConnectModal() {
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
              Connect
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
          Connect er småfellesskapsarbeidet vi har i fellesskapet. På lørdager
            møtes vi i storfellesskapet, mens i Connect møtes vi i mindre
            grupper der vi kan vokse sammen i troen. Dette er en arena hvor du
            blir bedre kjent med Jesus ved å bygge relasjoner med dine søsken i
            Kristus. Connect-gruppene møtes annenhver uke og har ulike
            aktiviteter for å bygge troen og relasjoner. Vi ber, leser Bibelen,
            spiser sammen og deler liv.
            <br />
            <br />
            Ønsker du å være med i et småfellesskap? Klikk nedenfor for å bli
            med.
          </p>
          <Link href="/customForm?formId=connectYouth">
            <div className="p-[2em]">
              <button className="btn w-full bg-[#101010] text-slate-50 border-none hover:bg-[#131313]">
                Påmelding
              </button>
            </div>
          </Link>
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
                Connect
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
            <p className="primaryFontRegular text-slate-50 py-5 text-[17px] modal-p">
            Connect er småfellesskapsarbeidet vi har i fellesskapet. På lørdager
            møtes vi i storfellesskapet, mens i Connect møtes vi i mindre
            grupper der vi kan vokse sammen i troen. Dette er en arena hvor du
            blir bedre kjent med Jesus ved å bygge relasjoner med dine søsken i
            Kristus. Connect-gruppene møtes annenhver uke og har ulike
            aktiviteter for å bygge troen og relasjoner. Vi ber, leser Bibelen,
            spiser sammen og deler liv.
            <br />
            <br />
            Ønsker du å være med i et småfellesskap? Klikk nedenfor for å bli
            med.
            </p>
            <div className="py-5">
              <Link
                target="_blank"
                href="/customForm?formId=connectYouth"
              >
              <button className="button-modal btn btn-wide  rounded-xl bg-[#ffffff] text-[#111] border-none hover:bg-[#d3d2d2]">
                Påmelding
              </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
