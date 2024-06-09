import Link from "next/link";
import TestNav from "../components/youthNav"
import Footer from "../components/footer";
import Loading from "../components/loading";

export default function youthPåmelding() {
  return (
    <main>
      <Loading />
      <TestNav />
      <section className="påmelding-wrapper flex justify-center items-center py-[50px] px-[35px]">
        <div className="w-full">
          <div className="mb-10">
            <h1
              className="primaryBold text-slate-50"
              style={{ fontSize: "clamp(50px, 10vw, 200px)" }}
            >
              Påmelding.
            </h1>
            <p
              className="primaryRegular text-slate-50 max-w-[700px]"
              style={{ fontSize: "clamp(15px, 2vw, 25px)" }}
            >
              Her kan du enkelt melde deg på det du ønsker. Når du har meldt deg
              på, vil vi ta kontakt med deg.
            </p>
          </div>
          <div className="w-full h-[2px] bg-[#67686c] opacity-25 animation-scroll"></div>
          <div className="animation-scroll flex justify-between items-center py-[50px]  hover:scale-[98.5%] duration-150">
            <h1
              className="primaryBold text-slate-50"
              style={{ fontSize: "clamp(22px, 5vw, 30px)" }}
            >
              Connect
            </h1>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSesbn9kHSXX_Yb5uK5ovpKd9xiZ57p5DGpClDozOTZma3ZgrQ/viewform">
              <button className="btn rounded-xl bg-[#222222] text-slate-50 border-none hover:bg-[#1a1a1a]">Meld deg</button>
            </Link>
          </div>

          <div className="w-full h-[2px] bg-[#67686c] opacity-25 animation-scroll"></div>

          <div className="animation-scroll flex justify-between items-center py-[50px]  hover:scale-[98.5%] duration-150">
            <h1
              className="primaryBold text-slate-50"
              style={{ fontSize: "clamp(22px, 5vw, 30px)" }}
            >
              Bibelstudie
            </h1>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdDbsu-p-7rR353roJfZuUF-l8oNqjkdHXiT8WY2y9E3kZ7Bw/viewform">
              <button className="btn rounded-xl bg-[#222222] text-slate-50 border-none hover:bg-[#1a1a1a]">Meld deg</button>
            </Link>
          </div>

          <div className="w-full h-[2px] bg-[#67686c] opacity-25 animation-scroll"></div>

          <div className="animation-scroll flex justify-between items-center py-[50px]  hover:scale-[98.5%] duration-150">
            <h1
              className="primaryBold text-slate-50"
              style={{ fontSize: "clamp(22px, 5vw, 30px)" }}
            >
              Tjenestekurs
            </h1>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSerL_wsSXphDQfwW-WZY9al7T8Ply6C9yRb-DSES4a2Ds0dfA/viewform">
              <button className="btn rounded-xl bg-[#222222] text-slate-50 border-none hover:bg-[#1a1a1a]">Meld deg</button>
            </Link>
          </div>

          <div className="w-full h-[2px] bg-[#67686c] opacity-25 animation-scroll"></div>

          <div className="animation-scroll flex justify-between items-center py-[50px]  hover:scale-[98.5%] duration-150">
            <h1
              className="primaryBold text-slate-50"
              style={{ fontSize: "clamp(22px, 5vw, 30px)" }}
            >
              Alphakurs
            </h1>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdWBP7yJddqmqgW5XaienN-GCqKIykNCsh3NPig-9UnIFVbmw/viewform">
              <button className="btn rounded-xl bg-[#222222] text-slate-50 border-none hover:bg-[#1a1a1a]">Meld deg</button>
            </Link>
          </div>

          <div className="animation-scroll w-full h-[2px] bg-[#67686c] opacity-25 animation-scroll"></div>

          <div className="animation-scroll flex justify-between items-center py-[50px]  hover:scale-[98.5%] duration-150">
            <h1
              className="primaryBold text-slate-50"
              style={{ fontSize: "clamp(22px, 5vw, 30px)" }}
            >
              Dåp
            </h1>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdWBP7yJddqmqgW5XaienN-GCqKIykNCsh3NPig-9UnIFVbmw/viewform">
              <button className="btn rounded-xl bg-[#222222] text-slate-50 border-none hover:bg-[#1a1a1a]">Meld deg</button>
            </Link>
          </div>

          <div className="w-full h-[2px] bg-[#67686c] opacity-25 animation-scroll"></div>

          <div className="animation-scroll flex justify-between items-center py-[50px]  hover:scale-[98.5%] duration-150">
            <h1
              className="primaryBold text-slate-50"
              style={{ fontSize: "clamp(22px, 5vw, 30px)" }}
            >
              The upper room
            </h1>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfWrL9syVWMrORCbySCvHJ_2MkNWaAJ3vt4Mq2kQwbiamztYQ/viewform">
              <button className="btn rounded-xl bg-[#222222] text-slate-50 border-none hover:bg-[#1a1a1a]">Meld deg</button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
