import Link from "next/link";

export default function playground() {
  return (
    <>
      <main className="w-full h-screen">
        <Link href="/youth">
          <h1 className="text-slate-50">Hello</h1>
        </Link>
      </main>
    </>
  );
}
