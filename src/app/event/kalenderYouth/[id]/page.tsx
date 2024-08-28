import { notFound } from "next/navigation";
import { eventsYouth } from "../../../../data/eventYouth";
import YouthNav from "../../../components/youthNav";
import Footer from "../../../components/youthFooter";
import Link from "next/link";

interface EventPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  // Generate static paths based on local data
  return eventsYouth.map((event) => ({
    id: event.id,
  }));
}

// This is a server component that can fetch data
const EventPage = async ({ params }: EventPageProps) => {
  const { id } = params;
  const eventData = eventsYouth.find((event) => event.id === id);

  // If eventData is not found, show a 404 page
  if (!eventData) {
    notFound();
  }

  return (
    <main className="w-full h-screen">
      <YouthNav />
      <div className="kalender-page-wrapper flex flex-col gap-10 p-[50px]">
        <a href="/shalomYouth#youth-kalender">
          <h2 className="flex items-center gap-2 primaryFontHeadings text-slate-50 cursor-pointer" style={{fontSize:"clamp(15px, 3.5vw, 25px)"}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-8 text-slate-50"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
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
            style={{ fontSize: "clamp(15px, 3.5vw, 20px" }}
          >
            {eventData.description}
          </p>
        </div>
        <div className="kalender-subInfo flex gap-5">
          <p className="Sf-pro-font-regular text-[#111]  badge py-4 border-none">
            {eventData.location}
          </p>
          <p className="Sf-pro-font-regular text-[#111]  badge py-4 border-none">
            {eventData.clock}
          </p>
          <p className="Sf-pro-font-regular text-[#111]  badge py-4 border-none">
            {eventData.date}
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default EventPage;
