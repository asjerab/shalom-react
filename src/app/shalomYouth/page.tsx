import YouthNav from "../components/youthNavHome";
import YouthGrupperHome from "../components/youthGrupperHome"
import YoutubeComp from "../components/youtubeComp"
import PaameldingHome from "../components/påmeldingHome"
import Footer from "../components/footer"




export default function ShalomHome() {
  return (
    <main>
      <YouthNav />
      <YouthGrupperHome />
      <YoutubeComp />
      <PaameldingHome />
      <Footer />
    </main>
  );
}
