// components/newUserModal.tsx
import React, { useState, useEffect } from "react";

interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ showModal, closeModal }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 200);

      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [showModal]);

  if (!showModal) return null;

  const mobileModal = (
    <div
      className={`fixed left-1/2 transform -translate-x-1/2 w-full bottom-0 z-50 bg-[#f1f1f1] rounded-t-[25px] ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <nav className="flex justify-between items-center p-[2em]">
        <h1 className="primaryFontRegular uppercase text-[#111111] text-[20px]">
          Heisan!
        </h1>
      </nav>
      <p className="primaryFontRegular font-light px-[2em] text-[#111111]">
        <strong>Velkommen til Shalom New Creation!</strong> Dette er vår offisielle
        side, hvor du kan bli bedre kjent med hvem vi er, hva vi gjør, hva vi
        tilbyr, og hvor du finner oss. Vi holder gudstjenester hver lørdag kl.
        18:30, og du er hjertelig velkommen til å delta. Må Guds nåde og
        velsignelse være over deg!{" "}
      </p>
      <div className="p-[2em]">
        <button
          onClick={closeModal}
          className="primaryFontRegular btn w-full bg-[#101010] text-[#ffffff] border-none hover:bg-[#131313]"
        >
          Velkommen Hjem!
        </button>
      </div>
    </div>
  );

  const desktopModal = (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-[#f1f1f1] rounded-[16px] p-10 shadow-lg w-full max-w-[750px] transition-all duration-300 ease-in-out ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <h2
          className="primaryFontRegular text-[#111111] font-bold mb-4"
          style={{ fontSize: "clamp(25px, 3vw, 50px)" }}
        >
          Heisan!
        </h2>
        <p className="mb-4 text-[#111111]">
        <strong>Velkommen til Shalom New Creation!</strong> Dette er vår offisielle
        side, hvor du kan bli bedre kjent med hvem vi er, hva vi gjør, hva vi
        tilbyr, og hvor du finner oss. Vi holder gudstjenester hver lørdag kl.
        18:30, og du er hjertelig velkommen til å delta. Må Guds nåde og
        velsignelse være over deg!{" "}
        </p>
        <button
          onClick={closeModal}
          className="bg-[#111111] text-[#ffffff]  my-2 px-4 py-2 rounded-lg hover:bg-[#1f1f1f] hover:text-[#ffffff]"
        >
          Velkommen Hjem!
        </button>
      </div>
    </div>
  );

  return isMobile ? mobileModal : desktopModal;
};

export default Modal;
