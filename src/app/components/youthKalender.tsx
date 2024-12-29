import Calendar from "./YouthKalenderFrame";
import image from "grupperImages/FellesMoteImage.png"

const data = [
  /////////////////
  // Januar Seksjon
  { month: "January", id: "/event/kalenderYouth/Bonnemote", date: 3, image: 'arrangementImages/BonnOgFasteImage.png'},
  { month: "January", id: "/event/kalenderYouth/Bonnemote", date: 4, image: 'arrangementImages/BonnOgFasteImage.png'},
  { month: "January", id: "/event/kalenderYouth/Bonnemote", date: 5, image: 'arrangementImages/BonnOgFasteImage.png'},
  { month: "January", id: "/event/kalenderYouth/TjenesteKickOff", date: 9, image: 'arrangementImages/TjenesteKickoff-img.png'},
  { month: "January", id: "/event/kalenderYouth/Gudstjeneste", date: 11, image: 'arrangementImages/gudstjenesteBilde.png'},
  { month: "January", id: "/event/kalenderYouth/Gudstjeneste", date: 18, image: 'arrangementImages/gudstjenesteBilde.png'},
  { month: "January", id: "/event/kalenderYouth/Bibelstudie", date: 21, image: 'grupperImages/bibelStudieBilde.png'},
  { month: "January", id: "/event/kalenderYouth/Bonnemote", date: 23, image: 'grupperImages/bonnBilde.png'},
  { month: "January", id: "/event/kalenderYouth/Gudstjeneste", date: 25, image: 'arrangementImages/gudstjenesteBilde.png'},
  { month: "January", id: "/event/kalenderYouth/Connect", date: 29, image: 'grupperImages/connectBilde.png'},
  { month: "January", id: "/event/kalenderYouth/Evangelisering", date: 31, image: 'grupperImages/evangeliseringBilde.png'},
  /////////////////
  // Januar Seksjon
  { month: "February", id: "/event/kalenderYouth/Gudstjeneste", date: 1, image: 'arrangementImages/gudstjenesteBilde.png'},
  { month: "February", id: "/event/kalenderYouth/Bibelstudie", date: 4, image: 'grupperImages/bibelStudieBilde.png'},
];

const Home: React.FC = () => {
  return (
    <main className="py-[100px] px-[20px]">
      <div className="w-full max-w-[1100px] mx-auto p-4 kalender-div " id="youth-kalender">
        <div>
          <h1
            className="light dark primaryFontRegular text-slate-50 font-[600] my-5 leading-[84px] flex items-center gap-5"
            style={{ fontSize: "clamp(36px, 12vw, 80px)" }}
          >
            Kalender
            <span className="Kelsi-fill text-slate-50">x</span>
          </h1>{" "}
          <p
            className="primaryFontRegular text-slate-50 w-full max-w-[680px]"
            style={{ fontSize: "clamp(15px, 3.5vw, 25px)" }}
          >
            Dette er shalom youth sin helt egne kalenderen, her kan du se hva
            som skjer i løpet av måneden du har valgt. I tillegg ser du datoene
            for de ulike arrangementene samt dagen det skal være på.
          </p>
        </div>
        <Calendar data={data} />
      </div>
    </main>
  );
};

export default Home;