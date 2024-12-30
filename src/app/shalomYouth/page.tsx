"use client";

import NewUserModal from "../components/newUserModal";
import Marquee from "../components/Marquee";
import YouthNav from "../components/youthHeroHome";
import YouthGrupperHome from "../components/youthGrupperHome";
import NewYears from "../components/newYearsPoster";
import KalenderYouth from "../components/youthKalender";
import YoutubeComp from "../components/youtubeHome";
import PaameldingHome from "../components/youthPåmeldingHome";
import Footer from "../components/youthFooter";
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
      <Marquee />
      <NewUserModal showModal={showModal} closeModal={closeModal} />
      <YouthNav />
      <NewYears />
      <YouthGrupperHome />
      <KalenderYouth />
      <YoutubeComp />
      <PaameldingHome />
      <Footer />
    </main>
  );
}
