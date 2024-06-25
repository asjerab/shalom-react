import Link from "next/link";
import YoutubeIMG from "../images/YoutubeIMG.png";

export default function youtubeComp() {
  return (
    <main>
      <div className="flex justify-center items-center py-[100px] px-[25px] pb-[75px] flex-col">
        <div className="youtube-bg-holder youtubeImgContainer bg-cover bg-no-repeat bg-center rounded-[16px] flex justify-end flex-col p-16 gap-2">
          <div>
          </div>
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
              <Link
                target="_blank"
                href="https://www.youtube.com/@shalomyouth_newcreation"
              >
                <button className="primaryRegular font-[600] text-[#111] bg-slate-50 px-[20px] h-[40px] rounded-[28px] text-[15px] uppercase my-3">
                  lenke her
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
              className="primaryFontRegular text-slate-50 text-[100px] leading-none font-[400]"
              style={{ fontSize: "clamp(25px, 10vw, 100px)" }}
            >
              Youtube
            </h1>
          </div>
      </div>



    </main>
  );
}
