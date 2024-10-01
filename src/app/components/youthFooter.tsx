import Link from "next/link";
import YouthLogo from "../images/ShalomYouth-Logo.png";
import ThemeButtons from "./ThemeButtons";

export default function footer() {
  return (
    <main>
      <footer className="footer-container flex justify-center mt-[200px] items-center py-[100px] bg-[#0f0f0f]">
        <div className="w-full max-w-[1325px] px-[35px]">
          <nav className="footer-nav flex justify-between items-start pb-[100px]">
            <div className="flex flex-col leading-[100px]">
              <h1 className="primaryFontHeadings shalom-footer font-semibold text-slate-50 uppercase flex flex-col p-0 m-0 text-[100px]">
                Shalom{" "}
                <span className="Kelsi-outline oslo-footer text-slate-50 p-0 m-0 text-[100px]">
                  Oslo
                </span>
              </h1>
            </div>
            <div className="lenker-footer flex gap-10">
              <div className="lenker">
                <h1 className="primaryFontBold pb-3 text-slate-50 font-medium uppercase text-[20px]">
                  Lenker
                </h1>
                <p className="primaryFontRegular font-[600] text-slate-50 uppercase text-[15px] cursor-pointer hover:text-[#6d6d6d] hover:translate-y-[-3px] duration-100 ease-in-out">
                  <Link href="/shalomYouth">Hjem</Link>
                </p>
                <p className="primaryFontRegular font-[600] text-slate-50 uppercase text-[15px] cursor-pointer hover:text-[#6d6d6d] hover:translate-y-[-3px] duration-100 ease-in-out">
                  <Link href="/youthGrupper">Utrustning</Link>
                </p>
                <p className="primaryFontRegular font-[600] text-slate-50 uppercase text-[15px] cursor-pointer hover:text-[#6d6d6d] hover:translate-y-[-3px] duration-100 ease-in-out">
                  <Link href="/youthForms">Påmelding</Link>
                </p>
                <p className="primaryFontRegular font-[600] text-slate-50 uppercase text-[15px] cursor-pointer hover:text-[#6d6d6d] hover:translate-y-[-3px] duration-100 ease-in-out">
                  <Link href="/YouthOmOss">Om Oss</Link>
                </p>
                <p className="primaryFontRegular font-[600] text-slate-50 uppercase text-[15px] cursor-pointer hover:text-[#6d6d6d] hover:translate-y-[-3px] duration-100 ease-in-out">
                  <Link href="/youthKontakt">Kontakt</Link>
                </p>
              </div>
              <div className="adresse">
                <h1 className="primaryFontBold pb-3 text-slate-50 font-medium uppercase text-[20px]">
                  Adresse
                </h1>
                <p className="primaryFontRegular font-[600] text-slate-50 uppercase text-[15px]">
                  Norway
                  <br />
                  St. Olavs gate 24
                  <br />
                  0166, Oslo
                </p>
              </div>
              <div className="Gudstjenester">
                <h1 className="primaryFontBold pb-3 text-slate-50 font-medium uppercase text-[20px]">
                  Gudstjenester
                </h1>
                <p className="primaryFontRegular font-[600] text-slate-50 uppercase text-[15px]">
                  Hver Lørdag
                  <br />
                  kl: 16:00 - 19:00
                </p>
              </div>
              <div className="kontakt">
                <h1 className="primaryFontBold pb-3 text-slate-50 font-medium uppercase text-[20px]">
                  Kontakt
                </h1>
                <p className="primaryFontRegular font-[600] text-slate-50 uppercase text-[15px]">
                  ShalomOslo@gmail.com
                </p>
              </div>
            </div>
          </nav>
          <hr className="opacity-25" />
          <div className="footer-footer flex justify-between items-center py-3">
            <div className="flex gap-5">
              <div className="scroll-container">
                <p className="primaryFontRegular font-[600] scroll-holder text-slate-50 hover:text-[#6d6d6d] hover:translate-y-[-3px] duration-100 ease-in-out cursor-pointer">
                  © Shalomoslo 2024. All rights reserved.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <ThemeButtons />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
