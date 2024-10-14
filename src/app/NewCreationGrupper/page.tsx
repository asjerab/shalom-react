"use client";
import NcNav from "../components/ncNav";
import alphaKursImg from "../grupperImages/alpha-kurs-img.png";
import bibelStudieImg from "../grupperImages/bible-studie-img.png";
import connectImg from "../grupperImages/connect-img.png";
import tjenesteKursImg from "../grupperImages/tjeneste-kurs-img.png";
import bonn from "../grupperImages/bonn-img.png";
import dap from "../grupperImages/dap.png";
import evangelisering from "../grupperImages/evangelisering-img.png";
import james from "../grupperImages/James-img.png";
import dypereImg from "../grupperImages/dypere-img.png";
import NcAlphakursModal from "../components/NcModalComponents/NcAlphakursModal";
import NcBibelstudieModal from "../components/NcModalComponents/NcBibelstudieModal";
import TjenesteModal from "../components/NcModalComponents/TjenesteModal";
import NcConnectModal from "../components/NcModalComponents/NcConnectModal";
import DåpModal from "../components/NcModalComponents/DåpModal";
import BønnModal from "../components/ModalComponents/BønnModal";
import NcTheUpperRoom from "../components/NcModalComponents/NcTheUpperRoom";
import Evangelisering from "../components/ModalComponents/Evangelisering";
import JamesModal from "../components/ModalComponents/JamesModal";
import NcFooter from "../components/NcFooter";

export default function YouthGrupper() {
  return (
    <main className="h-full">
      <NcNav />
      <div className="Gruper-wrapper p-[35px]">
        <div className="flex flex-col gap-10">
          <h1
            className="primaryFontBold text-slate-50 leading-none"
            style={{ fontSize: "clamp(50px, 10vw, 200px)" }}
          >
            Grupper.
          </h1>
          <p
            className="primaryFontRegular text-slate-50 max-w-[1000px]"
            style={{ fontSize: "clamp(15px, 2vw, 25px)" }}
          >
            Her kan du lese mer om hva som skjer i løpet av uken. Klikk på
            utforsk for å lese mer om hvert emne. Der det er påmelding, har du
            også muligheten til å registrere deg gjennom påmeldingssiden vår.
          </p>
        </div>
        <div>
          <ul className="gupper-page-container grid grid-cols-3 gap-5">
            <li className="grupper-img flex py-[100px] flex-col gap-5">
              <img
                className="w-full"
                src={alphaKursImg.src}
                alt="alphaKursImg"
              />
              <h1
                className="primaryFontRegular text-slate-50 uppercase"
                style={{
                  fontSize: "clamp(22px, 10vw, 22px)",
                }}
              >
                Alphakurs
              </h1>
              <hr className="opacity-50" />
              <NcAlphakursModal />
            </li>

            <li className="grupper-img flex py-[100px] flex-col gap-5">
              <img
                className="w-full"
                src={bibelStudieImg.src}
                alt="bibelStudieImg"
              />
              <h1
                className="primaryFontRegular text-slate-50 uppercase"
                style={{
                  fontSize: "clamp(22px, 10vw, 22px)",
                }}
              >
                Bibelstudie
              </h1>
              <hr className="opacity-50" />
              <NcBibelstudieModal />
            </li>

            <li className="grupper-img flex py-[100px] flex-col gap-5">
              <img
                className="w-full"
                src={tjenesteKursImg.src}
                alt="tjenesteKursImg"
              />
              <h1
                className="primaryFontRegular text-slate-50 uppercase"
                style={{
                  fontSize: "clamp(22px, 10vw, 22px)",
                }}
              >
                Tjenestekurs
              </h1>
              <hr className="opacity-50" />
              <TjenesteModal />
            </li>

            <li className="grupper-img flex py-[100px] flex-col gap-5">
              <img className="w-full" src={connectImg.src} alt="connectImg" />
              <h1
                className="primaryFontRegular text-slate-50 uppercase"
                style={{
                  fontSize: "clamp(22px, 10vw, 22px)",
                }}
              >
                Connect
              </h1>
              <hr className="opacity-50" />
              <NcConnectModal />
            </li>

            <li className="grupper-img flex py-[100px] flex-col gap-5">
              <img className="w-full" src={dap.src} alt="dapImg" />
              <h1
                className="primaryFontRegular text-slate-50 uppercase"
                style={{
                  fontSize: "clamp(22px, 10vw, 22px)",
                }}
              >
                Dåp
              </h1>
              <hr className="opacity-50" />
              <DåpModal />
            </li>

            <li className="grupper-img flex py-[100px] flex-col gap-5">
              <img className="w-full" src={bonn.src} alt="bønnImg" />
              <h1
                className="primaryFontRegular text-slate-50 uppercase"
                style={{
                  fontSize: "clamp(22px, 10vw, 22px)",
                }}
              >
                Bønn
              </h1>
              <hr className="opacity-50" />
              <BønnModal />
            </li>

            <li className="grupper-img flex py-[100px] flex-col gap-5">
              <img
                className="w-full"
                src={dypereImg.src}
                alt="The Upper room Img"
              />
              <h1
                className="primaryFontRegular text-slate-50 uppercase"
                style={{
                  fontSize: "clamp(22px, 10vw, 22px)",
                }}
              >
                The upper room
              </h1>
              <hr className="opacity-50" />
              <NcTheUpperRoom />
            </li>

            <li className="grupper-img flex py-[100px] flex-col gap-5">
              <img
                className="w-full"
                src={evangelisering.src}
                alt="evangeliseringImg"
              />
              <h1
                className="primaryFontRegular text-slate-50 uppercase text-balance"
                style={{
                  fontSize: "clamp(22px, 10vw, 22px)",
                }}
              >
                Evangelisering
              </h1>
              <hr className="opacity-50" />
              <Evangelisering />
            </li>

            <li className="grupper-img flex py-[100px] flex-col gap-5">
              <img className="w-full" src={james.src} alt="James1:27Img" />
              <h1
                className="primaryFontRegular text-slate-50 uppercase"
                style={{
                  fontSize: "clamp(15px, 5vw, 20px)",
                }}
              >
                James 1:27 Ministry
              </h1>
              <hr className="opacity-50" />
              <JamesModal />
            </li>
          </ul>
        </div>
      </div>
      <NcFooter />
    </main>
  );
}
