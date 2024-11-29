"use client";

import NewUserModal from "../components/newUserModal";
// import Marquee from "../components/Marquee";
import YouthNav from "../components/youthHeroHome";
import YouthGrupperHome from "../components/youthGrupperHome";
import KalenderYouth from "../components/youthKalender";
import YoutubeComp from "../components/youtubeHome";
import PaameldingHome from "../components/youthPåmeldingHome";
import Footer from "../components/youthFooter";
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
      {/*       <Marquee />
       */}{" "}
      <NewUserModal showModal={showModal} closeModal={closeModal} />
      <YouthNav />
      <YouthGrupperHome />
      <KalenderYouth />
      <YoutubeComp />
      <PaameldingHome />
      <Footer />
    </main>
  );
}
