"use client";

import NewUserModal from "../components/NcnewUserModal";
import Marquee from "../components/Marquee";
import NcNav from "../components/NcHeroHome";
import NewYearsCountdown from "../components/newYearsCountDown"
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
    const isReturningUser = localStorage.getItem("returningUser");

    if (!isReturningUser) {
      setShowModal(true);
      localStorage.setItem("returningUser", "true");
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <main>
      <NcNav />
      <NewYearsCountdown />
      <NewUserModal showModal={showModal} closeModal={closeModal} />
      <Marquee />
      <NcGrupperHome />
      <KalenderNc />
      <YoutubeComp />
      <NcPåmeldingHome />
      <Footer />
    </main>
  );
}
