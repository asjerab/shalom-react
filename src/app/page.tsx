import Link from "next/link";
import ShalomYouth from "./shalomYouth/page";
import ShalomNewCreation from "./shalomNewCreation/page";

export default function Home() {
  return (
    <main className="w-full h-dvh	flex justify-center items-center">
      <div className="choose-group-container p-[35px] w-full max-w-[901px]">
        <span className="badge rounded-md p-4 bg-[#1b1b1b] border-none text-slate-50">Velg fellesskap</span>
        <Link href="/shalomYouth">
          <h1
            className="primaryRegular text-slate-50  py-[25px] uppercase transform hover:translate-x-2 ease-in-out duration-200"
            style={{ fontSize: "clamp(25px, 3vw, 50px)" }}
          >
            Shalom Youth
          </h1>
        </Link>

        <hr className="opacity-50	" />

        <Link href="/shalomNewCreation">
          <h1
            className="primaryRegular text-slate-50  py-[25px] uppercase transform hover:translate-x-3 ease-in-out duration-200"
            style={{ fontSize: "clamp(25px, 3vw, 50px)" }}
          >
            Shalom New Creation
          </h1>
        </Link>

        <p
          className="primaryLight text-slate-50"
          style={{ fontSize: "clamp(12px, 2vw, 16px)" }}
        >
          Velkommen til Shalom Oslo sin offisielle side. Her kan du velge mellom
          to fellesskap. Shalom Youth er et ungdomsfellesskap for alle fra 13-19
          år, mens Shalom New Creation er for deg som er 20 år og oppover. Du
          hjertelig velkommen til å ta en titt på en av disse. Gud velsigne deg!
        </p>
      </div>
    </main>
  );
}
