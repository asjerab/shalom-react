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
              <h1 className="Onest-Bold font-bold text-slate-50 text-3xl">
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </nav>
            <p className="text-slate-50 py-5 text-[17px] modal-p">
              Etter at du har tatt imot Jesus så forteller Guds ord at dåpen er
              det neste steget. Dåpen er en ytre handling på din personlige tro.
              I forkant av dåpen vil du få én time undervisning om hva dåp er og
              hvorfor man døpes.
              <br />
              <br />
              Dersom du ønsker å la deg døpe kan du melde deg på nedenfor, så
              vil vi ta kontakt med deg.
            </p>
            <Link
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdWBP7yJddqmqgW5XaienN-GCqKIykNCsh3NPig-9UnIFVbmw/viewform"
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
