import Link from "next/link";
import YouthLogo from "../images/ShalomYouth-Logo.png";
import YouthNavHome from "./youthNav";

export default function YouthNav() {
  return (
    <main>
      <nav className="h-dvh bg-cover bg-no-repeat bg-center youthNav-bg pb-[100px]" id="youthHero">
        <YouthNavHome />
        <div className="primaryFontHeadings w-full h-5/6  flex justify-center items-center flex-col">
          <h1
            className="primaryFontHero text-slate-50 font-[900] uppercase leading-none"
            style={{ fontSize: "clamp(10px, 11.2vw, 205px)" }}
          >
            Shalom Youth
          </h1>
          <p className="primaryFontLight p-text-hero-youth text-[22px] text-slate-50 font-[600] max-w-[1000px] w-full text-center px-[50px]">
            La ingen forakte deg fordi du er ung, men vær et forbilde for de
            troende i ord og livsførsel, i kjærlighet, tro og renhet. 1.Timoteus
            4:12
          </p>
          <a href="#grupper-a" className="flex justify-center">
            <button className="btn w-full primaryFontHeadings uppercase scroll-container max-w-[125px] m-5 rounded-[28px] bg-[#222222] text-slate-50 border-none hover:bg-[#1a1a1a]">
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
