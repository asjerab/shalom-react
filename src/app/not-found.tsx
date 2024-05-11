import Link from "next/link";

export default function NotFound() {
  return (
    <main className="w-full h-dvh flex justify-center items-center flex-col">
      <h1
        className="primaryBold text-slate-50"
        style={{ fontSize: "clamp(50px, 5vw, 125px)" }}
      >
        Page not found
      </h1>
      <h1
        className="primaryBold text-slate-50"
        style={{ fontSize: "clamp(50px, 20vw, 205px)" }}
      >
        404
      </h1>
      <Link href="/">
        <button className="btn btn-wide m-4">Tilbake, hjem</button>
      </Link>{" "}
    </main>
  );
}
