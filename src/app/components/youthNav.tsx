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
        <div className="navigation-menu-mobile w-full h-full bg-[#111] fixed z-50">
          <div className="nav-menu-header flex justify-between items-center p-[50px]">
            <Link href="/shalomYouth">
              <img
                className="w-full max-w-[150px]"
                src={YouthLogo.src}
                alt="YouthLogo"
              />
            </Link>
            <svg
              onClick={toggleMenu}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-slate-50 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="nav-menu-content flex flex-col gap-[25px] px-[50px] py-[25px]">
            <Link href="/" className="flex justify-between items-center">
              <p className="primaryRegular text-slate-50 text-[15px]">
                Velg felleskap
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-slate-50 cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
            <Link
              href="/shalomYouth"
              className="flex justify-between items-center"
            >
              <p className="primaryRegular text-slate-50 text-[15px]">Hjem</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-slate-50 cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
            <Link
              href="/youthGrupper"
              className="flex justify-between items-center"
            >
              <p className="primaryRegular text-slate-50 text-[15px]">
                Utrustning
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-slate-50 cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
            <Link
              href="/youthForms"
              className="flex justify-between items-center"
            >
              <p className="primaryRegular text-slate-50 text-[15px]">
                Påmelding
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-slate-50 cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
            <Link href="/OmOss" className="flex justify-between items-center">
              <p className="primaryRegular text-slate-50 text-[15px]">Om oss</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-slate-50 cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
            <Link
              href="/youthKontakt"
              className="flex justify-between items-center"
            >
              <p className="primaryRegular text-slate-50 text-[15px]">
                Kontakt
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-slate-50 cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </div>
        </div>
      )}
      <nav>
        <div className="nav">
          <div className="nav-header flex justify-between items-center p-[50px]">
            <Link href="/shalomYouth">
              <img
                className="w-full max-w-[150px]"
                src={YouthLogo.src}
                alt="YouthLogo"
              />
            </Link>
            <div className="flex items-center gap-2">
              <Link href="/youthGrupper">
                <p
                  className="hidden-nav-link primaryBold text-slate-50 text-[15px]"
                  data-text="UTRUSTNING"
                >
                  UTRUSTNING
                </p>
              </Link>
              <Link href="/youthForms">
                <p className="hidden-nav-link primaryBold text-slate-50 text-[15px]">
                  PÅMELDING
                </p>
              </Link>
              <Link href="/OmOss">
                <p className="hidden-nav-link primaryBold text-slate-50 text-[15px]">
                  OM OSS
                </p>
              </Link>
              <Link href="/youthKontakt">
                <p className="hidden-nav-link primaryBold text-slate-50 text-[15px]">
                  KONTAKT
                </p>
              </Link>
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="hidden-nav-link w-8 h-8 text-slate-50 cursor-pointer"
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
