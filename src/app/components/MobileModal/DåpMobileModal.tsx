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
            Dåp
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
          Etter at du har tatt imot Jesus så forteller Guds ord at dåpen er det
          neste steget. Dåpen er en ytre handling på din personlige tro. I
          forkant av dåpen vil du få én time undervisning om hva dåp er og
          hvorfor man døpes.
          <br />
          <br />
          Dersom du ønsker å la deg døpe kan du melde deg på nedenfor, så vil vi
          ta kontakt med deg.
        </p>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdWBP7yJddqmqgW5XaienN-GCqKIykNCsh3NPig-9UnIFVbmw/viewform">
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
