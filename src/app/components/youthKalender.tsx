import Calendar from "./YouthKalenderFrame";

const data = [
  /////////////////
  // Juni Seksjon
  { month: "June", id: "/event/kalenderYouth/Gudstjeneste", date: 1, image: 'grupperImages/Gudstjeneste-img.png'},
  { month: "June", id: "/event/kalenderYouth/Connect", date: 5, image: 'grupperImages/connect-img.png' },
  { month: "June", id: "/event/kalenderYouth/Evangelisering", date: 7, image: 'grupperImages/evangelisering-img.png'  },
  { month: "June",id: "/event/kalenderYouth/AlphakursTheUpperRoom",date: 9, image: 'grupperImages/alpha-kurs-img.png'},
  { month: "June", id: "/event/kalenderYouth/Bibelstudie", date: 11, image: 'grupperImages/bible-studie-img.png' },
  { month: "June", id: "/event/kalenderYouth/Bonnemote", date: 13, image: 'grupperImages/bonn-img.png'  },
  { month: "June", id: "/event/kalenderYouth/Gudstjeneste", date: 15, image: 'grupperImages/Gudstjeneste-img.png' },
  { month: "June", id: "/event/kalenderYouth/Gudstjeneste", date: 22, image: 'grupperImages/Gudstjeneste-img.png' },
  { month: "June", id: "/event/kalenderYouth/Gudstjeneste", date: 30, image: 'grupperImages/Gudstjeneste-img.png' },
  ///////////////// 
  // August Seksjon
  { month: "August", id: "/event/kalenderYouth/TjenesteKickOff", date: 22, image: 'grupperImages/TjenesteKickoff-img.png'},
  { month: "August", id: "/event/kalenderYouth/Gudstjeneste", date: 24, image: 'grupperImages/Gudstjeneste-img.png' },
  { month: "August", id: "/event/kalenderYouth/Gudstjeneste", date: 31, image: 'grupperImages/Gudstjeneste-img.png' },
  ///////////////// 
  // September Seksjon
  { month: "September", id: "/event/kalenderYouth/Bibelstudie", date: 3, image: 'grupperImages/bible-studie-img.png'  },
  { month: "September", id: "https://dayandnight.no/2024/04/24/6110/", date: 4, image: 'arrangementImages/BonnOgFasteImage.png'  },
  { month: "September", id: "https://dayandnight.no/2024/04/24/6110/", date: 5, image: 'arrangementImages/BonnOgFasteImage.png'  },
  { month: "September", id: "https://dayandnight.no/2024/04/24/6110/", date: 6, image: 'arrangementImages/BonnOgFasteImage.png'  },
  { month: "September", id: "https://dayandnight.no/2024/04/24/6110/", date: 7, image: 'arrangementImages/BonnOgFasteImage.png'  },
  { month: "September", id: "https://dayandnight.no/2024/04/24/6110/", date: 8, image: 'arrangementImages/BonnOgFasteImage.png'  },
  { month: "September", id: "/event/kalenderYouth/Connect", date: 11 , image: 'grupperImages/connect-img.png'  },
  { month: "September", id: "/event/kalenderYouth/Gudstjeneste", date: 14, image: 'grupperImages/Gudstjeneste-img.png'},
  { month: "September", id: "/event/arrangement/Storsondag", date: 15, image: 'arrangementImages/Storsondag-img.png'},
  { month: "September", id: "/event/kalenderYouth/Bonnemote", date: 19, image: 'grupperImages/bonn-img.png'  },
  { month: "September", id: "/event/kalenderYouth/Evangelisering", date: 20, image: 'grupperImages/evangelisering-img.png'  },
  { month: "September", id: "/event/kalenderYouth/Gudstjeneste", date: 21, image: 'grupperImages/Gudstjeneste-img.png'},
  { month: "September", id: "/event/kalenderYouth/Connect", date: 25 , image: 'grupperImages/connect-img.png' },
  ///////////////// 
  // October Seksjon
  { month: "October", id: "/event/kalenderYouth/Bibelstudie", date: 1, image: 'grupperImages/bible-studie-img.png'  },
  { month: "October", id: "/event/kalenderYouth/Bonnemote", date: 3, image: 'grupperImages/bonn-img.png'  },
  { month: "October", id: "/event/kalenderYouth/Evangelisering", date: 4, image: 'grupperImages/evangelisering-img.png'  },
  { month: "October", id: "/event/kalenderYouth/MultiSondagsArrangement", date: 5 , image: 'grupperImages/AlphaDypereOgGudstjeneste.png'},
  { month: "October", id: "/event/kalenderYouth/Fellesmote", date: 6 , image: 'grupperImages/FellesMoteImage.png'},
  { month: "October", id: "/event/kalenderYouth/ConnectOgTjenestekurs", date: 9 , image: 'grupperImages/ConnetOgTjenestekurs.png' },
  { month: "October", id: "/event/kalenderYouth/MultiSondagsArrangement", date: 12 , image: 'grupperImages/AlphaDypereOgGudstjeneste.png'},
  { month: "October", id: "/event/kalenderYouth/Bibelstudie", date: 15, image: 'grupperImages/bible-studie-img.png'  },
  { month: "October", id: "/event/kalenderYouth/Tjenestekurs", date: 16, image: 'grupperImages/tjeneste-kurs-img.png'  },
  { month: "October", id: "/event/kalenderYouth/Bonnemote", date: 17, image: 'grupperImages/bonn-img.png'  },
  { month: "October", id: "/event/kalenderYouth/Evangelisering", date: 18, image: 'grupperImages/evangelisering-img.png'  },
  { month: "October", id: "/event/kalenderYouth/MultiSondagsArrangement", date: 19 , image: 'grupperImages/AlphaDypereOgGudstjeneste.png'},
  { month: "October", id: "/event/kalenderYouth/ConnectOgTjenestekurs", date: 23 , image: 'grupperImages/ConnetOgTjenestekurs.png' },
  { month: "October", id: "/event/kalenderYouth/MultiSondagsArrangement", date: 26 , image: 'grupperImages/AlphaDypereOgGudstjeneste.png'},
  { month: "October", id: "/event/kalenderYouth/JamesEvent", date: 27, image: 'grupperImages/James-img.png' },
  { month: "October", id: "/event/kalenderYouth/Bibelstudie", date: 29, image: 'grupperImages/bible-studie-img.png'  },
  { month: "October", id: "/event/kalenderYouth/Tjenestekurs", date: 30, image: 'grupperImages/tjeneste-kurs-img.png'  },
  { month: "October", id: "/event/kalenderYouth/Bonnemote", date: 31, image: 'grupperImages/bonn-img.png'  },
  ///////////////// 
  // November Seksjon
  { month: "November", id: "/event/kalenderYouth/Evangelisering", date: 1, image: 'grupperImages/evangelisering-img.png'  },
  { month: "November", id: "/event/kalenderYouth/MultiSondagsArrangement", date: 2 , image: 'grupperImages/AlphaDypereOgGudstjeneste.png'},
  { month: "November", id: "/event/kalenderYouth/Connect", date: 6, image: 'grupperImages/connect-img.png' },
  { month: "November", id: "/event/kalenderYouth/MultiSondagsArrangement", date: 9 , image: 'grupperImages/AlphaDypereOgGudstjeneste.png'},
  { month: "November", id: "/event/kalenderYouth/Bibelstudie", date: 12, image: 'grupperImages/bible-studie-img.png'  },
  { month: "November", id: "/event/kalenderYouth/Bonnemote", date: 14, image: 'grupperImages/bonn-img.png'  },
  { month: "November", id: "/event/kalenderYouth/Evangelisering", date: 15, image: 'grupperImages/evangelisering-img.png'  },
  { month: "November", id: "/event/kalenderYouth/MultiSondagsArrangement", date: 16 , image: 'grupperImages/AlphaDypereOgGudstjeneste.png'},
  { month: "November", id: "/event/kalenderYouth/Connect", date: 20, image: 'grupperImages/connect-img.png' },
  { month: "November", id: "/event/kalenderYouth/Gudstjeneste", date: 23, image: 'grupperImages/Gudstjeneste-img.png' },
  { month: "November", id: "/event/kalenderYouth/Bibelstudie", date: 26, image: 'grupperImages/bible-studie-img.png'  },
  { month: "November", id: "/event/kalenderYouth/Bonnemote", date: 28, image: 'grupperImages/bonn-img.png'  },
  { month: "November", id: "/event/kalenderYouth/Evangelisering", date: 29, image: 'grupperImages/evangelisering-img.png'  },
  { month: "November", id: "/event/kalenderYouth/Gudstjeneste", date: 30, image: 'grupperImages/Gudstjeneste-img.png' },
  ///////////////// 
  // December Seksjon
  { month: "December", id: "/event/kalenderYouth/Connect", date: 4, image: 'grupperImages/connect-img.png' },
  { month: "December", id: "/event/kalenderYouth/Gudstjeneste", date: 7 , image: 'grupperImages/Gudstjeneste-img.png'},
  { month: "December", id: "/event/kalenderYouth/Bibelstudie", date: 10, image: 'grupperImages/bible-studie-img.png'  },
  { month: "December", id: "/event/kalenderYouth/Connect", date: 12, image: 'grupperImages/connect-img.png' },
  { month: "December", id: "/event/kalenderYouth/Evangelisering", date: 13, image: 'grupperImages/evangelisering-img.png'  },
  { month: "December", id: "/event/kalenderYouth/Gudstjeneste", date: 14, image: 'grupperImages/Gudstjeneste-img.png' },
  { month: "December", id: "/event/kalenderYouth/Fellesmote", date: 22, image: 'grupperImages/FellesMoteImage.png' },
];

const Home: React.FC = () => {
  return (
    <main className="py-[100px] px-[20px]">
      <div className="w-full max-w-[1325px] mx-auto p-4 kalender-div " id="youth-kalender">
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
