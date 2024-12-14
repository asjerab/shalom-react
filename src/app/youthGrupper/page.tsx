"use client";
import Image from "next/image";
import YouthNav from "../components/youthNav";
import alphaKursImg from "../../../public/grupperImages/alphaKursBilde.png";
import bibelStudieImg from "../../../public/grupperImages/bibelStudieBilde.png";
import connectImg from "../../../public/grupperImages/connectBilde.png";
import tjenesteKursImg from "../../../public/grupperImages/tjenesteKursBilde.png";
import bonn from "../../../public/grupperImages/bonnBilde.png";
import daap from "../../../public/grupperImages/daapBilde.png";
import evangelisering from "../../../public/grupperImages/evangeliseringBilde.png";
import jamesMinistry from "../../../public/grupperImages/jamesMinistryBilde.png";
import dypereImg from "../../../public/grupperImages/dypereKursBilde.png";
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
  const grupper = [
    {
      img: alphaKursImg,
      title: "Alphakurs",
      modal: <AlphakursModal />,
    },
    {
      img: bibelStudieImg,
      title: "Bibelstudie",
      modal: <BibelstudieModal />,
    },
    {
      img: tjenesteKursImg,
      title: "Tjenestekurs",
      modal: <TjenesteModal />,
    },
    {
      img: connectImg,
      title: "Connect",
      modal: <ConnectModal />,
    },
    {
      img: daap,
      title: "Dåp",
      modal: <DåpModal />,
    },
    {
      img: bonn,
      title: "Bønn",
      modal: <BønnModal />,
    },
    {
      img: dypereImg,
      title: "The upper room",
      modal: <TheUpperRoom />,
    },
    {
      img: evangelisering,
      title: "Evangelisering",
      modal: <Evangelisering />,
    },
    {
      img: jamesMinistry,
      title: "James 1:27 Ministry",
      modal: <JamesModal />,
    },
  ];

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
            {grupper.map((gruppe, index) => (
              <li key={index} className="grupper-img flex py-[100px] flex-col gap-5">
                <Image
                  className="w-full"
                  src={gruppe.img.src}
                  width={604}
                  height={604}
                  alt={gruppe.title}
                />
                <h1
                  className="primaryFontRegular text-slate-50 uppercase"
                  style={{
                    fontSize: "clamp(15px, 5vw, 20px)",
                  }}
                >
                  {gruppe.title}
                </h1>
                <hr className="opacity-50" />
                {gruppe.modal}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </main>
  );
}
