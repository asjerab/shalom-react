"use client";
import { useState, useEffect } from "react";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);
  const [routeName, setRouteName] = useState("");

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1200); // 1200 milliseconds = 1.2 seconds
    };

    // Listen for the page load event
    window.addEventListener("load", handleLoad);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (document.readyState === "complete") {
        setIsLoading(false);
      }
    }, 1200);

    const handleReadyStateChange = () => {
      if (document.readyState === "complete") {
        clearTimeout(timer);
        setIsLoading(false);
      }
    };

    document.addEventListener("readystatechange", handleReadyStateChange);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("readystatechange", handleReadyStateChange);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    // Extract the route name from the path
    const path = window.location.pathname;
    const route = path.split("/").pop(); // Get the last part of the path
    setRouteName(route || "Home"); // Default to "Home" if route is empty
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <main>
      <div className="w-full h-dvh fixed bg-[#111] flex justify-center items-center flex-col gap-2 z-[100]">
        <h1 className="primaryFontRegular text-[25px] fade-in fade-out text-slate-50">
          {routeName}
        </h1>
        <span className="loader"></span>
      </div>
    </main>
  );
}
