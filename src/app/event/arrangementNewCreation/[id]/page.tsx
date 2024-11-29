import { notFound } from "next/navigation";
import { arrangement } from "../../../../data/arrangementNewCreation";
import YouthNav from "../../../components/ncNav";
import YouthFooter from "../../../components/NcFooter";

interface EventPageProps {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
  // Generate static paths based on local data
  return arrangement.map((event) => ({
    id: event.id,
  }));
}

// This is a server component that can fetch data
const EventPage = async ({ params }: EventPageProps) => {
  const { id } = await params;
  const eventData = arrangement.find((event) => event.id === id);

  if (!eventData) {
    notFound();
  }

  return (
    <main className="w-full h-full">
      <YouthNav />
      <div className="kalender-page-wrapper flex flex-col gap-10 p-[50px]">
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
      <YouthFooter />
    </main>
  );
};

export default EventPage;
