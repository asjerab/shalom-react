import YouthNav from "../components/youthHeroHome";
import YouthGrupperHome from "../components/youthGrupperHome"
import YoutubeComp from "../components/youtubeComp"
import PaameldingHome from "../components/påmeldingHome"
import Footer from "../components/footer"
import Loading from "../components/loading"
import Kalender from "../components/kalender"




export default function ShalomHome() {
  return (
    <main>
      <Loading />
      <YouthNav />
      <YouthGrupperHome />
      <YoutubeComp />
      <PaameldingHome />
      <Footer />
    </main>
  );
}
