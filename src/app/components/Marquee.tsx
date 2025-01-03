import Link from "next/link";
import Marquee from "react-fast-marquee";
export default function MarqueeSlider() {
  return (
    <>
      <Link href="/event/arrangement/Nyttaarsaften">
        <div className="Marquee fixed top-0 bg-[#204ac0] w-full  z-50">
          <Marquee className="p-2 flex">
            <h1 className="primaryFontBold px-10 text-slate-50 uppercase">
              Husk Påmelding til Nyttårsaften{" "}
            </h1>
            <span className="Kelsi-fill text-slate-50">x</span>
            <h1 className="primaryFontBold px-10 text-slate-50 uppercase underline">
              {" "}
              Trykk meg for og melde deg på{" "}
            </h1>
            <span className="Kelsi-fill text-slate-50">x</span>
            <h1 className="primaryFontBold px-10 text-slate-50 uppercase">
              Husk Påmelding til Nyttårsaften{" "}
            </h1>
            <span className="Kelsi-fill text-slate-50">x</span>
            <h1 className="primaryFontBold px-10 text-slate-50 uppercase underline">
              {" "}
              Trykk meg for og melde deg på{" "}
            </h1>
            <span className="Kelsi-fill text-slate-50">x</span>
            <h1 className="primaryFontBold px-10 text-slate-50 uppercase">
              Husk Påmelding til Nyttårsaften{" "}
            </h1>
            <span className="Kelsi-fill text-slate-50">x</span>
            <h1 className="primaryFontBold px-10 text-slate-50 uppercase underline">
              {" "}
              Trykk meg for og melde deg på{" "}
            </h1>
            <span className="Kelsi-fill text-slate-50">x</span>
            <h1 className="primaryFontBold px-10 text-slate-50 uppercase">
              Husk Påmelding til Nyttårsaften{" "}
            </h1>
            <span className="Kelsi-fill text-slate-50">x</span>
          </Marquee>
        </div>
      </Link>
    </>
  );
}
