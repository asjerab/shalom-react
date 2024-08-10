import Link from "next/link";
import TheUpperRoom from "../grupperImages/dypere-img.png";
import Bonn from "../grupperImages/bonn-img.png";
import Evangelisering from "../grupperImages/evangelisering-img.png";
import tjenesteKursImg from "../grupperImages/tjeneste-kurs-img.png";

export default function YouthGrupperHome() {
  return (
    <main>
      <div className="flex justify-center" id="grupper-a-Nc">
        <div className="grupper-container-home pt-[200px] pb-[100px] px-[35px]">
          <h1
            className="primaryFontRegular text-slate-50 font-[600] my-5 leading-[84px] flex items-center gap-5"
            style={{ fontSize: "clamp(36px, 12vw, 80px)" }}
          >
            Grupper
            <span className="Kelsi-fill text-slate-50">x</span>
          </h1>
          <div className="grupper-wrapper-home grid grid-cols-2 gap-7">
            <Link href="/NewCreationGrupper" className="">
              <img
                className="w-full max-w-[648px] rounded-[4px] cursor-pointer hover:scale-[1.010] duration-150 cubic-bezier(0.4, 0, 0.2, 1)"
                src={TheUpperRoom.src}
                alt="alphakurs img"
              />
            </Link>
            <Link href="/NewCreationGrupper" className="">
              <img
                className="hidden-grupper-img w-full max-w-[648px] rounded-[4px] cursor-pointer hover:scale-[1.010] duration-150 cubic-bezier(0.4, 0, 0.2, 1)"
                src={Bonn.src}
                alt="bibel studie img"
              />
            </Link>
            <Link href="/NewCreationGrupper" className="">
              <img
                className="w-full max-w-[648px] rounded-[4px] cursor-pointer hover:scale-[1.010] duration-150 cubic-bezier(0.4, 0, 0.2, 1)"
                src={Evangelisering.src}
                alt="connect img"
              />
            </Link>
            <Link href="/NewCreationGrupper" className="">
              <img
                className="hidden-grupper-img w-full max-w-[648px] rounded-[4px] cursor-pointer hover:scale-[1.010] duration-150 cubic-bezier(0.4, 0, 0.2, 1)"
                src={tjenesteKursImg.src}
                alt="tjenestekurs img"
              />
            </Link>
          </div>
          <div className="påmeldingHomeInfoContainer flex gap-16 justify-between items-center my-14">
            <p
              className="primaryFontRegular text-slate-50 max-w-[600px]"
              style={{ fontSize: "clamp(14px, 4vw, 22px)" }}
            >
              Trykk på &rdquo; Alle Grupper &rdquo; for og se alle grupper vi tilbyr i vårt
              fellesskap.
            </p>
            <Link href="/NewCreationGrupper">
              <button className="btn btn-wide rounded-xl bg-[#2b80ff] text-slate-50 border-none hover:bg-[#3e8bff]">
                Alle Grupper
              </button>
            </Link>
          </div>{" "}
        </div>
      </div>
    </main>
  );
}
