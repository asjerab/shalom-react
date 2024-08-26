import Calendar from "./kalenderFrame";

const data = [
  { month: "June", id: "/event/kalenderYouth/Gudstjeneste", date: 1 },
  { month: "June", id: "/event/kalenderYouth/Connect", date: 5 },
  { month: "June", id: "/event/kalenderYouth/Evangelisering", date: 7 },
  {
    month: "June",
    id: "/event/kalenderYouth/AlphakursTheUpperRoom",
    date: 9,
  },
  { month: "June", id: "/event/kalenderYouth/Bibelstudie", date: 12 },
  { month: "June", id: "/event/kalenderYouth/Bønnemøte", date: 13 },
  { month: "June", id: "/event/kalenderYouth/Gudstjeneste", date: 15 },
  { month: "June", id: "/event/kalenderYouth/Gudstjeneste", date: 22 },
  { month: "June", id: "/event/kalenderYouth/Gudstjeneste", date: 30 },
  { month: "August", id: "/event/kalenderYouth/TjenesteKickOff", date: 22 },
  { month: "August", id: "/event/kalenderYouth/Gudstjeneste", date: 24 },
  { month: "August", id: "/event/kalenderYouth/Gudstjeneste", date: 31 },
  { month: "September", id: "/event/kalenderYouth/Bibelstudie", date: 4 },
  { month: "September", id: "/event/kalenderYouth/Bonnemote", date: 5 },
  { month: "September", id: "/event/kalenderYouth/Connect", date: 11 },
  { month: "September", id: "/event/kalenderYouth/Evangelisering", date: 13 },
  { month: "September", id: "/event/kalenderYouth/Gudstjeneste", date: 14 },
  { month: "September", id: "/event/kalenderYouth/Bibelstudie", date: 18 },
  { month: "September", id: "/event/kalenderYouth/Bonnemote", date: 19 },
  { month: "September", id: "/event/kalenderYouth/Gudstjeneste", date: 21 },
  { month: "September", id: "/event/kalenderYouth/Connect", date: 25 },
  { month: "October", id: "/event/kalenderYouth/Bibelstudie", date: 2 },
  { month: "October", id: "/event/kalenderYouth/Bonnemote", date: 3 },
  { month: "October", id: "/event/kalenderYouth/Gudstjeneste", date: 5 },
  { month: "October", id: "/event/kalenderYouth/Connect", date: 9 },
  { month: "October", id: "/event/kalenderYouth/Evangelisering", date: 11 },
  { month: "October", id: "/event/kalenderYouth/Gudstjeneste", date: 12 },
  { month: "October", id: "/event/kalenderYouth/Bibelstudie", date: 16 },
  { month: "October", id: "/event/kalenderYouth/Bonnemote", date: 17 },
  { month: "October", id: "/event/kalenderYouth/Gudstjeneste", date: 19 },
  { month: "October", id: "/event/kalenderYouth/Connect", date: 23 },
  { month: "October", id: "/event/kalenderYouth/Evangelisering", date: 25 },
  { month: "October", id: "/event/kalenderYouth/Gudstjeneste", date: 26 },
  { month: "October", id: "/event/kalenderYouth/Bibelstudie", date: 30 },
  { month: "October", id: "/event/kalenderYouth/Bonnemote", date: 31 },
  { month: "November", id: "/event/kalenderYouth/Gudstjeneste", date: 2 },
  { month: "November", id: "/event/kalenderYouth/Connect", date: 6 },
  { month: "November", id: "/event/kalenderYouth/Evangelisering", date: 8 },
  { month: "November", id: "/event/kalenderYouth/Gudstjeneste", date: 9 },
  { month: "November", id: "/event/kalenderYouth/Bibelstudie", date: 13 },
  { month: "November", id: "/event/kalenderYouth/Bønnemøte", date: 14 },
  { month: "November", id: "/event/kalenderYouth/Gudstjeneste", date: 16 },
  { month: "November", id: "/event/kalenderYouth/Connect", date: 20 },
  { month: "November", id: "/event/kalenderYouth/Evangelisering", date: 22 },
  { month: "November", id: "/event/kalenderYouth/Gudstjeneste", date: 23 },
  { month: "November", id: "/event/kalenderYouth/Bibelstudie", date: 27 },
  { month: "November", id: "/event/kalenderYouth/Bønnemøte", date: 28 },
  { month: "November", id: "/event/kalenderYouth/Gudstjeneste", date: 30 },
  { month: "December", id: "/event/kalenderYouth/Connect", date: 4 },
  { month: "December", id: "/event/kalenderYouth/Evangelisering", date: 6 },
  { month: "December", id: "/event/kalenderYouth/Gudstjeneste", date: 7 },
  { month: "December", id: "/event/kalenderYouth/Connect", date: 12 },
  { month: "December", id: "/event/kalenderYouth/Gudstjeneste", date: 14 },
  { month: "December", id: "/event/kalenderYouth/Evangelisering", date: 20 },
  { month: "December", id: "/event/kalenderYouth/Gudstjeneste", date: 21 },
];

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1
        className="light dark primaryFontRegular text-slate-50 font-[600] my-5 leading-[84px] flex items-center gap-5"
        style={{ fontSize: "clamp(36px, 12vw, 80px)" }}
      >
        Kalender
        <span className="Kelsi-fill text-slate-50">x</span>
      </h1>{" "}
      <Calendar data={data} />
    </div>
  );
};

export default Home;
