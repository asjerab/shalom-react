"use client";

import React from "react";
import YouthNav from "../components/youthNav";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";

export default function DashboardPage() {
  const { isAuthenticated, isLoading, user, getUser } = useKindeBrowserClient();

  if (isLoading) return <div>Loading...</div>;

  const alsoUser = getUser();

  return isAuthenticated ? (
    <main className="w-full h-screen">
      <YouthNav />
      <div className="p-[50px]">
        <h1
          className="primaryFontHeadings text-slate-50 text-[35px] py-[15px]"
          style={{ fontSize: "clamp(35px, 5vw, 50px)" }}
        >
          Velkommen {user?.given_name}!
        </h1>
        <p
          className="primaryFontRegular w-full max-w-[768px] text-slate-50"
          style={{ fontSize: "clamp(12px, 3vw, 17px)" }}
        >
          Velkommen til Dashboardet. Brukere med tilgang kan redigere innhold på
          nettsiden til Shalom Oslo. Systemet er fortsatt under utvikling, og
          flere funksjoner for kontroll vil bli tilgjengelig snart.
        </p>
      </div>
    </main>
  ) : (
    <div>
      <main className="w-full h-dvh flex justify-center items-center flex-col">
        <h1
          className="primaryFontRegular text-slate-50 flex"
          style={{ fontSize: "clamp(25px, 5vw, 125px)" }}
        >
          Logg inn for å se denne siden.{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            className="rotate-360"
          >
            <g clip-path="url(#clip0_1_20)">
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
        <LoginLink className="btn btn-wide m-4">Login</LoginLink>
      </main>
      );{" "}
    </div>
  );
}
