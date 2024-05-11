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
          <button className="btn btn-lg btn-active btn-neutral my-10">Flere grupper</button>
        </div>
      </div>
    </main>
  );
}
