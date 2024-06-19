import Link from "next/link";

export default function youtubeComp() {
  return (
    <main>
      <div className="flex justify-center items-center py-[75px] px-[25px]">
        <div className="youtube-bg-holder bg-cover bg-no-repeat bg-center rounded-[16px] flex justify-end flex-col p-16 gap-2">
          <h1
            className="primaryFontRegular text-slate-50 font-[600] leading-[84px]"
            style={{ fontSize: "clamp(36px, 12vw, 80px)" }}
          >
            Youtube
          </h1>
          <Link
            href="https://www.youtube.com/@shalomyouth_newcreation"
            target="_blank"
          >
            <button className="primaryFontRegular font-[600] youtube-button btn btn-wide flex self-start bg-[#222222] text-slate-50 border-none hover:bg-[#1a1a1a]">
              Shalom Youth
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
