"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  return (
    <main className="w-full h-dvh flex justify-center items-center flex-col">
      <h1
        className="primaryFontRegular text-slate-50 flex leading-[80px]"
        style={{ fontSize: "clamp(35px, 5vw, 125px)" }}
      >
        Fant ikke Siden{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          className="rotate-360"
        >
          <g clipPath="url(#clip0_1_20)">
            <path
              d="M0.789551 0.78949L14.2106 14.2105M14.2106 14.2105V2.38659M14.2106 14.2105H2.38666"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_20">
              <rect width="15" height="15" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </h1>
      <Link href="/">
        <button className="btn btn-wide m-4">Hjem</button>
      </Link>{" "}
    </main>
  );
}
