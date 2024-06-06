"use client";
import React, { useState } from "react";

interface Content {
  title: string;
  description: string;
  buttonText: string;
}

const contentMapping: Record<string, Content> = {
  alphakurs: {
    title: "Alphakurs",
    description: `Alphakurs er en introduksjon til den kristne tro. Kurset er for
    deg som er nyfrelst, men også for deg som ønsker å vite mer om
    troen. Her går vi gjennom grunnleggende temaer som er
    fundamentet i vår tro. Blant disse er syndefallet, frelse,
    omvendelse og dåp. Undervisningen holdes hver lørdag over syv
    uker. Hver kursdag begynner med én time undervisning før du får
    muligheten til å stille spørsmål og diskutere temaet som har
    vært undervist. 
    <br />
    <br />
    Dette kurset har påmelding. Trykk nedenfor og
    fyll ut skjemaet dersom du ønsker å delta.`,
    buttonText: "Påmelding",
  },

  bibelstudie: {
    title: "Bibelstudie",
    description: `
    Å studere Bibelen er en måte å bli bedre kjent med Gud. Bibelstudie gir deg muligheten til å dykke dypere i Guds ord sammen med andre og styrke forståelsen din for tekstene. Sammen med dyktige undervisere, går man gjennom en bok i Bibelen over en periode og ser på historien, konteksten og hvordan vi kan anvende det i våre liv. I bibelstudie går vi inn i Ordet sammen, men vi lærer også hvordan vi skal lese Bibelen på egen hånd. Studiet holdes annenhver onsdag kl. 18:00.
    <br />
    <br />
    Dette kurset har påmelding. Klikk nedenfor og fyll ut skjemaet dersom du ønsker å delta.
    Påmelding`,
    buttonText: "Påmelding",
  },
  // Add more entries as needed
  // exampleID: {
  //   title: "Example Title",
  //   description: "Example description",
  //   buttonText: "Example Button"
  // }
};

export default function Playground() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentId, setCurrentId] = useState<string | null>(null);

  const openModal = (id: string) => {
    setCurrentId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentId(null);
  };

  const currentContent = currentId ? contentMapping[currentId] : null;

  return (
    <main className="w-full h-dvh">
      <button
        className="open-modal btn btn-neutral btn-wide"
        onClick={() => openModal("alphakurs")}
      >
        Open Alphakurs Modal
      </button>
      <button
        className="open-modal btn btn-neutral btn-wide"
        onClick={() => openModal("bibelstudie")}
      >
        Open Bibelstudie Modal
      </button>
      {/* Add more buttons for different IDs */}
      {/* <button className="open-modal btn btn-neutral btn-wide" onClick={() => openModal("exampleID")}>Open Example Modal</button> */}
      {isModalOpen && currentContent && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[840px] max-w-full mx-auto transition-opacity duration-600 delay-200 z-100">
          <div className="modal-content py-[1.5em] px-[1em] bg-[#fff] rounded-[1em]">
            <div className="flex justify-between items-center p-5">
              <h1 className="primaryBold text-[#111] text-[35px]">
                {currentContent.title}
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-[#111] cursor-pointer"
                onClick={closeModal}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div>
              <p
                className="primaryRegular text-[#111] p-5"
                dangerouslySetInnerHTML={{ __html: currentContent.description }}
              />
            </div>
            <button className="btn btn-neutral m-5">
              {currentContent.buttonText}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
