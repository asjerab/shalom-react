"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {


  return (
    <main>
      <div className="w-full h-dvh flex justify-center items-center">
        <div className="choose-group-container p-[35px] w-full max-w-[901px]">
          <span className="primaryFontRegular badge rounded-[28px] uppercase p-4 bg-[#1b1b1b] border-none text-slate-50">
            Velg fellesskap
          </span>

          <Link href="/shalomYouth">
            <h1
              className="primaryFontRegular text-slate-50 py-[25px] uppercase transform hover:translate-x-2 ease-in-out duration-200"
              style={{ fontSize: "clamp(25px, 3vw, 50px)" }}
            >
              Shalom Youth
            </h1>
          </Link>

          <hr className="opacity-50" />

          <Link href="/shalomNewCreation">
            <h1
              className="primaryFontRegular text-slate-50 py-[25px] uppercase transform hover:translate-x-3 ease-in-out duration-200"
              style={{ fontSize: "clamp(25px, 3vw, 50px)" }}
            >
              Shalom New Creation
            </h1>
          </Link>

          <p
            className="primaryFontRegular text-slate-50"
            style={{ fontSize: "clamp(12px, 2vw, 16px)" }}
          >
            Velkommen til Shalom Oslo sin offisielle hjemmeside. Her kan du velge mellom to fellesskap. Shalom Youth er et ungdomsfellesskap for alle fra ungdomsskolen (8.–10. trinn) og videregående (1.–3. trinn) , mens Shalom New Creation er for deg som er 19 år og oppover. Du hjertelig velkommen til å ta en titt på en av disse. Shalom youth og Shalom new creation er under en og samme nettside. Gud velsigne deg!
          </p>
        </div>
      </div>
    </main>
  );
}
