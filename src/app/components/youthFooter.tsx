import Link from "next/link";
import YouthLogo from "../images/ShalomYouth-Logo.png";

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
            <div className="flex items-center gap-3">
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
                href="https://www.instagram.com/shalomyouthoslo/?hl=en"
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
              <div className="flex items-center gap-5 border-[1px] border-slate-50 p-2 rounded-full">
                <svg
                  data-testid="geist-icon"
                  height="16"
                  stroke-linejoin="round"
                  viewBox="0 0 16 16"
                  width="16"
                  className="hover:translate-y-[-3px] duration-100 ease-in-out cursor-pointer size-[20px] text-slate-50"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.75 0.75V0H7.25V0.75V2V2.75H8.75V2V0.75ZM11.182 3.75732L11.7123 3.22699L12.0659 2.87344L12.5962 2.34311L13.6569 3.40377L13.1265 3.9341L12.773 4.28765L12.2426 4.81798L11.182 3.75732ZM8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5ZM8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12ZM13.25 7.25H14H15.25H16V8.75H15.25H14H13.25V7.25ZM0.75 7.25H0V8.75H0.75H2H2.75V7.25H2H0.75ZM2.87348 12.0659L2.34315 12.5962L3.40381 13.6569L3.93414 13.1265L4.28769 12.773L4.81802 12.2426L3.75736 11.182L3.22703 11.7123L2.87348 12.0659ZM3.75735 4.81798L3.22702 4.28765L2.87347 3.9341L2.34314 3.40377L3.4038 2.34311L3.93413 2.87344L4.28768 3.22699L4.81802 3.75732L3.75735 4.81798ZM12.0659 13.1265L12.5962 13.6569L13.6569 12.5962L13.1265 12.0659L12.773 11.7123L12.2426 11.182L11.182 12.2426L11.7123 12.773L12.0659 13.1265ZM8.75 13.25V14V15.25V16H7.25V15.25V14V13.25H8.75Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <svg
                  data-testid="geist-icon"
                  height="16"
                  stroke-linejoin="round"
                  viewBox="0 0 16 16"
                  width="16"
                  className="hover:translate-y-[-3px] duration-100 ease-in-out cursor-pointer size-[20px] text-slate-50"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.5 8.00005C1.5 5.53089 2.99198 3.40932 5.12349 2.48889C4.88136 3.19858 4.75 3.95936 4.75 4.7501C4.75 8.61609 7.88401 11.7501 11.75 11.7501C11.8995 11.7501 12.048 11.7454 12.1953 11.7361C11.0955 13.1164 9.40047 14.0001 7.5 14.0001C4.18629 14.0001 1.5 11.3138 1.5 8.00005ZM6.41706 0.577759C2.78784 1.1031 0 4.22536 0 8.00005C0 12.1422 3.35786 15.5001 7.5 15.5001C10.5798 15.5001 13.2244 13.6438 14.3792 10.9921L13.4588 9.9797C12.9218 10.155 12.3478 10.2501 11.75 10.2501C8.71243 10.2501 6.25 7.78767 6.25 4.7501C6.25 3.63431 6.58146 2.59823 7.15111 1.73217L6.41706 0.577759ZM13.25 1V1.75V2.75L14.25 2.75H15V4.25H14.25H13.25V5.25V6H11.75V5.25V4.25H10.75L10 4.25V2.75H10.75L11.75 2.75V1.75V1H13.25Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
