// import Marquee from "../components/Marquee <under arbeid>";
import YouthNav from "../components/youthHeroHome";
// import Arrengement from "../components/arrangement <under arbeid>";
import YouthGrupperHome from "../components/youthGrupperHome";
import KalenderYouth from "../components/youthKalender"
import YoutubeComp from "../components/youtubeHome";
import PaameldingHome from "../components/youthPåmeldingHome";
import Footer from "../components/youthFooter";

export default function ShalomHome() {
  return (
    <main>
      {/* <Marquee /> */}
      <YouthNav />
      {/* <Arrengement /> under arbeid */}
      <YouthGrupperHome />
      <KalenderYouth />
      <YoutubeComp />
      <PaameldingHome />
      <Footer />
    </main>
  );
}
