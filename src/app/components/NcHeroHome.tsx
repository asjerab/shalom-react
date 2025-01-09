import Link from "next/link";
import NcNav from "./ncNav";

export default function NcHero() {
  return (
    <main>
      <nav
        className="h-dvh bg-cover bg-no-repeat bg-center NcNav-bg pb-[100px]"
        id="NcHero"
      >
        <NcNav />
        <div className="heroTextYouth w-full h-5/6  flex justify-center items-center flex-col">
          <h1
            className="primaryFontBold text-slate-50 font-[700]  leading-none"
            style={{ fontSize: "clamp(10px, 11.2vw, 205px)" }}
          >
            New Creation
          </h1>
          <p className="primaryFontLight p-text-hero-youth text-[22px] text-slate-50 font-[600] max-w-[950px] w-full text-center px-[50px]">
            Derfor, om noen er i Kristus, da er han en ny skapning, det gamle er
            forbi, se, alt er blitt nytt. Men alt dette er av Gud, han som
            forlikte oss med seg selv ved Kristus og ga oss forlikelsens
            tjeneste. 2. Korinterbrev 5:17-18
          </p>
          <div className="flex items-center">
            <a
              href="#NewCreation-kalender"
              className="flex justify-center active:scale-[0.95] duration-150 ease-in-out"
            >
              <button className="btn w-full primaryFontRegular uppercase scroll-container max-w-[125px] m-5 rounded-[28px] bg-[#111] text-slate-50 border-none hover:bg-[#1a1a1a]">
                <div className="scroll-holder">
                  <p>Utforsk</p>
                </div>
              </button>
            </a>
            <a
              href="#NewCreation-kalender"
              className="flex justify-center active:scale-[0.95] duration-150 ease-in-out"
            >
              <button className="btn w-full primaryFontBold  uppercase scroll-container max-w-[125px] m-5 rounded-[28px] bg-[#ececec] text-[#111] font-[800] border-none hover:bg-[#e4e3e3]">
                <div className="scroll-holder">
                  <p>Kalender</p>
                </div>
              </button>
            </a>
          </div>
        </div>
      </nav>
    </main>
  );
}
