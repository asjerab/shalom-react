"use client";
import React, { useState, useEffect } from "react";

export default function Loading() {
  const [routeName, setRouteName] = useState("");

  useEffect(() => {
    // Extract the route name from the path
    const path = window.location.pathname;
    const route = path.split("/").pop(); // Get the last part of the path
    setRouteName(route || "Home"); // Default to "Home" if route is empty
  }, []);

  if (!Loading) {
    return null;
  }

  return (
    <>
      <div className="w-full h-dvh fixed bg-[#111] flex justify-center items-center flex-col gap-2 z-[100]">
        <h1 className="primaryFontRegular text-[25px] fade-in fade-out text-slate-50">
          {routeName}
        </h1>
        <span className="loader"></span>
      </div>
    </>
  );
}
