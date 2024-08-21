import Link from "next/link";

export default function footer() {
  return (
    <main>
      <footer className="footer-container flex justify-center mt-[200px] items-center py-[100px] bg-[#0f0f0f]">
        <div className="w-full max-w-[1325px] px-[35px]">
          <nav className="footer-nav flex justify-between items-start pb-[100px]">
            <div className="flex flex-col leading-[100px]">
              <h1 className="primaryFontHeadings Nc-shalom-footer font-semibold text-slate-50 uppercase flex flex-col p-0 m-0 text-[100px] leading-none">
                New{" "}
                <span className="Kelsi-outline Nc-oslo-footer text-slate-50 p-0 m-0 text-[100px]">
                  Creation
                </span>
              </h1>
            </div>
            <div className="lenker-footer flex gap-10">
              <div className="lenker">
                <h1 className="primaryFontBold pb-3 text-slate-50 font-medium uppercase text-[20px]">
                  Lenker
                </h1>
                <p className="primaryFontRegular font-[600] text-slate-50 uppercase text-[15px] cursor-pointer hover:text-[#6d6d6d] hover:translate-y-[-3px] duration-100 ease-in-out">
                  <Link href="/NewCreationGrupper">Utrustning</Link>
                </p>
                <p className="primaryFontRegular font-[600] text-slate-50 uppercase text-[15px] cursor-pointer hover:text-[#6d6d6d] hover:translate-y-[-3px] duration-100 ease-in-out">
                  <Link href="/NewCreationForms">Påmelding</Link>
                </p>
                <p className="primaryFontRegular font-[600] text-slate-50 uppercase text-[15px] cursor-pointer hover:text-[#6d6d6d] hover:translate-y-[-3px] duration-100 ease-in-out">
                  <Link href="/NewCreationOmOss">Om Oss</Link>
                </p>
                <p className="primaryFontRegular font-[600] text-slate-50 uppercase text-[15px] cursor-pointer hover:text-[#6d6d6d] hover:translate-y-[-3px] duration-100 ease-in-out">
                  <Link href="/NewCreationKontakt">Kontakt</Link>
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
                  Hver søndag 
                  <br />
                  kl: 18:30 - 21:00
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
                <p className="primaryFontRegular font-[600] scroll-holder  text-slate-50 hover:text-[#6d6d6d] hover:translate-y-[-3px] duration-100 ease-in-out cursor-pointer">
                  Design by Asjer
                </p>
              </div>
              <div className="scroll-container">
                <p className="primaryFontRegular font-[600] scroll-holder text-slate-50 hover:text-[#6d6d6d] hover:translate-y-[-3px] duration-100 ease-in-out cursor-pointer">
                  Code Asjer
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Link
                target="_blank"
                href="https://www.youtube.com/@shalomyouth_newcreation"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  className="hover:translate-y-[-3px] duration-100 ease-in-out cursor-pointer"
                >
                  <path
                    d="M15 4C10.814 4 5.38086 5.04883 5.38086 5.04883L5.36719 5.06445C3.46066 5.36936 2 7.00762 2 9V15V15.002V21V21.002C2.00186 21.9535 2.34287 22.8732 2.9618 23.5959C3.58073 24.3187 4.43703 24.7971 5.37695 24.9453L5.38086 24.9512C5.38086 24.9512 10.814 26.002 15 26.002C19.186 26.002 24.6191 24.9512 24.6191 24.9512L24.6211 24.9492C25.562 24.8013 26.4193 24.3225 27.0387 23.5989C27.6581 22.8753 27.999 21.9544 28 21.002V21V15.002V15V9C27.9986 8.04813 27.6578 7.12795 27.0388 6.40481C26.4199 5.68166 25.5633 5.20295 24.623 5.05469L24.6191 5.04883C24.6191 5.04883 19.186 4 15 4ZM12 10.3984L20 15L12 19.6016V10.3984Z"
                    fill="#FDFDFD"
                  />
                </svg>
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/shalomnewcreation/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  className="hover:translate-y-[-3px] duration-100 ease-in-out cursor-pointer"
                >
                  <path
                    d="M15 4.75C18.3375 4.75 18.7325 4.7625 20.0513 4.8225C20.8446 4.83113 21.6305 4.97572 22.375 5.25C22.9149 5.45783 23.4053 5.77658 23.8143 6.18566C24.2234 6.59475 24.5422 7.08508 24.75 7.625C25.0248 8.36851 25.1703 9.15362 25.18 9.94625C25.235 11.2675 25.25 11.6625 25.25 15C25.25 18.3375 25.2375 18.7325 25.1775 20.0513C25.1689 20.8446 25.0243 21.6305 24.75 22.375C24.5422 22.9149 24.2234 23.4053 23.8143 23.8143C23.4053 24.2234 22.9149 24.5422 22.375 24.75C21.6315 25.0248 20.8464 25.1703 20.0537 25.18C18.7362 25.24 18.34 25.2525 15.0025 25.2525C11.665 25.2525 11.2687 25.24 9.95125 25.18C9.15694 25.1709 8.37009 25.0254 7.625 24.75C7.08508 24.5422 6.59475 24.2234 6.18566 23.8143C5.77658 23.4053 5.45783 22.9149 5.25 22.375C4.97515 21.6315 4.82971 20.8464 4.82 20.0537C4.765 18.7325 4.75 18.3375 4.75 15C4.75 11.6625 4.7625 11.2675 4.8225 9.94875C4.83113 9.15543 4.97572 8.36945 5.25 7.625C5.45783 7.08508 5.77658 6.59475 6.18566 6.18566C6.59475 5.77658 7.08508 5.45783 7.625 5.25C8.3696 4.97658 9.15557 4.83283 9.94875 4.825C11.2675 4.765 11.6625 4.75 15 4.75ZM15 2.5C11.605 2.5 11.18 2.515 9.84625 2.575C8.80946 2.59627 7.78373 2.79279 6.8125 3.15625C5.98172 3.4769 5.22723 3.96785 4.59754 4.59754C3.96785 5.22723 3.4769 5.98172 3.15625 6.8125C2.79279 7.78373 2.59627 8.80946 2.575 9.84625C2.515 11.18 2.5 11.605 2.5 15C2.5 18.395 2.515 18.82 2.575 20.1537C2.59627 21.1905 2.79279 22.2163 3.15625 23.1875C3.4769 24.0183 3.96785 24.7728 4.59754 25.4025C5.22723 26.0322 5.98172 26.5231 6.8125 26.8438C7.78373 27.2072 8.80946 27.4037 9.84625 27.425C11.18 27.4863 11.605 27.5 15 27.5C18.395 27.5 18.82 27.4863 20.1537 27.425C21.1905 27.4037 22.2163 27.2072 23.1875 26.8438C24.0183 26.5231 24.7728 26.0322 25.4025 25.4025C26.0322 24.7728 26.5231 24.0183 26.8438 23.1875C27.2072 22.2163 27.4037 21.1905 27.425 20.1537C27.485 18.82 27.5 18.395 27.5 15C27.5 11.605 27.485 11.18 27.425 9.84625C27.4037 8.80946 27.2072 7.78373 26.8438 6.8125C26.5231 5.98172 26.0322 5.22723 25.4025 4.59754C24.7728 3.96785 24.0183 3.4769 23.1875 3.15625C22.2163 2.79279 21.1905 2.59627 20.1537 2.575C18.82 2.515 18.395 2.5 15 2.5Z"
                    fill="#FDFDFD"
                  />
                  <path
                    d="M15.0001 8.58124C13.7305 8.58124 12.4895 8.95769 11.434 9.66299C10.3784 10.3683 9.55572 11.3708 9.0699 12.5436C8.58408 13.7165 8.45697 15.0071 8.70464 16.2522C8.95231 17.4973 9.56363 18.6411 10.4613 19.5387C11.359 20.4364 12.5027 21.0477 13.7478 21.2954C14.9929 21.5431 16.2835 21.416 17.4564 20.9301C18.6293 20.4443 19.6317 19.6216 20.337 18.5661C21.0423 17.5105 21.4188 16.2695 21.4188 15C21.4188 13.2976 20.7425 11.665 19.5388 10.4612C18.335 9.2575 16.7024 8.58124 15.0001 8.58124ZM15.0001 19.1662C14.176 19.1662 13.3705 18.9219 12.6854 18.4641C12.0003 18.0063 11.4663 17.3556 11.1509 16.5943C10.8356 15.8331 10.7531 14.9954 10.9139 14.1872C11.0746 13.379 11.4714 12.6367 12.0541 12.054C12.6367 11.4713 13.3791 11.0745 14.1873 10.9138C14.9954 10.753 15.8331 10.8355 16.5944 11.1509C17.3557 11.4662 18.0064 12.0002 18.4642 12.6853C18.922 13.3705 19.1663 14.176 19.1663 15C19.1663 16.1049 18.7274 17.1646 17.946 17.946C17.1647 18.7273 16.105 19.1662 15.0001 19.1662Z"
                    fill="#FDFDFD"
                  />
                  <path
                    d="M21.6725 9.82751C22.5009 9.82751 23.1725 9.15594 23.1725 8.32752C23.1725 7.49909 22.5009 6.82751 21.6725 6.82751C20.8441 6.82751 20.1725 7.49909 20.1725 8.32752C20.1725 9.15594 20.8441 9.82751 21.6725 9.82751Z"
                    fill="#FDFDFD"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
