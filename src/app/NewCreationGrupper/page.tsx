"use client";
import Image from "next/image";
import NcNav from "../components/ncNav";
import alphaKursImg from "../../../public/grupperImages/alphaKursBilde.png";
import bibelStudieImg from "../../../public/grupperImages/bibelStudieBilde.png";
import connectImg from "../../../public/grupperImages/connectBilde.png";
import tjenesteKursImg from "../../../public/grupperImages/tjenesteKursBilde.png";
import bonn from "../../../public/grupperImages/bonnBilde.png";
import daapBilde from "../../../public/grupperImages/daapBilde.png";
import evangelisering from "../../../public/grupperImages/evangeliseringBilde.png";
import james from "../../../public/grupperImages/jamesMinistryBilde.png";
import dypereImg from "../../../public/grupperImages/dypereKursBilde.png";
////////////////////////
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
  const grupper = [
    {
      img: alphaKursImg.src,
      title: "Alphakurs",
      modal: <NcAlphakursModal />,
    },
    {
      img: bibelStudieImg.src,
      title: "Bibelstudie",
      modal: <NcBibelstudieModal />,
    },
    {
      img: tjenesteKursImg.src,
      title: "Tjenestekurs",
      modal: <TjenesteModal />,
    },
    {
      img: connectImg.src,
      title: "Connect",
      modal: <NcConnectModal />,
    },
    {
      img: daapBilde.src,
      title: "Dåp",
      modal: <DåpModal />,
    },
    {
      img: bonn.src,
      title: "Bønn",
      modal: <BønnModal />,
    },
    {
      img: dypereImg.src,
      title: "The upper room",
      modal: <NcTheUpperRoom />,
    },
    {
      img: evangelisering.src,
      title: "Evangelisering",
      modal: <Evangelisering />,
    },
    {
      img: james.src,
      title: "James 1:27 Ministry",
      modal: <JamesModal />,
    },
  ];

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
            {grupper.map((gruppe, index) => (
              <li
                key={index}
                className="grupper-img flex py-[100px] flex-col gap-5"
              >
                <Image
                  className="w-full"
                  src={gruppe.img}
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
      <NcFooter />
    </main>
  );
}
