import NcNav from "../components/ncNav";
import NcFooter from "../components/NcFooter";

export default function youthKontakt() {
  const kontaktPersoner = [
    {
      name: "Nahom Zenawi",
      mail: "shalomyouthoslo@gmail.com",
      title: "Hovedleder",
    },
    {
      name: "Belen Asgedom",
      mail: "shalomyouthoslo@gmail.com",
      title: "Forsamlingsleder",
    },
    {
      name: "Lydia Ayelegn",
      mail: "shalomyouthoslo@gmail.com",
      title: "Forsamlingsleder",
    },
    {
      name: "Becky Mebrahtu",
      mail: "shalomyouthoslo@gmail.com",
      title: "Forsamlingsleder",
    },
    {
      name: "Kedy Mebrahtu",
      mail: "shalomyouthoslo@gmail.com",
      title: "Forsamlingsleder",
    },
    {
      name: "Yafet Isak",
      mail: "shalomyouthoslo@gmail.com",
      title: "Leder for connect",
    },
    {
      name: "Heven Alemseged",
      mail: "shalomyouthoslo@gmail.com",
      title: "Leder for Bibelstudie",
    },
    {
      name: "Noah Samuel",
      mail: "shalomyouthoslo@gmail.com",
      title: "Leder for evangelisering",
    },
  ];

  return (
    <main className="w-full h-full">
      <NcNav />
      <div className="kontakt-wrapper  p-[50px]">
        <h1
          className="primaryFontBold text-slate-50"
          style={{ fontSize: "clamp(50px, 10vw, 200px)" }}
        >
          Kontakt.
        </h1>
        <p
          className="primaryFontRegular text-slate-50 max-w-[1000px]"
          style={{ fontSize: "clamp(15px, 2vw, 25px)" }}
        >
          Har du noen spørsmål? Ta gjerne kontakt med oss på:{" "}
          <span className="text-[#2b80ff] underline">
            {" "}
            E-post: Shalomoslo@gmail.com
          </span>{" "}
          Besøksadresse: Shalom New Creation{" "}
          <span className="text-[#2b80ff] underline">
            St. Olavs Gate 24 0166 Oslo
          </span>{" "}
          Vennligst kontakt en spesifikk leder nedenfor hvis du har spesifikke
          spørsmål.
        </p>
      </div>{" "}
      <div className="business-info-kontakt kontakt-wrapper px-[50px] py-[15px] flex gap-4">
        <h1 className="Sf-pro-font-regular text-[#ffffff]  badge bg-[#1f1f1f] py-5 border-none">
          NORWAY
        </h1>
        <h1 className="Sf-pro-font-regular text-[#ffffff]  badge bg-[#1f1f1f] py-5 border-none">
          ST. OLAVS GATE 24
        </h1>
        <h1 className="Sf-pro-font-regular text-[#ffffff]  badge bg-[#1f1f1f] py-5 border-none">
          0166, OSLO
        </h1>
      </div>
      <div className="kontakt-children max-w-[1325px]  p-[50px]">
        {kontaktPersoner.map((person, index) => (
          <div key={index}>
            <div className="w-full h-[2px] bg-[#67686c] opacity-50 "></div>
            <div className="py-[65px] flex flex-col gap-5 ">
              <div className="flex row-kontakt justify-between items-center">
                <h1
                  className="primaryFontRegular text-slate-50"
                  style={{ fontSize: "clamp(15px, 5vw, 30px)" }}
                >
                  {person.name}
                </h1>
                <p
                  className="primaryFontRegular text-slate-50 badge bg-[#131313] border-none p-5"
                  style={{ fontSize: "clamp(15px, 2vw, 20px)" }}
                >
                  {person.title}
                </p>
              </div>
              <p
                className="primaryFontRegular text-[#8f8f92]"
                style={{ fontSize: "clamp(15px, 2vw, 25px)" }}
              >
                {person.mail}
              </p>
            </div>
            <div className="w-full h-[2px] bg-[#67686c] opacity-50 "></div>
          </div>
        ))}
      </div>
      <NcFooter />
    </main>
  );
}
