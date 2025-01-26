import Link from "next/link";
import NcNav from "../components/ncNav";
import NcFooter from "../components/NcFooter";
import Marquee from "../components/Marquee"


const NewCreationForm = [
  {
    formName: "Bibelstudie",
    href: "/NcCustomForm?formId=bibelstudieNewCreation",
  },
  { formName: "Tjenestekurs", href: "/NcCustomForm?formId=tjenestekurs" },
  { formName: "Connect", href: "/NcCustomForm?formId=connectNewCreation" },
  { formName: "Alphakurs", href: "/NcCustomForm?formId=alphakursNewCreation" },
  { formName: "Dåp", href: "/NcCustomForm?formId=daap" },
  {
    formName: "The upper room",
    href: "/NcCustomForm?formId=dyperekursNewCreation",
  },
];

export default function youthPåmelding() {
  return (
    <main>
      <Marquee />
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

          {NewCreationForm.map((form, index) => (
            <div key={index}>
              <Link href={form.href}>
                <div className="påmeldingHome flex justify-between items-center bg-[#141414] px-10 py-14 rounded-[18px] my-6 hover:px-9 duration-150 ease-in-out">
                  {" "}
                  <h1 className="påmeldingTitle primaryFontRegular font-[600] text-slate-50 text-[25px]">
                    {form.formName}
                  </h1>
                  <div className="cursor-pointer bg-[#222] p-[10px] rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1_20)">
                        <path
                          d="M0.789551 0.78949L14.2106 14.2105M14.2106 14.2105V2.38659M14.2106 14.2105H2.38666"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
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
          ))}
        </div>
      </section>
      <NcFooter />
    </main>
  );
}
