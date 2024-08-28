import Calendar from "./YouthKalenderFrame";

const data = [
  /////////////////
  // Juni Seksjon
  { month: "June", id: "/event/kalenderYouth/Gudstjeneste", date: 1, image: 'kalenderImages/gudstjeneste-kal-img.png' },
  { month: "June", id: "/event/kalenderYouth/Connect", date: 5, image: 'kalenderImages/connect-kal-img.png' },
  { month: "June", id: "/event/kalenderYouth/Evangelisering", date: 7, image: 'kalenderImages/evangelisering-kal-img.png'  },
  { month: "June",id: "/event/kalenderYouth/AlphakursTheUpperRoom",date: 9, image: 'kalenderImages/alphaKurs-kal-img.png'},
  { month: "June", id: "/event/kalenderYouth/Bibelstudie", date: 12, image: 'kalenderImages/bibelstudie-kal-img.png' },
  { month: "June", id: "/event/kalenderYouth/Bonnemote", date: 13, image: 'kalenderImages/bonn-kal-img.png'  },
  { month: "June", id: "/event/kalenderYouth/Gudstjeneste", date: 15, image: 'kalenderImages/gudstjeneste-kal-img.png' },
  { month: "June", id: "/event/kalenderYouth/Gudstjeneste", date: 22, image: 'kalenderImages/gudstjeneste-kal-img.png' },
  { month: "June", id: "/event/kalenderYouth/Gudstjeneste", date: 30, image: 'kalenderImages/gudstjeneste-kal-img.png' },
  ///////////////// 
  // August Seksjon
  { month: "August", id: "/event/kalenderYouth/TjenesteKickOff", date: 22, image: 'kalenderImages/tjeneste-kickoff-kal-img.png' },
  { month: "August", id: "/event/kalenderYouth/Gudstjeneste", date: 24, image: 'kalenderImages/gudstjeneste-kal-img.png' },
  { month: "August", id: "/event/kalenderYouth/Gudstjeneste", date: 31, image: 'kalenderImages/gudstjeneste-kal-img.png' },
  ///////////////// 
  // September Seksjon
  { month: "September", id: "/event/kalenderYouth/Bibelstudie", date: 4, image: 'kalenderImages/bibelstudie-kal-img.png'  },
  { month: "September", id: "/event/kalenderYouth/Bonnemote", date: 5, image: 'kalenderImages/bonn-kal-img.png'  },
  { month: "September", id: "/event/kalenderYouth/Connect", date: 11 , image: 'kalenderImages/connect-kal-img.png'  },
  { month: "September", id: "/event/kalenderYouth/Evangelisering", date: 13, image: 'kalenderImages/evangelisering-kal-img.png'  },
  { month: "September", id: "/event/kalenderYouth/Gudstjeneste", date: 14, image: 'kalenderImages/gudstjeneste-kal-img.png' },
  { month: "September", id: "/event/kalenderYouth/Bibelstudie", date: 18, image: 'kalenderImages/bibelstudie-kal-img.png'  },
  { month: "September", id: "/event/kalenderYouth/Bonnemote", date: 19, image: 'kalenderImages/bonn-kal-img.png'  },
  { month: "September", id: "/event/kalenderYouth/Gudstjeneste", date: 21, image: 'kalenderImages/gudstjeneste-kal-img.png' },
  { month: "September", id: "/event/kalenderYouth/Connect", date: 25 , image: 'kalenderImages/connect-kal-img.png' },
  ///////////////// 
  // October Seksjon
  { month: "October", id: "/event/kalenderYouth/Bibelstudie", date: 2, image: 'kalenderImages/bibelstudie-kal-img.png'  },
  { month: "October", id: "/event/kalenderYouth/Bonnemote", date: 3, image: 'kalenderImages/bonn-kal-img.png'  },
  { month: "October", id: "/event/kalenderYouth/Gudstjeneste", date: 5 , image: 'kalenderImages/gudstjeneste-kal-img.png'},
  { month: "October", id: "/event/kalenderYouth/Connect", date: 9 , image: 'kalenderImages/connect-kal-img.png' },
  { month: "October", id: "/event/kalenderYouth/Evangelisering", date: 11, image: 'kalenderImages/evangelisering-kal-img.png'  },
  { month: "October", id: "/event/kalenderYouth/Gudstjeneste", date: 12, image: 'kalenderImages/gudstjeneste-kal-img.png' },
  { month: "October", id: "/event/kalenderYouth/Bibelstudie", date: 16, image: 'kalenderImages/bibelstudie-kal-img.png'  },
  { month: "October", id: "/event/kalenderYouth/Bonnemote", date: 17, image: 'kalenderImages/bonn-kal-img.png'  },
  { month: "October", id: "/event/kalenderYouth/Gudstjeneste", date: 19, image: 'kalenderImages/gudstjeneste-kal-img.png' },
  { month: "October", id: "/event/kalenderYouth/Connect", date: 23, image: 'kalenderImages/connect-kal-img.png' },
  { month: "October", id: "/event/kalenderYouth/Evangelisering", date: 25, image: 'kalenderImages/evangelisering-kal-img.png'  },
  { month: "October", id: "/event/kalenderYouth/Gudstjeneste", date: 26, image: 'kalenderImages/gudstjeneste-kal-img.png' },
  { month: "October", id: "/event/kalenderYouth/Bibelstudie", date: 30, image: 'kalenderImages/bibelstudie-kal-img.png'  },
  { month: "October", id: "/event/kalenderYouth/Bonnemote", date: 31, image: 'kalenderImages/bonn-kal-img.png'  },
  ///////////////// 
  // November Seksjon
  { month: "November", id: "/event/kalenderYouth/Gudstjeneste", date: 2 , image: 'kalenderImages/gudstjeneste-kal-img.png'},
  { month: "November", id: "/event/kalenderYouth/Connect", date: 6, image: 'kalenderImages/connect-kal-img.png' },
  { month: "November", id: "/event/kalenderYouth/Evangelisering", date: 8, image: 'kalenderImages/evangelisering-kal-img.png'  },
  { month: "November", id: "/event/kalenderYouth/Gudstjeneste", date: 9 , image: 'kalenderImages/gudstjeneste-kal-img.png'},
  { month: "November", id: "/event/kalenderYouth/Bibelstudie", date: 13, image: 'kalenderImages/bibelstudie-kal-img.png'  },
  { month: "November", id: "/event/kalenderYouth/Bonnemote", date: 14, image: 'kalenderImages/bonn-kal-img.png'  },
  { month: "November", id: "/event/kalenderYouth/Gudstjeneste", date: 16, image: 'kalenderImages/gudstjeneste-kal-img.png' },
  { month: "November", id: "/event/kalenderYouth/Connect", date: 20, image: 'kalenderImages/connect-kal-img.png' },
  { month: "November", id: "/event/kalenderYouth/Evangelisering", date: 22, image: 'kalenderImages/evangelisering-kal-img.png'  },
  { month: "November", id: "/event/kalenderYouth/Gudstjeneste", date: 23, image: 'kalenderImages/gudstjeneste-kal-img.png' },
  { month: "November", id: "/event/kalenderYouth/Bibelstudie", date: 27, image: 'kalenderImages/bibelstudie-kal-img.png'  },
  { month: "November", id: "/event/kalenderYouth/Bonnemote", date: 28, image: 'kalenderImages/bonn-kal-img.png'  },
  { month: "November", id: "/event/kalenderYouth/Gudstjeneste", date: 30, image: 'kalenderImages/gudstjeneste-kal-img.png' },
  ///////////////// 
  // December Seksjon
  { month: "December", id: "/event/kalenderYouth/Connect", date: 4, image: 'kalenderImages/connect-kal-img.png' },
  { month: "December", id: "/event/kalenderYouth/Evangelisering", date: 6, image: 'kalenderImages/evangelisering-kal-img.png'  },
  { month: "December", id: "/event/kalenderYouth/Gudstjeneste", date: 7 , image: 'kalenderImages/gudstjeneste-kal-img.png'},
  { month: "December", id: "/event/kalenderYouth/Connect", date: 12, image: 'kalenderImages/connect-kal-img.png' },
  { month: "December", id: "/event/kalenderYouth/Gudstjeneste", date: 14, image: 'kalenderImages/gudstjeneste-kal-img.png' },
  { month: "December", id: "/event/kalenderYouth/Evangelisering", date: 20, image: 'kalenderImages/evangelisering-kal-img.png'  },
  { month: "December", id: "/event/kalenderYouth/Gudstjeneste", date: 21, image: 'kalenderImages/gudstjeneste-kal-img.png' },
];

const Home: React.FC = () => {
  return (
    <main className="py-[100px] px-[25px]">
      <div className="w-full max-w-[1325px] mx-auto p-4" id="youth-kalender">
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
