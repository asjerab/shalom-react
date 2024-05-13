import Link from "next/link";

export default function youtubeComp() {
  return (
    <main>
      <div className="yotube-container flex justify-center py-[100px] px-[35px]">
        <div className="youtube-bg-holder bg-cover bg-no-repeat bg-center rounded-[25px]">
          <div className="flex flex-col justify-center h-full p-[35px] gap-5 max-w-[700px]">
            <h1
              className="text-slate-50"
              style={{ fontSize: "clamp(25px, 4vw, 45px)", lineHeight: "clamp(30px, 2.5vw, 50px)" }}
            >
              Gikk du glipp av det siste møtet? Ikke bekymre deg.
            </h1>
            <p
              className="text-slate-50"
              style={{ fontSize: "clamp(15px, 1.5vw, 24px)" }}
            >
              Klikk på lenken nedenfor for å omdirigere til vår YouTube-kanal
            </p>
            <Link target="_blank" href="https://www.youtube.com/@shalomyouth_newcreation">
              <button className="btn btn-neutral btn-wide">Youtube</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
