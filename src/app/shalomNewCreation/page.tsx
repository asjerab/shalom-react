import NcNav from "../components/NcHeroHome";
import NcGrupperHome from "../components/NcGrupperHome";
import KalenderNc from "../components/NcKalender";
import YoutubeComp from "../components/youtubeHome";
import NcPåmeldingHome from "../components/NcPåmeldingHome";
import Footer from "../components/NcFooter";
import Marquee from "../components/Marquee";

export default function ShalomHome() {
  return (
    <main>
      <NcNav />
      <Marquee />
      <NcGrupperHome />
      <KalenderNc />
      <YoutubeComp />
      <NcPåmeldingHome />
      <Footer />
    </main>
  );
}
