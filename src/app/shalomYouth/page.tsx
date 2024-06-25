import YouthNav from "../components/youthHeroHome";
import YouthGrupperHome from "../components/youthGrupperHome";
import KalenderYouth from "../components/youthKalender"
import YoutubeComp from "../components/youtubeHome";
import PaameldingHome from "../components/youthPåmeldingHome";
import Footer from "../components/youthFooter";
import Marquee from "../components/Marquee";

export default function ShalomHome() {
  return (
    <main>
      <Marquee />
      <YouthNav />
      <YouthGrupperHome />
      <KalenderYouth />
      <YoutubeComp />
      <PaameldingHome />
      <Footer />
    </main>
  );
}
