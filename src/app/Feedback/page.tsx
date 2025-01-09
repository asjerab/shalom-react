import YouthNav from "../components/youthNav"
import Footer from "../components/youthFooter"

export default function Feedback() {

  return (
    <main className="w-full h-full">
      <YouthNav />
      <div className="p-[35px]">
        <div className="flex flex-col gap-10">
          <h1
            className="primaryFontBold text-slate-50 leading-none"
            style={{ fontSize: "clamp(50px, 10vw, 200px)" }}
          >
            Feedback.
          </h1>
          <p
            className="primaryFontRegular text-slate-50 max-w-[1000px]"
            style={{ fontSize: "clamp(15px, 2vw, 25px)" }}
          >
            Opplever du problemer med nettsiden? Fyll gjerne ut skjemaet
            nedenfor, så vi kan rette opp feilen og sikre en best mulig
            opplevelse for deg.
          </p>
        </div>
        <form className="my-5 w-full max-w-[500px]">
          <input
            name="name"
            placeholder="Navn på avsender (Frivilig)"
            className="p-2 mt-2 rounded-[8px] border-[1px] bg-transparent text-slate-50 border-opacity-10 border-slate-50 w-full placeholder:text-slate-50 outline-[#000000]"
          />
          <textarea
            name="description"
            rows={7}
            placeholder="Beskrivelse"
            className="p-2 mt-2 rounded-[8px] border-[1px] bg-transparent text-slate-50 border-opacity-10 border-slate-50 w-full placeholder:text-slate-50 outline-[#000000] resize-none"
          />
          <button
            className="btn mt-3 btn-md w-full max-w-[250px] bg-[#1b1b1b] text-slate-50 border-none hover:bg-[#252525] rounded-[8px]"
            type="submit"
          >
            Send inn
          </button>
        </form>

      </div>
      <Footer />
    </main>
  );
}


