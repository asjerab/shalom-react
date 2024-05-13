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

export default function YouthGrupper() {
  const openModal = (modalId: string) => {
    const modal = document.getElementById(modalId);
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
    } else {
      console.error(
        `Modal with id '${modalId}' not found or is not a dialog element.`
      );
    }
  };

  return (
    <main className="h-full">
      <YouthNav />
      <div className="p-[35px]">
        <div className="mb-10">
          <h1
            className="primaryBold text-slate-50"
            style={{ fontSize: "clamp(50px, 10vw, 200px)" }}
          >
            Grupper.
          </h1>
          <p
            className="primaryRegular text-slate-50 max-w-[1000px]"
            style={{ fontSize: "clamp(15px, 2vw, 25px)" }}
          >
            Her kan du lese mer om hva som skjer i løpet av uken. Klikk på
            "utforsk" for å lese mer om hvert emne. Der det er påmelding, har du
            også muligheten til å registrere deg gjennom påmeldingssiden vår.
          </p>
        </div>
        <div>
          <ul className="gupper-page-container grid grid-cols-3 gap-5">
            <li className="flex py-[100px] flex-col gap-5">
              <img
                className="w-full"
                src={alphaKursImg.src}
                alt="alphaKursImg"
              />
              <h1
                className="primaryLight text-slate-50 uppercase"
                style={{
                  fontSize: "calc(clamp(1.75em, 2.3vw, 2.5em) * 1.125)",
                }}
              >
                Alphakurs
              </h1>
              <hr className="opacity-50" />
              <button className="btn btn-neutral btn-wide">Les mer</button>
            </li>

            <li className="flex py-[100px] flex-col gap-5">
              <img
                className="w-full"
                src={bibelStudieImg.src}
                alt="bibelStudieImg"
              />
              <h1
                className="primaryLight text-slate-50 uppercase"
                style={{
                  fontSize: "calc(clamp(1.75em, 2.3vw, 2.5em) * 1.125)",
                }}
              >
                Bibelstudie
              </h1>
              <hr className="opacity-50" />
              <button className="btn btn-neutral btn-wide">Les mer</button>
            </li>

            <li className="flex py-[100px] flex-col gap-5">
              <img
                className="w-full"
                src={tjenesteKursImg.src}
                alt="tjenesteKursImg"
              />
              <h1
                className="primaryLight text-slate-50 uppercase"
                style={{
                  fontSize: "calc(clamp(1.75em, 2.3vw, 2.5em) * 1.125)",
                }}
              >
                Tjenestekurs
              </h1>
              <hr className="opacity-50" />
              <button className="btn btn-neutral btn-wide">Les mer</button>
            </li>

            <li className="flex py-[100px] flex-col gap-5">
              <img className="w-full" src={connectImg.src} alt="connectImg" />
              <h1
                className="primaryLight text-slate-50 uppercase"
                style={{
                  fontSize: "calc(clamp(1.75em, 2.3vw, 2.5em) * 1.125)",
                }}
              >
                Connect
              </h1>
              <hr className="opacity-50" />
              <button className="btn btn-neutral btn-wide">Les mer</button>
            </li>

            <li className="flex py-[100px] flex-col gap-5">
              <img className="w-full" src={dap.src} alt="dapImg" />
              <h1
                className="primaryLight text-slate-50 uppercase"
                style={{
                  fontSize: "calc(clamp(1.75em, 2.3vw, 2.5em) * 1.125)",
                }}
              >
                Dåp
              </h1>
              <hr className="opacity-50" />
              <button className="btn btn-neutral btn-wide">Les mer</button>
            </li>

            <li className="flex py-[100px] flex-col gap-5">
              <img className="w-full" src={bonn.src} alt="bønnImg" />
              <h1
                className="primaryLight text-slate-50 uppercase"
                style={{
                  fontSize: "calc(clamp(1.75em, 2.3vw, 2.5em) * 1.125)",
                }}
              >
                Bønn
              </h1>
              <hr className="opacity-50" />
              <button className="btn btn-neutral btn-wide">Les mer</button>
            </li>

            <li className="flex py-[100px] flex-col gap-5">
              <img
                className="w-full"
                src={dypereImg.src}
                alt="The Upper room Img"
              />
              <h1
                className="primaryLight text-slate-50 uppercase"
                style={{
                  fontSize: "calc(clamp(1.75em, 2.3vw, 2.5em) * 1.125)",
                }}
              >
                The upper room
              </h1>
              <hr className="opacity-50" />
              <button className="btn btn-neutral btn-wide">Les mer</button>
            </li>

            <li className="flex py-[100px] flex-col gap-5">
              <img
                className="w-full"
                src={evangelisering.src}
                alt="evangeliseringImg"
              />
              <h1
                className="primaryLight text-slate-50 uppercase"
                style={{
                  fontSize: "calc(clamp(1.75em, 2.3vw, 2.5em) * 1.125)",
                }}
              >
                Evangelisering
              </h1>
              <hr className="opacity-50" />
              <button className="btn btn-neutral btn-wide">Les mer</button>
            </li>

            <li className="flex py-[100px] flex-col gap-5">
              <img
                className="w-full"
                src={james.src}
                alt="James1:27Img"
              />
              <h1
                className="primaryLight text-slate-50 uppercase"
                style={{
                  fontSize: "calc(clamp(1.75em, 2.3vw, 2.5em) * 1.125)",
                }}
              >
                James 1:27 Ministry
              </h1>
              <hr className="opacity-50" />
              <button className="btn btn-neutral btn-wide">Les mer</button>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
