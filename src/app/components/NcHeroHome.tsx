import Link from "next/link";
import NcNav from "./ncNav";

export default function YouthNav() {
  return (
    <main>
      <nav className="h-dvh bg-cover bg-no-repeat bg-center NcNav-bg pb-[100px]">
        <NcNav />
        <div className="heroTextYouth w-full h-5/6  flex justify-center items-center flex-col">
          <h1
            className="primaryFontRegular text-slate-50 font-[700] uppercase leading-none"
            style={{ fontSize: "clamp(10px, 11.2vw, 205px)" }}
          >
            New Creation
          </h1>
          <p
            className="primaryFontLight p-text-hero-youth text-slate-50 max-w-[950px] w-full text-center px-[50px]"
            style={{ fontSize: "clamp(22px, 5vw, 22px)" }}
          >
            Derfor, om noen er i Kristus, da er han en ny skapning, det gamle er
            forbi, se, alt er blitt nytt. Men alt dette er av Gud, han som
            forlikte oss med seg selv ved Kristus og ga oss forlikelsens
            tjeneste. 2. Korinterbrev 5:17-18
          </p>
          <a href="#grupper-a-Nc" className="flex justify-center">
            <button className="btn w-full scroll-container max-w-[125px] m-5 rounded-xl bg-[#222222] text-slate-50 border-none hover:bg-[#1a1a1a]">
              <div className="scroll-holder">
                <p>Utforsk</p>
              </div>
            </button>
          </a>
        </div>
      </nav>
    </main>
  );
}
