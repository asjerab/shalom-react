import Link from "next/link";
import Image from "next/image";
import alphaKursImg from "/public/grupperImages/alphaKursBilde.png";
import bibelStudieImg from "/public/grupperImages/bibelStudieBilde.png";
import connectImg from "/public/grupperImages/connectBilde.png";
import tjenesteKursImg from "/public/grupperImages/tjenestekursBilde.png";

export default function YouthGrupperHome() {
  return (
    <main>
      <div className="flex justify-center" id="utforsk-a">
        <div className="grupper-container-home pt-[200px] pb-[100px] px-[35px] w-full max-w-[1150px]">
          <h1
            className="light dark primaryFontRegular text-slate-50 font-[600] my-5 leading-[84px] flex items-center gap-5"
            style={{ fontSize: "clamp(36px, 12vw, 80px)" }}
          >
            Grupper
            <span className="Kelsi-fill text-slate-50">x</span>
          </h1>
          <div className="grupper-wrapper-home grid grid-cols-4 gap-3">
            <Link href="/youthGrupper" className="">
              <Image
                className="w-full max-w-[640px] rounded-[4px] cursor-pointer hover:scale-[1.020] duration-150 cubic-bezier(0.4, 0, 0.2, 1)"
                src={alphaKursImg.src}
                width={640}
                height={640}
                alt="alphakurs img"
              />
            </Link>
            <Link href="/youthGrupper" className="">
              <Image
                className=" w-full max-w-[640px] rounded-[4px] cursor-pointer hover:scale-[1.020]  duration-150 cubic-bezier(0.4, 0, 0.2, 1)"
                src={bibelStudieImg.src}
                width={640}
                height={640}
                alt="bibel studie img"
              />
            </Link>
            <Link href="/youthGrupper" className="">
              <Image
                className="w-full max-w-[640px] rounded-[4px] cursor-pointer hover:scale-[1.020]  duration-150 cubic-bezier(0.4, 0, 0.2, 1)"
                src={connectImg.src}
                width={640}
                height={640}
                alt="connect img"
              />
            </Link>
            <Link href="/youthGrupper" className="">
              <Image
                className="w-full max-w-[640px] rounded-[4px] cursor-pointer hover:scale-[1.020]  duration-150 cubic-bezier(0.4, 0, 0.2, 1)"
                src={tjenesteKursImg.src}
                width={640}
                height={640}
                alt="tjenestekurs img"
              />
            </Link>
          </div>
          <div className="påmeldingHomeInfoContainer flex gap-16 justify-between items-center my-14">
            <p
              className="primaryFontRegular text-slate-50 max-w-[600px]"
              style={{ fontSize: "clamp(14px, 4vw, 22px)" }}
            >
              Trykk på &rdquo;Alle Grupper&rdquo; for å se alle grupper vi
              tilbyr i vårt fellesskap.
            </p>
            <Link href="/youthGrupper">
              <button className="btn btn-wide scroll-container rounded-full bg-[#2b80ff] text-slate-50 border-none hover:bg-[#3e8bff]">
                <p className="primaryFontRegular scroll-holder">Alle Grupper</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
