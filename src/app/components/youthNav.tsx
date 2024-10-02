"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import YouthLogo from "../images/ShalomYouth-Logo.png";

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
              </Link>
              <Link
                className="PrimaryFontHeadings font-medium flex justify-between items-center"
                href="/youthGrupper"
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
                href="/youthForms"
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
                href="/YouthOmOss"
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
                href="/youthKontakt"
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
                  href="https://www.instagram.com/shalomyouthoslo/?hl=en"
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
          <Link href="/shalomYouth">
            <img
              className="w-full max-w-[150px]"
              src={YouthLogo.src}
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
                    href="/youthGrupper"
                    className="flex justify-between items-center my-2 hover:scale-[99%] duration-150 ease-in-out hover:bg-[#1f1f1f] hover:text-slate-50 rounded-[8px] p-3"
                  >
                    <p className="primaryFontRegular flex  items-center gap-2 text-[20px] text-slate-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6 text-slate-50"
                      >
                        <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                      </svg>
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
                    href="/youthForms"
                    className="flex justify-between items-center my-2 hover:scale-[99%] duration-150 ease-in-out hover:bg-[#1f1f1f] hover:text-slate-50 rounded-[8px] p-3"
                  >
                    <p className="primaryFontRegular flex  items-center gap-2 text-[20px] text-slate-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6 text-slate-50"
                      >
                        <path d="M19.906 9c.382 0 .749.057 1.094.162V9a3 3 0 0 0-3-3h-3.879a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H6a3 3 0 0 0-3 3v3.162A3.756 3.756 0 0 1 4.094 9h15.812ZM4.094 10.5a2.25 2.25 0 0 0-2.227 2.568l.857 6A2.25 2.25 0 0 0 4.951 21H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-2.227-2.568H4.094Z" />
                      </svg>
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
                    href="/YouthOmOss"
                    className="flex justify-between items-center my-2 hover:scale-[99%] duration-150 ease-in-out hover:bg-[#1f1f1f] hover:text-slate-50 rounded-[8px] p-3"
                  >
                    <p className="primaryFontRegular flex  items-center gap-2 text-[20px] text-slate-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6 text-slate-50"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z"
                          clip-rule="evenodd"
                        />
                      </svg>
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
                    href="/youthKontakt"
                    className="flex justify-between items-center my-2 hover:scale-[99%] duration-150 ease-in-out hover:bg-[#1f1f1f] hover:text-slate-50 rounded-[8px] p-3"
                  >
                    <p className="primaryFontRegular flex  items-center gap-2 text-[20px] text-slate-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6 text-slate-50"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                          clip-rule="evenodd"
                        />
                      </svg>
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
                        className="bg-[#ffffff] w-full p-[7px] my-2 rounded-[8px] text-[#111111] hover:scale-[99%] duration-150 ease-in-out hover:bg-[#1f1f1f] hover:text-slate-50"
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