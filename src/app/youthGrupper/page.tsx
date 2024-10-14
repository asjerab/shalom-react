"use client";
import YouthNav from "../components/youthNav";
import alphaKursImg from "../grupperImages/alpha-kurs-img.png";
import bibelStudieImg from "../grupperImages/bible-studie-img.png";
import connectImg from "../grupperImages/connect-img.png";
import tjenesteKursImg from "../grupperImages/tjeneste-kurs-img.png";
import bonn from "../grupperImages/bonn-img.png";
import dap from "../grupperImages/dap.png";
import evangelisering from "../grupperImages/evangelisering-img.png";
import james from "../grupperImages/James-img.png";
import dypereImg from "../grupperImages/dypere-img.png";
import AlphakursModal from "../components/ModalComponents/AlphakursModal";
import BibelstudieModal from "../components/ModalComponents/BibelstudieModal";
import TjenesteModal from "../components/ModalComponents/TjenesteModal";
import ConnectModal from "../components/ModalComponents/ConnectModal";
import DåpModal from "../components/ModalComponents/DåpModal";
import BønnModal from "../components/ModalComponents/BønnModal";
import TheUpperRoom from "../components/ModalComponents/TheUpperRoom";
import Evangelisering from "../components/ModalComponents/Evangelisering";
import JamesModal from "../components/ModalComponents/JamesModal";
import Footer from "../components/youthFooter";

export default function YouthGrupper() {
  return (
    <main className="h-full">
      <YouthNav />
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
            &rdquo; utforsk &rdquo; for å lese mer om hvert emne. Der det er
            påmelding, har du også muligheten til å registrere deg gjennom
            påmeldingssiden vår.
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
                  fontSize: "clamp(15px, 5vw, 20px)",
                }}
              >
                Alphakurs
              </h1>
              <hr className="opacity-50" />
              <AlphakursModal />
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
                  fontSize: "clamp(15px, 5vw, 20px)",
                }}
              >
                Bibelstudie
              </h1>
              <hr className="opacity-50" />
              <BibelstudieModal />
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
                  fontSize: "clamp(15px, 5vw, 20px)",
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
                  fontSize: "clamp(15px, 5vw, 20px)",
                }}
              >
                Connect
              </h1>
              <hr className="opacity-50" />
              <ConnectModal />
            </li>

            <li className="grupper-img flex py-[100px] flex-col gap-5">
              <img className="w-full" src={dap.src} alt="dapImg" />
              <h1
                className="primaryFontRegular text-slate-50 uppercase"
                style={{
                  fontSize: "clamp(15px, 5vw, 20px)",
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
                  fontSize: "clamp(15px, 5vw, 20px)",
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
                  fontSize: "clamp(15px, 5vw, 20px)",
                }}
              >
                The upper room
              </h1>
              <hr className="opacity-50" />
              <TheUpperRoom />
            </li>

            <li className="grupper-img flex py-[100px] flex-col gap-5">
              <img
                className="w-full"
                src={evangelisering.src}
                alt="evangeliseringImg"
              />
              <h1
                className="primaryFontRegular text-slate-50 uppercase"
                style={{
                  fontSize: "clamp(15px, 5vw, 20px)",
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
      <Footer />
    </main>
  );
}
