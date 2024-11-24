import { notFound } from "next/navigation";
import { arrangement } from "../../../../data/arrangement";
import YouthNav from "../../../components/youthNav";
import YouthFooter from "../../../components/youthFooter";

interface EventPageProps {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateStaticParams() {
  // Generate static paths based on local data
  return arrangement.map((event) => ({
    id: event.id,
  }));
}

// This is a server component that can fetch data
const EventPage = async ({ params }: EventPageProps) => {
  const { id } = params;
  const eventData = arrangement.find((event) => event.id === id);

  // If eventData is not found, show a 404 page
  if (!eventData) {
    notFound();
  }

  return (
    <main className="w-full h-screen">
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
      <YouthFooter />
    </main>
  );
};

export default EventPage;
