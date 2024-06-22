import Link from "next/link";

export default function PaameldingHome() {
  return (
    <main>
      <section className="flex justify-center items-center py-[100px] px-[25px]">
        <div className="w-full max-w-[1325px] flex flex-col">
          <h1
            className="primaryFontBold text-slate-50 font-[600] py-[15px] leading-[84px]"
            style={{ fontSize: "clamp(36px, 12vw, 80px)" }}
          >
            Påmelding.
          </h1>{" "}
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSesbn9kHSXX_Yb5uK5ovpKd9xiZ57p5DGpClDozOTZma3ZgrQ/viewform">
            <div className="påmeldingHome flex justify-between items-center bg-[#141414] px-10 py-14 rounded-[28px] my-3 hover:px-8 duration-150 ease-in-out">
              <h1 className="påmeldingTitle  primaryFontRegular font-[600] text-slate-50 text-[25px]">
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
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdDbsu-p-7rR353roJfZuUF-l8oNqjkdHXiT8WY2y9E3kZ7Bw/viewform">
            <div className="påmeldingHome flex justify-between items-center bg-[#141414] px-10 py-14 rounded-[28px] my-3 hover:px-8 duration-150 ease-in-out">
              <h1 className="påmeldingTitle  primaryFontRegular font-[600] text-slate-50 text-[25px]">
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
            <div className="påmeldingHome flex justify-between items-center bg-[#141414] px-10 py-14 rounded-[28px] my-3 hover:px-8 duration-150 ease-in-out">
              <h1 className="påmeldingTitle  primaryFontRegular font-[600] text-slate-50 text-[25px]">
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
          <div className="påmeldingHomeInfoContainer flex gap-16 justify-between items-center my-14">
            <p
              className="primaryFontRegular text-slate-50 max-w-[600px]"
              style={{ fontSize: "clamp(14px, 4vw, 22px)" }}
            >
              Trykk på "Alle påmeldinger" for og hente fram flere påmeldinger du
              kan melde deg på.
            </p>
            <Link href="/youthForms">
              <button className="btn btn-wide rounded-xl bg-[#222222] text-slate-50 border-none hover:bg-[#1a1a1a]">
                Alle påmeldinger
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
