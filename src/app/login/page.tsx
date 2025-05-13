"use client";
import Link from "next/link";
import { login, signup } from "./actions";
import { useState } from "react";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // prevent default form submission

    const formData = new FormData(event.currentTarget);
    const result = await login(formData);
    if (result?.error) {
      setError(result.error);
    }
  }

  return (
    <main className="w-full h-screen">
      <section className="h-full flex justify-center items-center">
        <form onSubmit={handleLogin} className="flex flex-col gap-1.5 items-start">
          <div className="my-3.5">
            <h1
              className="Gilroy-Semibold text-slate-50"
              style={{ fontSize: "clamp(18px, 10vw, 25px)" }}
            >
              Login
            </h1>
            <p className="text-[#464646]">Shalom Youth dashboard</p>
          </div>
          <input
            className="p-2 pl-2.5 bg-[#121212] text-slate-50 rounded-[4px] w-[350px] focus:outline-none focus:border-[#2b80ff] focus:border"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="p-2 pl-2.5 mt-1.5 bg-[#121212] text-slate-50 rounded-[4px] w-[350px] focus:outline-none focus:border-[#2b80ff] focus:border"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <button
            type="submit"
            className="my-3.5 w-full bg-[#2b80ff] p-2 rounded-[4px] text-slate-50 Gilroy-Semibold hover:scale-[1.005] duration-150 ease-in-out"
          >
            Log in
          </button>
        </form>
      </section>
    </main>
  );
}
