import Link from "next/link";
import TestNav from "../components/youthNav";
import Footer from "../components/footer";
import Loading from "../components/loading";

export default function youthPåmelding() {
  return (
    <main>
      <Loading />
      <TestNav />
      <section className="påmelding-wrapper flex justify-center items-center py-[50px] px-[35px]">
        <div className="w-full">
          <div className="mb-10">
            <h1
              className="primaryFontBold text-slate-50"
              style={{ fontSize: "clamp(50px, 10vw, 200px)" }}
            >
              Påmelding.
            </h1>
            <p
              className="primaryFontRegular text-slate-50 max-w-[700px]"
              style={{ fontSize: "clamp(15px, 2vw, 25px)" }}
            >
              Her kan du enkelt melde deg på det du ønsker. Når du har meldt deg
              på, vil vi ta kontakt med deg.
            </p>
          </div>

          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdDbsu-p-7rR353roJfZuUF-l8oNqjkdHXiT8WY2y9E3kZ7Bw/viewform">
            <div className="påmeldingHome flex justify-between items-center bg-[#141414] px-10 py-14 rounded-[28px] my-6 hover:px-8 duration-150 ease-in-out">
              <h1 className="påmeldingTitle primaryFontRegular font-[600] text-slate-50 text-[25px]">
                Bibelstudie
              </h1>
              <div className="cursor-pointer bg-[#222] p-[10px] rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                >
                  <path
                    d="M9.41016 1L9.39416 1.35542C9.24294 4.71458 11.9339 7.51649 15.2964 7.50107V7.50107"
                    stroke="white"
                  />
                  <path
                    d="M9.39948 13.5796L9.37532 13.26C9.13452 10.0735 11.7279 7.39057 14.9207 7.52302V7.52302"
                    stroke="white"
                  />
                  <line y1="7.5" x2="14" y2="7.5" stroke="white" />
                </svg>
              </div>
            </div>
          </Link>

          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSerL_wsSXphDQfwW-WZY9al7T8Ply6C9yRb-DSES4a2Ds0dfA/viewform">
            <div className="påmeldingHome flex justify-between items-center bg-[#141414] px-10 py-14 rounded-[28px] my-6 hover:px-8 duration-150 ease-in-out">
              <h1 className="påmeldingTitle primaryFontRegular font-[600] text-slate-50 text-[25px]">
                Tjenestekurs
              </h1>
              <div className="cursor-pointer bg-[#222] p-[10px] rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                >
                  <path
                    d="M9.41016 1L9.39416 1.35542C9.24294 4.71458 11.9339 7.51649 15.2964 7.50107V7.50107"
                    stroke="white"
                  />
                  <path
                    d="M9.39948 13.5796L9.37532 13.26C9.13452 10.0735 11.7279 7.39057 14.9207 7.52302V7.52302"
                    stroke="white"
                  />
                  <line y1="7.5" x2="14" y2="7.5" stroke="white" />
                </svg>
              </div>
            </div>
          </Link>

          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSesbn9kHSXX_Yb5uK5ovpKd9xiZ57p5DGpClDozOTZma3ZgrQ/viewform">
            <div className="påmeldingHome flex justify-between items-center bg-[#141414] px-10 py-14 rounded-[28px] my-6 hover:px-8 duration-150 ease-in-out">
              <h1 className="påmeldingTitle primaryFontRegular font-[600] text-slate-50 text-[25px]">
                Connect
              </h1>
              <div className="cursor-pointer bg-[#222] p-[10px] rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                >
                  <path
                    d="M9.41016 1L9.39416 1.35542C9.24294 4.71458 11.9339 7.51649 15.2964 7.50107V7.50107"
                    stroke="white"
                  />
                  <path
                    d="M9.39948 13.5796L9.37532 13.26C9.13452 10.0735 11.7279 7.39057 14.9207 7.52302V7.52302"
                    stroke="white"
                  />
                  <line y1="7.5" x2="14" y2="7.5" stroke="white" />
                </svg>
              </div>
            </div>
          </Link>

          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdxWO95fkpaN8Y5My2L3Ii5lCKK49Q910fl9HXcR9JsASCjOg/viewform">
            <div className="påmeldingHome flex justify-between items-center bg-[#141414] px-10 py-14 rounded-[28px] my-6 hover:px-8 duration-150 ease-in-out">
              <h1 className="påmeldingTitle primaryFontRegular font-[600]  text-slate-50 text-[25px]">
                Alphakurs
              </h1>
              <div className="cursor-pointer bg-[#222] p-[10px] rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                >
                  <path
                    d="M9.41016 1L9.39416 1.35542C9.24294 4.71458 11.9339 7.51649 15.2964 7.50107V7.50107"
                    stroke="white"
                  />
                  <path
                    d="M9.39948 13.5796L9.37532 13.26C9.13452 10.0735 11.7279 7.39057 14.9207 7.52302V7.52302"
                    stroke="white"
                  />
                  <line y1="7.5" x2="14" y2="7.5" stroke="white" />
                </svg>
              </div>
            </div>
          </Link>

          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdWBP7yJddqmqgW5XaienN-GCqKIykNCsh3NPig-9UnIFVbmw/viewform">
            <div className="påmeldingHome flex justify-between items-center bg-[#141414] px-10 py-14 rounded-[28px] my-6 hover:px-8 duration-150 ease-in-out">
              <h1 className="påmeldingTitle primaryFontRegular font-[600] text-slate-50 text-[25px]">
                Dåp
              </h1>
              <div className="cursor-pointer bg-[#222] p-[10px] rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                >
                  <path
                    d="M9.41016 1L9.39416 1.35542C9.24294 4.71458 11.9339 7.51649 15.2964 7.50107V7.50107"
                    stroke="white"
                  />
                  <path
                    d="M9.39948 13.5796L9.37532 13.26C9.13452 10.0735 11.7279 7.39057 14.9207 7.52302V7.52302"
                    stroke="white"
                  />
                  <line y1="7.5" x2="14" y2="7.5" stroke="white" />
                </svg>
              </div>
            </div>
          </Link>

          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfWrL9syVWMrORCbySCvHJ_2MkNWaAJ3vt4Mq2kQwbiamztYQ/viewform">
            <div className="påmeldingHome flex justify-between items-center bg-[#141414] px-10 py-14 rounded-[28px] my-6 hover:px-8 duration-150 ease-in-out">
              <h1 className="påmeldingTitle primaryFontRegular font-[600] text-slate-50 text-[25px]">
                The upper room
              </h1>
              <div className="cursor-pointer bg-[#222] p-[10px] rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                >
                  <path
                    d="M9.41016 1L9.39416 1.35542C9.24294 4.71458 11.9339 7.51649 15.2964 7.50107V7.50107"
                    stroke="white"
                  />
                  <path
                    d="M9.39948 13.5796L9.37532 13.26C9.13452 10.0735 11.7279 7.39057 14.9207 7.52302V7.52302"
                    stroke="white"
                  />
                  <line y1="7.5" x2="14" y2="7.5" stroke="white" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
