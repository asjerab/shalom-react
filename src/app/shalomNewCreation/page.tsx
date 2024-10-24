"use client";

// import NewUserModal from "../components/NcnewUserModal";
// import Marquee from "../components/Marquee"
import NcNav from "../components/NcHeroHome";
import NcGrupperHome from "../components/NcGrupperHome";
import KalenderNc from "../components/NcKalender";
import YoutubeComp from "../components/youtubeHome";
import NcPåmeldingHome from "../components/NcPåmeldingHome";
import Footer from "../components/NcFooter";
// import Marquee from "../components/Marquee";
import { useState, useEffect } from "react";

export default function ShalomHome() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check localStorage for 'returningUser' key
    const isReturningUser = localStorage.getItem("returningUser");

    // If not set, show the modal and set the key
    if (!isReturningUser) {
      setShowModal(true);
      localStorage.setItem("returningUser", "true"); // Now user is no longer new
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <main>
      <NcNav />
      {/*       <NewUserModal showModal={showModal} closeModal={closeModal} />*/}{" "}
      {/*       <Marquee />
       */}{" "}
      <NcGrupperHome />
      <KalenderNc />
      <YoutubeComp />
      <NcPåmeldingHome />
      <Footer />
    </main>
  );
}
