import Link from "next/link";

export default function PaameldingHome() {
  return (
    <main>
      <section className="flex justify-center items-center py-[100px] px-[35px]">
        <div className="w-full max-w-[1325px]">
          <h1
            className="primaryRegular text-slate-50 font-[700] uppercase py-[50px]"
            style={{ fontSize: "clamp(36px, 8vw, 50px)" }}
          >
            Påmelding.
          </h1>{" "}
          <div className="w-full h-[2px] bg-[#67686c] opacity-50 animation-scroll"></div>
          <div className="flex justify-between items-center py-[40px]  hover:scale-[98.5%] duration-150 animation-scroll">
            <h1
              className="primaryRegular text-slate-50"
              style={{ fontSize: "clamp(22px, 5vw, 35px)" }}
            >
              Connect
            </h1>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSesbn9kHSXX_Yb5uK5ovpKd9xiZ57p5DGpClDozOTZma3ZgrQ/viewform">
            <button className="btn rounded-xl bg-[#222222] text-slate-50 border-none hover:bg-[#1a1a1a]">Meld deg</button>
            </Link>
          </div>
          <div className="w-full h-[2px] bg-[#67686c] opacity-50 animation-scroll"></div>
          <div className="flex justify-between items-center py-[40px]  hover:scale-[98.5%] duration-150 animation-scroll">
            <h1
              className="primaryRegular text-slate-50"
              style={{ fontSize: "clamp(22px, 5vw, 35px)" }}
            >
              Bibelstudie
            </h1>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdDbsu-p-7rR353roJfZuUF-l8oNqjkdHXiT8WY2y9E3kZ7Bw/viewform">
            <button className="btn rounded-xl bg-[#222222] text-slate-50 border-none hover:bg-[#1a1a1a]">Meld deg</button>
            </Link>
          </div>
          <div className="w-full h-[2px] bg-[#67686c] opacity-50 animation-scroll"></div>
          <div className="flex justify-between items-center py-[40px]  hover:scale-[98.5%] duration-150 animation-scroll">
            <h1
              className="primaryRegular text-slate-50"
              style={{ fontSize: "clamp(22px, 5vw, 35px)" }}
            >
              Tjenestekurs
            </h1>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSerL_wsSXphDQfwW-WZY9al7T8Ply6C9yRb-DSES4a2Ds0dfA/viewform">
              <button className="btn rounded-xl bg-[#222222] text-slate-50 border-none hover:bg-[#1a1a1a]">Meld deg</button>
            </Link>
          </div>
          <div className="w-full h-[2px] bg-[#67686c] opacity-50 animation-scroll"></div>
          <div className="påmeldingHomeInfoContainer flex gap-16 justify-between items-center my-14">
            <p
              className="primaryRegular text-slate-50 max-w-[600px]"
              style={{ fontSize: "clamp(14px, 4vw, 22px)" }}
            >
              Trykk på "Alle påmeldinger" for og hente fram flere påmeldinger du
              kan melde deg på.
            </p>
            <Link href="/youthForms">
              <button className="btn btn-wide rounded-xl bg-[#222222] text-slate-50 border-none hover:bg-[#1a1a1a]">
                Alle påmeldinger
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
