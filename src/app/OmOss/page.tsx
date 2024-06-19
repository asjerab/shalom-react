import YouthNav from "../components/youthNav";
import Loading from "../components/loading";
import Footer from "../components/footer";

export default function OmOss() {
  return (
    <main className="w-full h-dvh">
      <Loading />
      <YouthNav />
      <div></div>
      <Footer />
    </main>
  );
}
