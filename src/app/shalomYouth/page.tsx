"use client";

import NewUserModal from "../components/newUserModal";
import YouthNav from "../components/youthHeroHome";
import Marquee from "../components/Marquee"
import EventsSection from "../components/EventsSections";
import YouthGrupperHome from "../components/youthGrupperHome";
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
      <NewUserModal showModal={showModal} closeModal={closeModal} />
      { /* <Marquee /> */ }
      <YouthNav />
      <EventsSection />
      <YouthGrupperHome />
      <KalenderYouth />
      <YoutubeComp />
      <PaameldingHome />
      <Footer />
    </main>
  );
}
