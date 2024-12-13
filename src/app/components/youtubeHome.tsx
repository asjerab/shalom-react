import Link from "next/link";
import YoutubeIMG from "../images/YoutubeIMG.png";

export default function youtubeComp() {
  return (
    <main className="">
      <nav className="flex justify-center w-full">
        <div className="flex justify-center items-center py-[100px] px-[25px] pb-[75px] flex-col w-full max-w-[1150px]">
          <div className="youtube-bg-holder youtubeImgContainer rounded-[16px] flex justify-end flex-col p-16 gap-2">
            <div></div>
            <div className="youtubeImgOverlay">
              <div className="youtubeImgText">
                <h1 className="primaryFontRegular flex items-center gap-2 text-[25px]">
                  Sjekk youtube via link{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1_20)">
                      <path
                        d="M0.789551 0.78949L14.2106 14.2105M14.2106 14.2105V2.38659M14.2106 14.2105H2.38666"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_20">
                        <rect width="15" height="15" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </h1>
                <Link
                  target="_blank"
                  href="https://www.youtube.com/@shalomyouth_newcreation"
                >
                  <button className="primaryRegular scroll-container font-[600] text-[#111] bg-slate-50 px-[20px] h-[40px] rounded-[28px] text-[15px] uppercase my-3">
                    <p className="scroll-holder">lenke her</p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="py-5 w-full max-w-[1325px]">
            <p
              className="primaryFontLight text-slate-50 text-[20px] font-[300]"
              style={{ fontSize: "clamp(15px, 3.5vw, 20px)" }}
            >
              Shalom Youth ∙ Shalom New Creation
            </p>
            <h1
              className="primaryFontRegular text-slate-50 font-[600] my-5 leading-none flex items-center gap-5"
              style={{ fontSize: "clamp(36px, 12vw, 80px)" }}
            >
              Youtube
              <span className="Kelsi-fill text-slate-50">x</span>
            </h1>
          </div>
        </div>
      </nav>
    </main>
  );
}
