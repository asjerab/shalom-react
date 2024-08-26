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
            Evangelisering
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
        <p className="primaryFontRegular font-light px-[2em] pb-[4em] text-slate-50">
          Vi tror på at evangelisering fører til starten på en personlig og
          transformerende reise med Jesus. Derfor har vi et eget team som går ut
          annenhver uke for å dele Jesus med verden. Den ubetingede kjærligheten
          vi har mottatt i Kristus ønsker vi å gi videre til de som ikke har
          fått oppleve den. Vi ønsker at de skal få kjenne sannheten om Jesus
          Kristus og få et personlig møte med Ham. Evangeliseringsteamet møtes
          annenhver fredag (oddetallsuker) og begynner med å be sammen før de
          går ut og evangeliserer. Om du ønsker å delta en dag for å se mer av
          hva det innebærer, så kan du møte opp i kirken kl. 18:00.
        </p>
      </div>
    </>
  );
}
