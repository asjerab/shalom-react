import Calendar from "./kalenderFrame";
const data = [
  { month: "June", id: "/event/kalenderYouth/Gudstjeneste", date: 1, },
  { month: "June", id: "/event/kalenderYouth/Connect", date: 5, image: 'grupperImages/connect-img.png' },
  { month: "June", id: "/event/kalenderYouth/Evangelisering", date: 7, image: 'grupperImages/evangelisering-img.png'  },
  {
    month: "June",
    id: "/event/kalenderYouth/AlphakursTheUpperRoom",
    date: 9,
  },
  { month: "June", id: "/event/kalenderYouth/Bibelstudie", date: 12, image: 'grupperImages/bible-studie-img.png' },
  { month: "June", id: "/event/kalenderYouth/Bonnemote", date: 13, image: 'grupperImages/bonn-img.png'  },
  { month: "June", id: "/event/kalenderYouth/Gudstjeneste", date: 15 },
  { month: "June", id: "/event/kalenderYouth/Gudstjeneste", date: 22 },
  { month: "June", id: "/event/kalenderYouth/Gudstjeneste", date: 30 },
  { month: "August", id: "/event/kalenderYouth/TjenesteKickOff", date: 22 },
  { month: "August", id: "/event/kalenderYouth/Gudstjeneste", date: 24 },
  { month: "August", id: "/event/kalenderYouth/Gudstjeneste", date: 31 },
  { month: "September", id: "/event/kalenderYouth/Bibelstudie", date: 4, image: 'grupperImages/bible-studie-img.png'  },
  { month: "September", id: "/event/kalenderYouth/Bonnemote", date: 5, image: 'grupperImages/bonn-img.png'  },
  { month: "September", id: "/event/kalenderYouth/Connect", date: 11 , image: 'grupperImages/connect-img.png'  },
  { month: "September", id: "/event/kalenderYouth/Evangelisering", date: 13, image: 'grupperImages/evangelisering-img.png'  },
  { month: "September", id: "/event/kalenderYouth/Gudstjeneste", date: 14 },
  { month: "September", id: "/event/kalenderYouth/Bibelstudie", date: 18, image: 'grupperImages/bible-studie-img.png'  },
  { month: "September", id: "/event/kalenderYouth/Bonnemote", date: 19, image: 'grupperImages/bonn-img.png'  },
  { month: "September", id: "/event/kalenderYouth/Gudstjeneste", date: 21 },
  { month: "September", id: "/event/kalenderYouth/Connect", date: 25 , image: 'grupperImages/connect-img.png' },
  { month: "October", id: "/event/kalenderYouth/Bibelstudie", date: 2, image: 'grupperImages/bible-studie-img.png'  },
  { month: "October", id: "/event/kalenderYouth/Bonnemote", date: 3, image: 'grupperImages/bonn-img.png'  },
  { month: "October", id: "/event/kalenderYouth/Gudstjeneste", date: 5 },
  { month: "October", id: "/event/kalenderYouth/Connect", date: 9 , image: 'grupperImages/connect-img.png' },
  { month: "October", id: "/event/kalenderYouth/Evangelisering", date: 11, image: 'grupperImages/evangelisering-img.png'  },
  { month: "October", id: "/event/kalenderYouth/Gudstjeneste", date: 12 },
  { month: "October", id: "/event/kalenderYouth/Bibelstudie", date: 16, image: 'grupperImages/bible-studie-img.png'  },
  { month: "October", id: "/event/kalenderYouth/Bonnemote", date: 17, image: 'grupperImages/bonn-img.png'  },
  { month: "October", id: "/event/kalenderYouth/Gudstjeneste", date: 19 },
  { month: "October", id: "/event/kalenderYouth/Connect", date: 23, image: 'grupperImages/connect-img.png' },
  { month: "October", id: "/event/kalenderYouth/Evangelisering", date: 25, image: 'grupperImages/evangelisering-img.png'  },
  { month: "October", id: "/event/kalenderYouth/Gudstjeneste", date: 26 },
  { month: "October", id: "/event/kalenderYouth/Bibelstudie", date: 30, image: 'grupperImages/bible-studie-img.png'  },
  { month: "October", id: "/event/kalenderYouth/Bonnemote", date: 31, image: 'grupperImages/bonn-img.png'  },
  { month: "November", id: "/event/kalenderYouth/Gudstjeneste", date: 2 },
  { month: "November", id: "/event/kalenderYouth/Connect", date: 6, image: 'grupperImages/connect-img.png' },
  { month: "November", id: "/event/kalenderYouth/Evangelisering", date: 8, image: 'grupperImages/evangelisering-img.png'  },
  { month: "November", id: "/event/kalenderYouth/Gudstjeneste", date: 9 },
  { month: "November", id: "/event/kalenderYouth/Bibelstudie", date: 13, image: 'grupperImages/bible-studie-img.png'  },
  { month: "November", id: "/event/kalenderYouth/Bonnemote", date: 14, image: 'grupperImages/bonn-img.png'  },
  { month: "November", id: "/event/kalenderYouth/Gudstjeneste", date: 16 },
  { month: "November", id: "/event/kalenderYouth/Connect", date: 20, image: 'grupperImages/connect-img.png' },
  { month: "November", id: "/event/kalenderYouth/Evangelisering", date: 22, image: 'grupperImages/evangelisering-img.png'  },
  { month: "November", id: "/event/kalenderYouth/Gudstjeneste", date: 23 },
  { month: "November", id: "/event/kalenderYouth/Bibelstudie", date: 27, image: 'grupperImages/bible-studie-img.png'  },
  { month: "November", id: "/event/kalenderYouth/Bonnemote", date: 28, image: 'grupperImages/bonn-img.png'  },
  { month: "November", id: "/event/kalenderYouth/Gudstjeneste", date: 30 },
  { month: "December", id: "/event/kalenderYouth/Connect", date: 4, image: 'grupperImages/connect-img.png' },
  { month: "December", id: "/event/kalenderYouth/Evangelisering", date: 6, image: 'grupperImages/evangelisering-img.png'  },
  { month: "December", id: "/event/kalenderYouth/Gudstjeneste", date: 7 },
  { month: "December", id: "/event/kalenderYouth/Connect", date: 12, image: 'grupperImages/connect-img.png' },
  { month: "December", id: "/event/kalenderYouth/Gudstjeneste", date: 14 },
  { month: "December", id: "/event/kalenderYouth/Evangelisering", date: 20, image: 'grupperImages/evangelisering-img.png'  },
  { month: "December", id: "/event/kalenderYouth/Gudstjeneste", date: 21 },
];

const Home: React.FC = () => {
  return (
    <main className="py-[100px] px-[35px]">
      <div className="w-full max-w-[1325px] mx-auto p-4">
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
            style={{ fontSize: "clamp(15px, 5vw, 25px)" }}
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
