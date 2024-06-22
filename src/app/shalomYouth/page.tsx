import YouthNav from "../components/youthHeroHome";
import YouthGrupperHome from "../components/youthGrupperHome";
import YoutubeComp from "../components/youtubeComp";
import PaameldingHome from "../components/youthPåmeldingHome";
import Footer from "../components/footer";
import Loading from "../components/loading";
import Kalender from "../components/kalender";
import Marquee from "../components/Marquee";

export default function ShalomHome() {
  return (
    <main>
      <Loading />
      <Marquee />
      <YouthNav />
      <YouthGrupperHome />
      <Kalender />
      <YoutubeComp />
      <PaameldingHome />
      <Footer />
    </main>
  );
}
