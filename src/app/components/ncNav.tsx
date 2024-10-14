"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import NcLogo from "../images/shalom_snc_logo (1).png";

export default function TestNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle screen width changes
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main>
      {/* Mobile Menu for screens smaller than 768px */}
      {menuOpen && isMobile && (
        <div className="navigation-menu-mobile w-full h-full bg-[#111] fixed bottom-0 z-50 flex flex-col justify-between">
          <nav className="w-full py-[50px] px-[25px]">
            <div className="flex justify-end items-center">
              <button
                className="primaryFontRegular text-slate-50 uppercase text-[15px]"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="py-10 flex flex-col gap-2">
              <Link
                className="PrimaryFontHeadings font-medium flex justify-between items-center"
                href="/shalomNewCreation"
              >
                <h1
                  className="text-slate-50 uppercase hover:translate-x-[10px] duration-150 ease-in-out"
                  style={{ fontSize: "clamp(25px, 5vw, 65px)" }}
                >
                  hjem
                </h1>
              </Link>
              <Link
                className="PrimaryFontHeadings font-medium flex justify-between items-center"
                href="/NewCreationGrupper"
              >
                <h1
                  className="text-slate-50 uppercase hover:translate-x-[10px] duration-150 ease-in-out"
                  style={{ fontSize: "clamp(25px, 5vw, 65px)" }}
                >
                  Utrustning
                </h1>
              </Link>
              <Link
                className="PrimaryFontHeadings font-medium flex justify-between items-center"
                href="/NewCreationForms"
              >
                <h1
                  className="text-slate-50 uppercase hover:translate-x-[10px] duration-150 ease-in-out"
                  style={{ fontSize: "clamp(25px, 5vw, 65px)" }}
                >
                  Påmelding
                </h1>
              </Link>
              <Link
                className="PrimaryFontHeadings font-medium flex justify-between items-center"
                href="/NewCreationOmOss"
              >
                <h1
                  className="text-slate-50 uppercase hover:translate-x-[10px] duration-150 ease-in-out"
                  style={{ fontSize: "clamp(25px, 5vw, 65px)" }}
                >
                  Om Oss
                </h1>
              </Link>
              <Link
                className="PrimaryFontHeadings font-medium flex justify-between items-center"
                href="/NewCreationKontakt"
              >
                <h1
                  className="text-slate-50 uppercase hover:translate-x-[10px] duration-150 ease-in-out"
                  style={{ fontSize: "clamp(25px, 5vw, 65px)" }}
                >
                  Kontakt
                </h1>
              </Link>
              {/* Other Links */}
            </div>
          </nav>
          <div className="w-full p-[25px]">
            <nav className="flex items-center gap-3 py-5">
              <p className="Onest-Light uppercase font-light text-slate-50 underline text-[12px]">
                <Link
                  target="_blank"
                  href="https://www.youtube.com/@shalomyouth_newcreation"
                >
                  Youtube
                </Link>
              </p>
              <p className="Onest-Light uppercase font-light text-slate-50 underline text-[12px]">
                <Link
                  target="_blank"
                  href="https://www.instagram.com/shalomnewcreation/?hl=en"
                >
                  Instagram
                </Link>
              </p>
            </nav>
            <div className="w-full">
              <Link href="/">
                <button className="primaryFontHeadings rounded-full font-bold btn w-full px-10 border-none text-slate-50 uppercase bg-[#2b80ff] hover:bg-[#4d8cea] hover:translate-y-[-5px] duration-150 ease-in-out">
                  fellesskap
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      <nav>
        <div className="nav-header flex justify-between items-center p-[50px] pt-[75px]">
          <Link href="/shalomNewCreation">
            <img
              className="w-full max-w-[150px]"
              src={NcLogo.src}
              alt="YouthLogo"
            />
          </Link>

          <div className="relative">
            <button
              onClick={toggleMenu}
              className="flex items-center gap-2 border-[2px] border-[#111111] bg-[#111111] px-[20px] py-[8px] rounded-[16px] hover:scale-[99%] duration-150 ease-in-out"
            >
              <p
                className="font-medium text-slate-50"
                style={{ fontSize: "clamp(15px, 3vw, 20px)" }}
              >
                {menuOpen ? "Close" : "Menu"}
              </p>
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 text-slate-50"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 text-slate-50"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                    clip-rule="evenodd"
                  />
                </svg>
              )}
            </button>

            {/* Show desktop menu if larger than 768px */}
            {menuOpen && !isMobile && (
              <div className="Menu-wrapper">
                <div className="Menu absolute right-0 mt-2 w-[375px] h-auto border-[1px] border-[#111111] border-opacity-[25%] p-5 py-[1.5rem] rounded-[16px] bg-[#111111] z-10">
                  <Link
                    href="/NewCreationGrupper"
                    className="flex justify-between items-center my-2 hover:scale-[99%] duration-150 ease-in-out hover:bg-[#1f1f1f] hover:text-slate-50 rounded-[8px] p-3"
                  >
                    <p className="primaryFontRegular flex  items-center gap-2 text-[20px] text-slate-50">
                      Utrustning
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4 text-slate-50"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="/NewCreationForms"
                    className="flex justify-between items-center my-2 hover:scale-[99%] duration-150 ease-in-out hover:bg-[#1f1f1f] hover:text-slate-50 rounded-[8px] p-3"
                  >
                    <p className="primaryFontRegular flex  items-center gap-2 text-[20px] text-slate-50">
                      Påmelding
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4 text-slate-50"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="/NewCreationOmOss"
                    className="flex justify-between items-center my-2 hover:scale-[99%] duration-150 ease-in-out hover:bg-[#1f1f1f] hover:text-slate-50 rounded-[8px] p-3"
                  >
                    <p className="primaryFontRegular flex  items-center gap-2 text-[20px] text-slate-50">
                      Om Oss
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4 text-slate-50"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="/NewCreationKontakt"
                    className="flex justify-between items-center my-2 hover:scale-[99%] duration-150 ease-in-out hover:bg-[#1f1f1f] hover:text-slate-50 rounded-[8px] p-3"
                  >
                    <p className="primaryFontRegular flex  items-center gap-2 text-[20px] text-slate-50">
                      Kontakt
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4 text-slate-50"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </Link>
                  <div className="flex gap-2 mt-3">
                    <Link href="/" className="w-full">
                      <button
                        className="bg-[#ffffff] w-full p-[11px] my-2 rounded-[8px] text-[#111111] hover:scale-[99%] duration-150 ease-in-out hover:bg-[#1f1f1f] hover:text-slate-50"
                        id="button"
                      >
                        <Link href="/">Felleskap</Link>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </main>
  );
}
