import Link from "next/link";

export default function PaameldingHome() {
  return (
    <main>
      <section className="flex justify-center items-center py-[150px] px-[35px]">
        <div className="w-full max-w-[1325px]">
          <div className="w-full h-[2px] bg-[#67686c]"></div>
          <div className="flex justify-between items-center py-[75px]  hover:scale-[98.5%] duration-150">
            <h1
              className="primaryBold text-slate-50 uppercase"
              style={{ fontSize: "clamp(30px, 5vw, 50px)" }}
            >
              Connect
            </h1>
            <Link href="">
              <button className="btn">Meld deg</button>
            </Link>
          </div>

          <div className="w-full h-[2px] bg-[#67686c]"></div>

          <div className="flex justify-between items-center py-[75px]  hover:scale-[98.5%] duration-150">
            <h1
              className="primaryBold text-slate-50 uppercase"
              style={{ fontSize: "clamp(30px, 5vw, 50px)" }}
            >
              Bibelstudie
            </h1>
            <Link href="">
              <button className="btn">Meld deg</button>
            </Link>
          </div>

          <div className="w-full h-[2px] bg-[#67686c]"></div>

          <div className="flex justify-between items-center py-[75px]  hover:scale-[98.5%] duration-150">
            <h1
              className="primaryBold text-slate-50 uppercase"
              style={{ fontSize: "clamp(30px, 5vw, 50px)" }}
            >
              Tjenestekurs
            </h1>
            <Link href="">
              <button className="btn">Meld deg</button>
            </Link>
          </div>

          <div className="w-full h-[2px] bg-[#67686c]"></div>
        </div>
      </section>
    </main>
  );
}
