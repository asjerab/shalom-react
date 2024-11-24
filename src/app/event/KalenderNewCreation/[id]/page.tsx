import { notFound } from "next/navigation";
import { eventsNc } from "../../../../data/eventNewCreation";
import NcNav from "../../../components/ncNav";
import NcFooter from "../../../components/NcFooter";

interface EventPageProps {
  params: Promise<{
    id: string;
  }>; // params is now expected to be a Promise
  searchParams: { [key: string]: string | string[] | undefined };
}

// Generate static paths based on local data
export async function generateStaticParams() {
  return eventsNc.map((event) => ({
    id: event.id.toString(), // Ensure `id` is treated as a string
  }));
}

// The main EventPage function
export default async function EventPage({ params }: EventPageProps) {
  // Wait for params to resolve since it's now a Promise
  const resolvedParams = await params;
  const { id } = resolvedParams; // Destructure `id` from the resolved params
  const eventData = eventsNc.find((event) => event.id === id); // Locate event data

  // If no event data is found, show a 404 page
  if (!eventData) {
    notFound();
  }

  return (
    <main className="w-full h-full">
      <NcNav />
      <div className="kalender-page-wrapper flex flex-col gap-10 p-[50px]">
        <a href="/shalomNewCreation#NewCreation-kalender">
          <h2
            className="flex items-center gap-2 primaryFontHeadings text-slate-50 cursor-pointer"
            style={{ fontSize: "clamp(15px, 3.5vw, 25px)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-8 text-slate-50"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            Tilbake
          </h2>
        </a>
        <div className="flex flex-col gap-5">
          <h1 className="Sf-pro-font-regular font-[700] text-slate-50 text-[35px]">
            {eventData.title}
          </h1>
          <p
            className="Sf-pro-font-regular text-slate-50 w-full max-w-[700px]"
            style={{ fontSize: "clamp(15px, 3.5vw, 20px)" }}
          >
            {eventData.description}
          </p>
        </div>
        <div className="kalender-subInfo flex gap-5">
          <p className="Sf-pro-font-regular text-[#111] badge py-4 border-none">
            {eventData.location}
          </p>
          <p className="Sf-pro-font-regular text-[#111] badge py-4 border-none">
            {eventData.clock}
          </p>
          <p className="Sf-pro-font-regular text-[#111] badge py-4 border-none">
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
            className="Sf-pro-font-regular text-[#111] badge py-4 border-none"
            style={{ display: eventData.locationTwo ? "flex" : "none" }}
          >
            {eventData.locationTwo}
          </p>
          <p
            className="Sf-pro-font-regular text-[#111] badge py-4 border-none"
            style={{ display: eventData.clockTwo ? "flex" : "none" }}
          >
            {eventData.clockTwo}
          </p>
          <p
            className="Sf-pro-font-regular text-[#111] badge py-4 border-none"
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
              display: eventData.descriptionThree ? "flex" : "none",
            }}
          >
            {eventData.descriptionThree}
          </p>
        </div>
        <div className="kalender-subInfo flex gap-5">
          <p
            className="Sf-pro-font-regular text-[#111] badge py-4 border-none"
            style={{ display: eventData.locationThree ? "flex" : "none" }}
          >
            {eventData.locationThree}
          </p>
          <p
            className="Sf-pro-font-regular text-[#111] badge py-4 border-none"
            style={{ display: eventData.clockThree ? "flex" : "none" }}
          >
            {eventData.clockThree}
          </p>
          <p
            className="Sf-pro-font-regular text-[#111] badge py-4 border-none"
            style={{ display: eventData.dateThree ? "flex" : "none" }}
          >
            {eventData.dateThree}
          </p>
        </div>
      </div>
      <NcFooter />
    </main>
  );
}