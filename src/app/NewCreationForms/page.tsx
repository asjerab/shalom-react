import Link from "next/link";
import NcNav from "../components/ncNav";
import NcFooter from "../components/NcFooter";

export default function youthPåmelding() {
  return (
    <main>
      <NcNav />
      <section className="påmelding-wrapper flex justify-center items-center py-[50px] px-[35px]">
        <div className="w-full">
          <div className="flex flex-col gap-10">
            <h1
              className="primaryFontBold text-slate-50 leading-none"
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

          <div className="py-[50px]">
            <Link href="/NcCustomForm?formId=bibelstudieNewCreation">
              <div className="påmeldingHome flex justify-between items-center bg-[#141414] px-10 py-14 rounded-[18px] my-6 hover:px-9 duration-150 ease-in-out">
                {" "}
                <h1 className="påmeldingTitle primaryFontRegular font-[600] text-slate-50 text-[25px]">
                  Bibelstudie
                </h1>
                <div className="cursor-pointer bg-[#222] p-[10px] rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_20)">
                      <path
                        d="M0.789551 0.78949L14.2106 14.2105M14.2106 14.2105V2.38659M14.2106 14.2105H2.38666"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_20">
                        <rect width="15" height="15" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/NcCustomForm?formId=tjenestekurs">
              <div className="påmeldingHome flex justify-between items-center bg-[#141414] px-10 py-14 rounded-[18px] my-6 hover:px-9 duration-150 ease-in-out">
                {" "}
                <h1 className="påmeldingTitle primaryFontRegular font-[600] text-slate-50 text-[25px]">
                  Tjenestekurs
                </h1>
                <div className="cursor-pointer bg-[#222] p-[10px] rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_20)">
                      <path
                        d="M0.789551 0.78949L14.2106 14.2105M14.2106 14.2105V2.38659M14.2106 14.2105H2.38666"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_20">
                        <rect width="15" height="15" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/NcCustomForm?formId=connectNewCreation">
              <div className="påmeldingHome flex justify-between items-center bg-[#141414] px-10 py-14 rounded-[18px] my-6 hover:px-9 duration-150 ease-in-out">
                {" "}
                <h1 className="påmeldingTitle primaryFontRegular font-[600] text-slate-50 text-[25px]">
                  Connect
                </h1>
                <div className="cursor-pointer bg-[#222] p-[10px] rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_20)">
                      <path
                        d="M0.789551 0.78949L14.2106 14.2105M14.2106 14.2105V2.38659M14.2106 14.2105H2.38666"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_20">
                        <rect width="15" height="15" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/NcCustomForm?formId=alphakursNewCreation">
              <div className="påmeldingHome flex justify-between items-center bg-[#141414] px-10 py-14 rounded-[18px] my-6 hover:px-9 duration-150 ease-in-out">
                {" "}
                <h1 className="påmeldingTitle primaryFontRegular font-[600]  text-slate-50 text-[25px]">
                  Alphakurs
                </h1>
                <div className="cursor-pointer bg-[#222] p-[10px] rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_20)">
                      <path
                        d="M0.789551 0.78949L14.2106 14.2105M14.2106 14.2105V2.38659M14.2106 14.2105H2.38666"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_20">
                        <rect width="15" height="15" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/NcCustomForm?formId=daap">
              <div className="påmeldingHome flex justify-between items-center bg-[#141414] px-10 py-14 rounded-[18px] my-6 hover:px-9 duration-150 ease-in-out">
                {" "}
                <h1 className="påmeldingTitle primaryFontRegular font-[600] text-slate-50 text-[25px]">
                  Dåp
                </h1>
                <div className="cursor-pointer bg-[#222] p-[10px] rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_20)">
                      <path
                        d="M0.789551 0.78949L14.2106 14.2105M14.2106 14.2105V2.38659M14.2106 14.2105H2.38666"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_20">
                        <rect width="15" height="15" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/NcCustomForm?formId=dyperekursNewCreation">
              <div className="påmeldingHome flex justify-between items-center bg-[#141414] px-10 py-14 rounded-[18px] my-6 hover:px-9 duration-150 ease-in-out">
                {" "}
                <h1 className="påmeldingTitle primaryFontRegular font-[600] text-slate-50 text-[25px]">
                  The upper room
                </h1>
                <div className="cursor-pointer bg-[#222] p-[10px] rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_20)">
                      <path
                        d="M0.789551 0.78949L14.2106 14.2105M14.2106 14.2105V2.38659M14.2106 14.2105H2.38666"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_20">
                        <rect width="15" height="15" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <NcFooter />
    </main>
  );
}