import Link from "next/link";
import YouthLogo from "../images/ShalomYouth-Logo.png";
import YouthNavHome from "../components/youthNav"

export default function YouthNav() {
  return (
    <main>
      <nav className="h-dvh bg-cover bg-no-repeat bg-center youthNav-bg pb-[100px]">
        <YouthNavHome />
        <div className="heroTextYouth w-full h-4/5  flex justify-center items-center flex-col">
          <h1
            className="primaryRegular text-slate-50 font-[700] uppercase"
            style={{ fontSize: "clamp(10px, 8.2vw, 155px)" }}
          >
            Shalom Youth
          </h1>
          <p
            className="primaryRegular p-text-hero-youth text-slate-50 font-medium max-w-[750px] w-full text-center px-[50px]"
            style={{ fontSize: "clamp(18px, 2vw, 22px)" }}
          >
            La ingen forakte deg fordi du er ung, men vær et forbilde for de
            troende i ord og livsførsel, i kjærlighet, tro og renhet. 1.Timoteus
            4:12
          </p>
          <a href="#grupper-a">
            <button className="btn btn-neutral m-5">
              Utforsk{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </a>
        </div>
      </nav>
    </main>
  );
}
