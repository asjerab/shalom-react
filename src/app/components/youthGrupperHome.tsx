import Link from "next/link";
import alphaKursImg from "../grupperImages/alpha-kurs-img.png";
import bibelStudieImg from "../grupperImages/bible-studie-img.png";
import connectImg from "../grupperImages/connect-img.png";
import tjenesteKursImg from "../grupperImages/tjeneste-kurs-img.png";

export default function YouthGrupperHome() {
  return (
    <main>
      <div className="flex justify-center" id="grupper-a">
        <div className="grupper-container-home py-[100px] px-[35px]">
          <h1
            className="primaryRegular text-slate-50 font-[700] uppercase py-[50px]"
            style={{ fontSize: "clamp(36px, 8vw, 50px)" }}
          >
            Grupper.
          </h1>
          <div className="grupper-wrapper-home grid grid-cols-2 gap-10">
            <img
              className="w-full max-w-[648px] rounded-[4px] cursor-pointer"
              src={alphaKursImg.src}
              alt="alphakurs img"
            />
            <img
              className="hidden-grupper-img w-full max-w-[648px] rounded-[4px] cursor-pointer"
              src={bibelStudieImg.src}
              alt="bibel studie img"
            />
            <img
              className="w-full max-w-[648px] rounded-[4px] cursor-pointer"
              src={connectImg.src}
              alt="connect img"
            />
            <img
              className="hidden-grupper-img w-full max-w-[648px] rounded-[4px] cursor-pointer"
              src={tjenesteKursImg.src}
              alt="tjenestekurs img"
            />
          </div>
          <div className="påmeldingHomeInfoContainer flex gap-16 justify-between items-center my-14">
            <p
              className="primaryRegular text-slate-50 max-w-[600px]"
              style={{ fontSize: "clamp(14px, 4vw, 22px)" }}
            >
              Trykk på "Alle Grupper" for og se alle grupper vi tilbyr i vårt fellesskap.
            </p>
            <Link href="/youthGrupper">
              <button className="btn btn-neutral btn-wide">
                Alle Grupper
              </button>
            </Link>
          </div>{" "}
        </div>
      </div>
    </main>
  );
}
