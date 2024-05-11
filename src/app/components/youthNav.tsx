import YouthLogo from "../images/ShalomYouth-Logo.png";

export default function YouthNav() {
  return (
    <main>
      <nav className="h-dvh bg-cover bg-no-repeat bg-center youthNav-bg pb-[100px]">
        {/* Kom tilbake til denne når siden er ferdig*/}
        <div className="res-menu"></div>
        <div className="nav flex justify-between items-center p-[50px]">
          <img
            className="w-full max-w-[200px]"
            src={YouthLogo.src}
            alt="Shalom Youth Logo"
          />
          <div className="links-youth-nav flex items-center gap-2">
            <a href="/">
              <p className="primaryBold font-bold	 text-slate-50 hover:scale-[97%] ease-in-out duration-200 uppercase text-sm/[17px]">
                Utrustning
              </p>
            </a>
            <a href="/">
              <p className="primaryBold font-bold	 text-slate-50 hover:scale-[97%] ease-in-out duration-200 uppercase text-sm/[17px]">
                Påmelding
              </p>
            </a>{" "}
            <a href="/">
              <p className="primaryBold font-bold	 text-slate-50 hover:scale-[97%] ease-in-out duration-200 uppercase text-sm/[17px]">
                Kontakt
              </p>
            </a>{" "}
            <a href="/">
              <p className="primaryBold font-bold	 text-slate-50 hover:scale-[97%] ease-in-out duration-200 uppercase text-sm/[17px]">
                om oss
              </p>
            </a>{" "}
            <a
              href="/"
              className="bg-[#333] px-3 py-2 rounded-md hover:scale-[97%] ease-in-out duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-slate-50 hover:scale-[97%] ease-in-out duration-200"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                />
              </svg>
            </a>{" "}
          </div>
          <div className="nav-res-button hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-slate-50 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </div>
        </div>
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
