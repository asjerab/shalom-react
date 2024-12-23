import { notFound } from "next/navigation";
import { eventsYouth } from "../../../../data/eventYouth";
import YouthNav from "../../../components/youthNav";
import Footer from "../../../components/youthFooter";
import Link from "next/link";

interface EventPageProps {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
  // Generate static paths based on local data
  return eventsYouth.map((event) => ({
    id: event.id,
  }));
}

// This is a server component that can fetch data
export default async function Page({ params }: EventPageProps) {
  const { id } = await params;
  const eventData = eventsYouth.find((event) => event.id === id);

  // If eventData is not found, show a 404 page
  if (!eventData) {
    notFound();
  }

  return (
    <main className="w-full h-full">
      <YouthNav />
      <div className="kalender-page-wrapper flex flex-col gap-10 p-[50px]">
        <a href="/shalomYouth#youth-kalender">
          <button
            className="primaryFontHeadings flex items-center gap-2 text-slate-50  hover:bg-[#151515] p-3 rounded-[8px]"
            style={{ fontSize: "clamp(15px, 5vw, 25px)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            <p>Tilbake</p>
          </button>
        </a>
        <div className="flex flex-col gap-5">
          <h1 className="Sf-pro-font-regular font-[700] text-slate-50 text-[35px]">
            {eventData.title}
          </h1>
          <p
            className="Sf-pro-font-regular text-slate-50 w-full max-w-[700px]"
            style={{
              fontSize: "clamp(15px, 3.5vw, 20px)",
              display: eventData.description ? "flex" : "none",
            }}
          >
            {eventData.description.split("\n").map((line, index) => (
              <span key={index}>
                {line.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
                  part.match(/https?:\/\/[^\s]+/) ? (
                    <a
                      key={i}
                      href={part}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      {part}
                    </a>
                  ) : (
                    part
                  )
                )}
                <br />
              </span>
            ))}{" "}
          </p>
        </div>
        <div className="kalender-subInfo flex gap-5">
          <p
            className="Sf-pro-font-regular text-[#ffffff]  badge bg-[#1f1f1f] py-4 border-none"
            style={{ display: eventData.location ? "flex" : "none" }}
          >
            {eventData.location}
          </p>
          <p
            className="Sf-pro-font-regular text-[#ffffff] bg-[#1f1f1f]  badge py-4 border-none"
            style={{ display: eventData.clock ? "flex" : "none" }}
          >
            {eventData.clock}
          </p>
          <p
            className="Sf-pro-font-regular text-[#ffffff] bg-[#1f1f1f]  badge py-4 border-none"
            style={{ display: eventData.date ? "flex" : "none" }}
          >
            {eventData.date}
          </p>
        </div>
      </div>
      <div className="kalender-page-wrapper flex flex-col gap-10 p-[50px]">
        <div className="flex flex-col gap-5">
          <h1 className="Sf-pro-font-regular font-[700] text-slate-50 text-[35px]">
            {eventData.titleTwo}
          </h1>
          <p
            className="Sf-pro-font-regular text-slate-50 w-full max-w-[700px]"
            style={{
              fontSize: "clamp(15px, 3.5vw, 20px)",
              display: eventData.descriptionTwo ? "flex" : "none",
            }}
          >
            {eventData.descriptionTwo}
          </p>
        </div>
        <div className="kalender-subInfo flex gap-5">
          <p
            className="Sf-pro-font-regular text-[#ffffff] bg-[#1f1f1f]  badge py-4 border-none"
            style={{ display: eventData.locationTwo ? "flex" : "none" }}
          >
            {eventData.locationTwo}
          </p>
          <p
            className="Sf-pro-font-regular text-[#ffffff] bg-[#1f1f1f]  badge py-4 border-none"
            style={{ display: eventData.clockTwo ? "flex" : "none" }}
          >
            {eventData.clockTwo}
          </p>
          <p
            className="Sf-pro-font-regular text-[#ffffff] bg-[#1f1f1f]  badge py-4 border-none"
            style={{ display: eventData.dateTwo ? "flex" : "none" }}
          >
            {eventData.dateTwo}
          </p>
        </div>
      </div>
      <div className="kalender-page-wrapper flex flex-col gap-10 p-[50px]">
        <div className="flex flex-col gap-5">
          <h1 className="Sf-pro-font-regular font-[700] text-slate-50 text-[35px]">
            {eventData.titleThree}
          </h1>
          <p
            className="Sf-pro-font-regular text-slate-50 w-full max-w-[700px]"
            style={{
              fontSize: "clamp(15px, 3.5vw, 20px)",
              display: eventData.descriptionTwo ? "flex" : "none",
            }}
          >
            {eventData.descriptionThree}
          </p>
        </div>
        <div className="kalender-subInfo flex gap-5">
          <p
            className="Sf-pro-font-regular text-[#ffffff] bg-[#1f1f1f]  badge py-4 border-none"
            style={{ display: eventData.locationTwo ? "flex" : "none" }}
          >
            {eventData.locationThree}
          </p>
          <p
            className="Sf-pro-font-regular text-[#ffffff] bg-[#1f1f1f]  badge py-4 border-none"
            style={{ display: eventData.clockTwo ? "flex" : "none" }}
          >
            {eventData.clockThree}
          </p>
          <p
            className="Sf-pro-font-regular text-[#ffffff] bg-[#1f1f1f]  badge py-4 border-none"
            style={{ display: eventData.dateTwo ? "flex" : "none" }}
          >
            {eventData.dateThree}
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
