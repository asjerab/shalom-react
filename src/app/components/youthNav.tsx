"use client";
import React, { useState } from "react";
import Link from "next/link";
import YouthLogo from "../images/ShalomYouth-Logo.png";

export default function TestNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <main>
      {menuOpen && (
        <div className="navigation-menu-mobile w-full h-full bg-[#111] fixed bottom-0 z-50 flex flex-col justify-between">
          <nav className="w-full py-[50px] px-[25px]">
            <div className="flex justify-end items-center">
              <button
                className="primaryFontRegular text-slate-50 uppercase text-[15px]"
                onClick={toggleMenu}
              >
                [CLOSE]
              </button>
            </div>
            <div className="py-10 flex flex-col gap-2">
              <Link
                className="PrimaryFontHeadings font-medium flex justify-between items-center"
                href="/shalomYouth"
              >
                <h1
                  className="text-slate-50 uppercase hover:translate-x-[10px] duration-150 ease-in-out"
                  style={{ fontSize: "clamp(25px, 5vw, 65px)" }}
                >
                  hjem
                </h1>

                <p className="Kelsi-fill text-slate-50 text-[20px]">x</p>
              </Link>
              <Link
                className="PrimaryFontHeadings font-medium"
                href="/youthGrupper"
              >
                <h1
                  className="text-slate-50 uppercase hover:translate-x-[10px] duration-150 ease-in-out"
                  style={{ fontSize: "clamp(25px, 5vw, 65px)" }}
                >
                  utrustning
                </h1>
              </Link>
              <Link
                className="PrimaryFontHeadings font-medium"
                href="/youthForms"
              >
                <h1
                  className="text-slate-50 uppercase hover:translate-x-[10px] duration-150 ease-in-out"
                  style={{ fontSize: "clamp(25px, 5vw, 65px)" }}
                >
                  p<span className="primaryFontRegular">å</span>melding
                </h1>
              </Link>
              <Link
                className="PrimaryFontHeadings font-medium"
                href="/YouthOmOss"
              >
                <h1
                  className="text-slate-50 uppercase hover:translate-x-[10px] duration-150 ease-in-out"
                  style={{ fontSize: "clamp(25px, 5vw, 65px)" }}
                >
                  om oss
                </h1>
              </Link>
              <Link
                className="PrimaryFontHeadings font-medium "
                href="/youthKontakt"
              >
                <h1
                  className="text-slate-50 uppercase hover:translate-x-[10px] duration-150 ease-in-out"
                  style={{ fontSize: "clamp(25px, 5vw, 65px)" }}
                >
                  kontakt
                </h1>
              </Link>
            </div>
          </nav>
          <div className="w-full p-[25px]">
            <nav className="flex items-center gap-3 py-5">
              <p className="Onest-Light uppercase font-light text-slate-50 underline text-[12px]">
                <Link
                  target="_blank"
                  href="https://www.instagram.com/shalomyouthoslo/?hl=en"
                >
                  Instagram
                </Link>
              </p>
              <p className="text-slate-50">•</p>
              <p className="Onest-Light uppercase font-light text-slate-50 underline text-[12px]">
                <Link
                  target="_blank"
                  href="https://www.youtube.com/@shalomyouth_newcreation"
                >
                  Youtube
                </Link>
              </p>
            </nav>
            <div className="flex gap-3">
              <Link href="/">
                <button className="primaryFontHeadings rounded-full font-bold btn btn-wide px-10 border-none text-slate-50 uppercase bg-[#2b80ff] hover:bg-[#4d8cea] hover:translate-y-[-5px] duration-150 ease-in-out">
                  fellesskap
                </button>
              </Link>
              <button className="btn rounded-full border-none text-slate-50 uppercase bg-[#2b80ff] hover:bg-[#4d8cea] hover:translate-x-[5px] duration-150 ease-in-out ">
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
              </button>
            </div>
          </div>
        </div>
      )}
      <nav>
        <div className="nav">
          <div className="nav-header flex justify-between items-center p-[50px] pt-[75px]">
            <Link href="/shalomYouth">
              <img
                className="w-full max-w-[150px]"
                src={YouthLogo.src}
                alt="YouthLogo"
              />
            </Link>
            <div className="flex items-center gap-2">
              <Link className="scroll-container" href="/youthGrupper">
                <p
                  className="hidden-nav-link scroll-holder primaryFontHeadings text-slate-50 text-[17px]"
                  data-text="UTRUSTNING"
                >
                  UTRUSTNING
                </p>
              </Link>
              <Link className="scroll-container" href="/youthForms">
                <p className="hidden-nav-link scroll-holder primaryFontHeadings text-slate-50 text-[17px]">
                  PÅMELDING
                </p>
              </Link>
              <Link className="scroll-container" href="/YouthOmOss">
                <p className="hidden-nav-link scroll-holder primaryFontHeadings text-slate-50 text-[17px]">
                  OM OSS
                </p>
              </Link>
              <Link className="scroll-container" href="/youthKontakt">
                <p className="hidden-nav-link scroll-holder primaryFontHeadings text-slate-50 text-[17px]">
                  KONTAKT
                </p>
              </Link>
              <Link
                className="scroll-container bg-[#111] p-[16px] rounded-full hidden-nav-link"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 text-slate-50 cursor-pointer scroll-holder"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </Link>
              <svg
                onClick={toggleMenu}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="bar-nav hidden w-8 h-8 text-slate-50 cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
}
