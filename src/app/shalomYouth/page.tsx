"use client";

import NewUserModal from "../components/newUserModal";
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
      <YouthNav />
      <YouthGrupperHome />
      <KalenderYouth />
      <YoutubeComp />
      <PaameldingHome />
      <Footer />
    </main>
  );
}
