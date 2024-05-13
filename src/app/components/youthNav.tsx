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
      <nav>
        <div className="p-[45px] flex justify-between">
          <img
            className="w-full max-w-[200px]"
            src={YouthLogo.src}
            alt="YouthLogo"
          />
          <div className="flex justify-between items-center w-full max-w-[170px]">
            <button className="btn rounded-full px-10" onClick={toggleMenu}>
              Menu
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text text-slate-50 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          </div>
        </div>
        {menuOpen && (
          <div className="nav-menu w-[95%] h-[95%] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#111] z-50 rounded-[32px] flex flex-col justify-between items-center">
            <div className="flex justify-between items-center p-[50px] w-full">
              <h1
                className="primaryLight text-slate-50"
                style={{ fontSize: "clamp(25px, 7vw, 56px)" }}
              >
                Navigasjon
              </h1>
              <div
                className="p-3 bg-[#252727] rounded-full hover:p-5 duration-150 ease-out cursor-pointer"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="close-button w-6 h-6 cursor-pointer text-slate-50"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col items-start gap-1 p-[50px] w-full">
              <Link
                href="/"
                className="flex justify-between items-center w-full"
              >
                <h1
                  className="primaryRegular text-slate-50 hover:translate-x-2 duration-100"
                  style={{ fontSize: "clamp(25px, 7vw, 46px)" }}
                >
                  Velg fellesskap
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="flex items-center justify-between w-5 h-5 text-slate-50 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
              <Link
                href="/shalomYouth"
                className="flex justify-between items-center w-full"
              >
                <h1
                  className="primaryRegular text-slate-50 hover:translate-x-2 duration-100"
                  style={{ fontSize: "clamp(25px, 7vw, 46px)" }}
                >
                  Hjem
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="flex items-center justify-between w-5 h-5 text-slate-50 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
              <Link
                href="/youthGrupper"
                className="flex justify-between items-center w-full"
              >
                <h1
                  className="primaryRegular text-slate-50 hover:translate-x-2 duration-100"
                  style={{ fontSize: "clamp(25px, 7vw, 46px)" }}
                >
                  Grupper
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="flex items-center justify-between w-5 h-5 text-slate-50 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
              <Link
                href="/youthForms"
                className="flex justify-between items-center w-full"
              >
                <h1
                  className="primaryRegular text-slate-50 hover:translate-x-2 duration-100"
                  style={{ fontSize: "clamp(25px, 7vw, 46px)" }}
                >
                  Påmelding
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="flex items-center justify-between w-5 h-5 text-slate-50 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
              <Link
                href=""
                className="flex justify-between items-center w-full"
              >
                <h1
                  className="primaryRegular text-slate-50 hover:translate-x-2 duration-100"
                  style={{ fontSize: "clamp(25px, 7vw, 46px)" }}
                >
                  Om Oss
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="flex items-center justify-between w-5 h-5 text-slate-50 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
              <Link
                href=""
                className="flex justify-between items-center w-full"
              >
                <h1
                  className="primaryRegular text-slate-50 hover:translate-x-2 duration-100"
                  style={{ fontSize: "clamp(25px, 7vw, 46px)" }}
                >
                  Kontakt
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="flex items-center justify-between w-5 h-5 text-slate-50 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex justify-start items-end gap-10 p-[50px] w-full">
              <div className="flex flex-col gap-2">
                <p className="primaryLight text-gray-400 text-[13px]">
                  Følg oss på
                </p>
                <p className="primaryLight text-slate-50">Instagram</p>
              </div>
              <p className="primaryLight text-slate-50">Youtube</p>
              <p className="primaryLight text-slate-50">Facebook</p>
            </div>
          </div>
        )}
      </nav>
    </main>
  );
}
