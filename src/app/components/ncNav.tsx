"use client";
import React, { useState } from "react";
import Link from "next/link";
import NcLogo from "../images/shalom_snc_logo (1).png";

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
                className="primaryFontRegular font-bold flex justify-between items-center"
                href="/shalomNewCreation"
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
                className="primaryFontRegular font-bold"
                href="/NewCreationGrupper"
              >
                <h1
                  className="text-slate-50 uppercase hover:translate-x-[10px] duration-150 ease-in-out"
                  style={{ fontSize: "clamp(25px, 5vw, 65px)" }}
                >
                  utrustning
                </h1>
              </Link>
              <Link className="primaryFontRegular font-bold" href="/NewCreationForms">
                <h1
                  className="text-slate-50 uppercase hover:translate-x-[10px] duration-150 ease-in-out"
                  style={{ fontSize: "clamp(25px, 5vw, 65px)" }}
                >
                  påmelding
                </h1>
              </Link>
              <Link className="primaryFontRegular font-bold" href="/">
                <h1
                  className="text-slate-50 uppercase hover:translate-x-[10px] duration-150 ease-in-out"
                  style={{ fontSize: "clamp(25px, 5vw, 65px)" }}
                >
                  om oss
                </h1>
              </Link>
              <Link
                className="primaryFontRegular font-bold"
                href="/NewCreationKontakt"
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
                <button className="primaryFontRegular font-bold btn btn-wide px-10 border-none text-slate-50 uppercase bg-[#2b80ff] hover:bg-[#4d8cea] hover:translate-y-[-5px] duration-150 ease-in-out">
                  fellesskap
                </button>
              </Link>
              <button className="primaryFontRegular font-bold btn   border-none text-slate-50 uppercase bg-[#2b80ff] hover:bg-[#4d8cea] hover:translate-y-[-5px] duration-150 ease-in-out">
                <Link href="/">
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
                </Link>
              </button>
            </div>
          </div>
        </div>
      )}
      <nav>
        <div className="nav">
          <div className="nav-header flex justify-between items-center p-[50px] pt-[75px]">
            <Link href="/shalomNewCreation">
              <img
                className="w-full max-w-[150px]"
                src={NcLogo.src}
                alt="NcLogo"
              />
            </Link>
            <div className="flex items-center gap-2">
              <Link className="scroll-container" href="/NewCreationGrupper">
                <p
                  className="hidden-nav-link scroll-holder primaryFontBold text-slate-50 text-[15px]"
                  data-text="UTRUSTNING"
                >
                  UTRUSTNING
                </p>
              </Link>
              <Link className="scroll-container" href="/NewCreationForms">
                <p className="hidden-nav-link scroll-holder primaryFontBold text-slate-50 text-[15px]">
                  PÅMELDING
                </p>
              </Link>
              <Link className="scroll-container" href="/">
                <p className="hidden-nav-link scroll-holder primaryFontBold text-slate-50 text-[15px]">
                  OM OSS
                </p>
              </Link>
              <Link className="scroll-container" href="/NewCreationKontakt">
                <p className="hidden-nav-link scroll-holder primaryFontBold text-slate-50 text-[15px]">
                  KONTAKT
                </p>
              </Link>
              <Link className="scroll-container" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="hidden-nav-link w-8 h-8 text-slate-50 cursor-pointer scroll-holder"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
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
