import Calendar from "./NcKalenderFrame";

const data = [
  ///////////////// 
  // September Seksjon
  { month: "September", id: "/event/KalenderNewCreation/Bibelstudie", date: 3, image: 'grupperImages/bible-studie-img.png' },
  { month: "September", id: "https://dayandnight.no/2024/04/24/6110/", date: 4, image: 'arrangementImages/BonnOgFasteImage.png' },
  { month: "September", id: "https://dayandnight.no/2024/04/24/6110/", date: 5, image: 'arrangementImages/BonnOgFasteImage.png' },
  { month: "September", id: "https://dayandnight.no/2024/04/24/6110/", date: 6, image: 'arrangementImages/BonnOgFasteImage.png' },
  { month: "September", id: "https://dayandnight.no/2024/04/24/6110/", date: 7, image: 'arrangementImages/BonnOgFasteImage.png' },
  { month: "September", id: "https://dayandnight.no/2024/04/24/6110/", date: 8, image: 'arrangementImages/BonnOgFasteImage.png' },
  { month: "September", id: "/event/KalenderNewCreation/Connect", date: 12, image: 'grupperImages/connect-img.png' },
  { month: "September", id: "/event/arrangementNewCreation/Storsondag", date: 15, image: 'arrangementImages/Storsondag-img.png' },
  { month: "September", id: "/event/KalenderNewCreation/Bonnemote", date: 19, image: 'grupperImages/bonn-img.png' },
  { month: "September", id: "/event/KalenderNewCreation/Evangelisering", date: 20, image: 'grupperImages/evangelisering-img.png' },
  { month: "September", id: "/event/KalenderNewCreation/Gudstjeneste", date: 22, image: 'grupperImages/Gudstjeneste-img.png' },
  { month: "September", id: "/event/KalenderNewCreation/Connect", date: 26, image: 'grupperImages/connect-img.png' },
    ///////////////// 
  // October Seksjon
  { month: "October", id: "/event/KalenderNewCreation/Bibelstudie", date: 1, image: 'grupperImages/bible-studie-img.png' },
  { month: "October", id: "/event/KalenderNewCreation/Bonnemote", date: 3, image: 'grupperImages/bonn-img.png' },
  { month: "October", id: "/event/KalenderNewCreation/Evangelisering", date: 4, image: 'grupperImages/evangelisering-img.png' },
  { month: "October", id: "/event/KalenderNewCreation/AlphaOgDypere", date: 5, image: 'grupperImages/AlphaOgDypere.png' },
  { month: "October", id: "/event/KalenderNewCreation/Fellesmote", date: 6, image: 'grupperImages/FellesMoteImage.png' },
  { month: "October", id: "/event/KalenderNewCreation/Tjenestekurs", date: 9, image: 'grupperImages/tjeneste-kurs-img.png' },
  { month: "October", id: "/event/KalenderNewCreation/Connect", date: 10, image: 'grupperImages/connect-img.png' },
  { month: "October", id: "/event/KalenderNewCreation/AlphaOgDypere", date: 12, image: 'grupperImages/AlphaOgDypere.png' },
  { month: "October", id: "/event/KalenderNewCreation/Gudstjeneste", date: 13, image: 'grupperImages/Gudstjeneste-img.png' },
  { month: "October", id: "/event/KalenderNewCreation/Tjenestekurs", date: 16, image: 'grupperImages/tjeneste-kurs-img.png' },
  { month: "October", id: "/event/KalenderNewCreation/Bonnemote", date: 17, image: 'grupperImages/bonn-img.png' },
  { month: "October", id: "/event/KalenderNewCreation/Evangelisering", date: 18, image: 'grupperImages/evangelisering-img.png' },
  { month: "October", id: "/event/KalenderNewCreation/AlphaOgDypere", date: 19, image: 'grupperImages/AlphaOgDypere.png' },
  { month: "October", id: "/event/KalenderNewCreation/Gudstjeneste", date: 20, image: 'grupperImages/Gudstjeneste-img.png' },
  { month: "October", id: "/event/KalenderNewCreation/Tjenestekurs", date: 23, image: 'grupperImages/tjeneste-kurs-img.png' },
  { month: "October", id: "/event/KalenderNewCreation/Connect", date: 24, image: 'grupperImages/connect-img.png' },
  { month: "October", id: "/event/KalenderNewCreation/AlphaOgDypere", date: 26, image: 'grupperImages/AlphaOgDypere.png' },
  { month: "October", id: "/event/KalenderNewCreation/Tjenestekurs", date: 30, image: 'grupperImages/tjeneste-kurs-img.png' },
  { month: "October", id: "/event/KalenderNewCreation/Bibelstudie", date: 15, image: 'grupperImages/bible-studie-img.png' },
  { month: "October", id: "/event/KalenderNewCreation/JamesEvent", date: 27, image: 'grupperImages/James-img.png' },
  { month: "October", id: "/event/KalenderNewCreation/Bibelstudie", date: 29, image: 'grupperImages/bible-studie-img.png' },
  { month: "October", id: "/event/KalenderNewCreation/Bonnemote", date: 31, image: 'grupperImages/bonn-img.png' },

  ///////////////// 
  // November Seksjon
  { month: "November", id: "/event/KalenderNewCreation/Evangelisering", date: 1, image: 'grupperImages/evangelisering-img.png' },
  { month: "November", id: "/event/KalenderNewCreation/AlphaOgDypere", date: 2, image: 'grupperImages/AlphaOgDypere.png' },
  { month: "November", id: "/event/KalenderNewCreation/Gudstjeneste", date: 3, image: 'grupperImages/Gudstjeneste-img.png' },
  { month: "November", id: "/event/KalenderNewCreation/Connect", date: 7, image: 'grupperImages/connect-img.png' },
  { month: "November", id: "/event/KalenderNewCreation/AlphaOgDypere", date: 9, image: 'grupperImages/AlphaOgDypere.png' },
  { month: "November", id: "/event/KalenderNewCreation/Gudstjeneste", date: 10, image: 'grupperImages/Gudstjeneste-img.png' },
  { month: "November", id: "/event/KalenderNewCreation/Bibelstudie", date: 12, image: 'grupperImages/bible-studie-img.png' },
  { month: "November", id: "/event/KalenderNewCreation/Bonnemote", date: 14, image: 'grupperImages/bonn-img.png' },
  { month: "November", id: "/event/KalenderNewCreation/Evangelisering", date: 15, image: 'grupperImages/evangelisering-img.png' },
  { month: "November", id: "/event/KalenderNewCreation/AlphaOgDypere", date: 16, image: 'grupperImages/AlphaOgDypere.png' },
  { month: "November", id: "/event/KalenderNewCreation/Gudstjeneste", date: 17, image: 'grupperImages/Gudstjeneste-img.png' },
  { month: "November", id: "/event/KalenderNewCreation/Connect", date: 21, image: 'grupperImages/connect-img.png' },
  { month: "November", id: "/event/KalenderNewCreation/Gudstjeneste", date: 24, image: 'grupperImages/Gudstjeneste-img.png' },
  { month: "November", id: "/event/KalenderNewCreation/Bibelstudie", date: 26, image: 'grupperImages/bible-studie-img.png' },
  { month: "November", id: "/event/KalenderNewCreation/Bonnemote", date: 28, image: 'grupperImages/bonn-img.png' },
  { month: "November", id: "/event/KalenderNewCreation/Evangelisering", date: 29, image: 'grupperImages/evangelisering-img.png' },
  ///////////////// 
  // December Seksjon
  { month: "December", id: "/event/KalenderNewCreation/Gudstjeneste", date: 1, image: 'grupperImages/Gudstjeneste-img.png' },
  { month: "December", id: "/event/KalenderNewCreation/Connect", date: 5, image: 'grupperImages/connect-img.png' },
  { month: "December", id: "/event/KalenderNewCreation/Gudstjeneste", date: 8, image: 'grupperImages/Gudstjeneste-img.png' },
  { month: "December", id: "/event/KalenderNewCreation/Bibelstudie", date: 10, image: 'grupperImages/bible-studie-img.png' },
  { month: "December", id: "/event/KalenderNewCreation/Bonnemote", date: 12, image: 'grupperImages/bonn-img.png' },
  { month: "December", id: "/event/KalenderNewCreation/Evangelisering", date: 13, image: 'grupperImages/evangelisering-img.png' },
  { month: "December", id: "/event/KalenderNewCreation/Gudstjeneste", date: 15, image: 'grupperImages/Gudstjeneste-img.png' },
  { month: "December", id: "/event/KalenderNewCreation/Connect", date: 19, image: 'grupperImages/connect-img.png' },
  { month: "December", id: "/event/KalenderNewCreation/Fellesmote", date: 22, image: 'grupperImages/FellesMoteImage.png' },

];

console.log(data);
const Home: React.FC = () => {
  
  return (
    <main className="py-[100px] px-[20px]">
      <div className="w-full max-w-[1325px] mx-auto p-4" id="NewCreation-kalender">
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
