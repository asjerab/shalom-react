import Calendar from "./NcKalenderFrame";

const data = [
    /////////////////
    // Januar Seksjon
    { month: "January", id: "/event/KalenderNewCreation/Bonnemote", date: 3, image: 'arrangementImages/BonnOgFasteImage.png'},
    { month: "January", id: "/event/KalenderNewCreation/Bonnemote", date: 4, image: 'arrangementImages/BonnOgFasteImage.png'},
    { month: "January", id: "/event/KalenderNewCreation/Bonnemote", date: 5, image: 'arrangementImages/BonnOgFasteImage.png'},
    { month: "January", id: "/event/KalenderNewCreation/TjenesteKickOff", date: 9, image: 'arrangementImages/TjenesteKickoff-img.png'},
    { month: "January", id: "/event/KalenderNewCreation/Gudstjeneste", date: 12, image: 'arrangementImages/gudstjenesteBilde.png'},
    { month: "January", id: "/event/KalenderNewCreation/Gudstjeneste", date: 19, image: 'arrangementImages/gudstjenesteBilde.png'},
    { month: "January", id: "/event/KalenderNewCreation/Bibelstudie", date: 21, image: 'grupperImages/bibelStudieBilde.png'},
    { month: "January", id: "/event/KalenderNewCreation/Bonnemote", date: 23, image: 'grupperImages/bonnBilde.png'},
    { month: "January", id: "/event/KalenderNewCreation/Gudstjeneste", date: 26, image: 'arrangementImages/gudstjenesteBilde.png'},
    { month: "January", id: "/event/KalenderNewCreation/Connect", date: 30, image: 'grupperImages/connectBilde.png'},
    { month: "January", id: "/event/KalenderNewCreation/Evangelisering", date: 31, image: 'grupperImages/evangeliseringBilde.png'},
    /////////////////
    // Feburar Seksjon
    { month: "February", id: "/event/KalenderNewCreation/Gudstjeneste", date: 2, image: 'arrangementImages/gudstjenesteBilde.png'},
    { month: "February", id: "/event/KalenderNewCreation/Bibelstudie", date: 4, image: 'grupperImages/bibelStudieBilde.png'},
    { month: "February", id: "/event/KalenderNewCreation/Bonnemote", date: 5, image: 'grupperImages/bonnBilde.png'},
    { month: "February", id: "/event/KalenderNewCreation/Gudstjeneste", date: 9, image: 'arrangementImages/gudstjenesteBilde.png'},
    { month: "February", id: "/event/KalenderNewCreation/Connect", date: 13, image: 'grupperImages/connectBilde.png'},
    { month: "February", id: "/event/KalenderNewCreation/Evangelisering", date: 14, image: 'grupperImages/evangeliseringBilde.png'},
    { month: "February", id: "/event/KalenderNewCreation/JamesEvent", date: 15, image: 'arrangementImages/jamesMinistryBilde.png'},
    { month: "February", id: "/event/KalenderNewCreation/Bibelstudie", date: 18, image: 'grupperImages/bibelStudieBilde.png'},
    { month: "February", id: "/event/KalenderNewCreation/AlphaOgDypere", date: 22, image: 'grupperImages/AlphaOgDypere.png'},
    { month: "February", id: "/event/KalenderNewCreation/Fellesmote", date: 23, image: 'arrangementImages/fellesMoteImage.png'},
    { month: "February", id: "/event/KalenderNewCreation/Tjenestekurs", date: 26, image: 'grupperImages/tjenesteKursBilde.png'},
    { month: "February", id: "/event/KalenderNewCreation/Connect", date: 27, image: 'grupperImages/connectBilde.png'},
    /////////////////
    // Mars Seksjon
    { month: "March", id: "/event/kalenderYouth/Gudstjeneste", date: 2, image: 'arrangementImages/gudstjenesteBilde.png'},
    { month: "March", id: "/event/KalenderNewCreation/AlphaOgDypere", date: 1, image: 'grupperImages/AlphaOgDypere.png'},
    { month: "March", id: "/event/KalenderNewCreation/Bibelstudie", date: 4, image: 'grupperImages/bibelStudieBilde.png'},
    { month: "March", id: "/event/KalenderNewCreation/Tjenestekurs", date: 5, image: 'grupperImages/tjenesteKursBilde.png'},
    { month: "March", id: "/event/KalenderNewCreation/Bonnemote", date: 6, image: 'grupperImages/bonnBilde.png'},
    { month: "March", id: "/event/KalenderNewCreation/Gudstjeneste", date: 9, image: 'arrangementImages/gudstjenesteBilde.png'},
    { month: "March", id: "/event/KalenderNewCreation/AlphaOgDypere", date: 8, image: 'grupperImages/AlphaOgDypere.png'},
    { month: "March", id: "/event/KalenderNewCreation/Tjenestekurs", date: 12, image: 'grupperImages/tjenesteKursBilde.png'},
    { month: "March", id: "/event/KalenderNewCreation/Connect", date: 13, image: 'grupperImages/connectBilde.png'},
    { month: "March", id: "/event/KalenderNewCreation/Evangelisering", date: 14, image: 'grupperImages/evangeliseringBilde.png'},
    { month: "March", id: "/event/KalenderNewCreation/AlphaOgDypere", date: 15, image: 'grupperImages/AlphaOgDypere.png'},
    { month: "March", id: "/event/kalenderYouth/Gudstjeneste", date: 16, image: 'arrangementImages/gudstjenesteBilde.png'},
    { month: "March", id: "/event/KalenderNewCreation/Bibelstudie", date: 18, image: 'grupperImages/bibelStudieBilde.png'},
    { month: "March", id: "/event/KalenderNewCreation/Tjenestekurs", date: 19, image: 'grupperImages/tjenesteKursBilde.png'},
    { month: "March", id: "/event/KalenderNewCreation/Bonnemote", date: 20, image: 'grupperImages/bonnBilde.png'},
    { month: "March", id: "/event/KalenderNewCreation/AlphaOgDypere", date: 22, image: 'grupperImages/AlphaOgDypere.png'},
    { month: "March", id: "/event/kalenderYouth/Gudstjeneste", date: 23, image: 'arrangementImages/gudstjenesteBilde.png'},
    { month: "March", id: "/event/KalenderNewCreation/Connect", date: 27, image: 'grupperImages/connectBilde.png'},
    { month: "March", id: "/event/KalenderNewCreation/Evangelisering", date: 28, image: 'grupperImages/evangeliseringBilde.png'},
    { month: "March", id: "/event/KalenderNewCreation/AlphaOgDypere", date: 29, image: 'grupperImages/AlphaOgDypere.png'},
    { month: "March", id: "/event/kalenderYouth/Gudstjeneste", date: 30, image: 'arrangementImages/gudstjenesteBilde.png'},
    /////////////////
    // April Seksjon
    { month: "April", id: "/event/KalenderNewCreation/Bibelstudie", date: 1, image: 'grupperImages/bibelStudieBilde.png'},
    { month: "April", id: "/event/KalenderNewCreation/Bonnemote", date: 3, image: 'grupperImages/bonnBilde.png'},
    { month: "April", id: "/event/KalenderNewCreation/Gudstjeneste", date: 6, image: 'arrangementImages/gudstjenesteBilde.png'},
    { month: "April", id: "/event/KalenderNewCreation/AlphaOgDypere", date: 5, image: 'grupperImages/AlphaOgDypere.png'},
    { month: "April", id: "/event/KalenderNewCreation/Connect", date: 10, image: 'grupperImages/connectBilde.png'},
    { month: "April", id: "/event/arrangementNewCreation/Paaskekonf", date: 11, image: 'arrangementImages/paaskekonf.png'},
    { month: "April", id: "/event/arrangementNewCreation/Paaskekonf", date: 12, image: 'arrangementImages/paaskekonf.png'},
    { month: "April", id: "/event/KalenderNewCreation/Connect", date: 24, image: 'grupperImages/connectBilde.png'},
    { month: "April", id: "/event/KalenderNewCreation/Evangelisering", date: 25, image: 'grupperImages/evangeliseringBilde.png'},
    { month: "April", id: "/event/KalenderNewCreation/Gudstjeneste", date: 27, image: 'arrangementImages/gudstjenesteBilde.png'},
    { month: "April", id: "/event/KalenderNewCreation/Bibelstudie", date: 29, image: 'grupperImages/bibelStudieBilde.png'},
    /////////////////
    // Mai Seksjon
    { month: "May", id: "/event/KalenderNewCreation/Bonnemote", date: 1, image: 'grupperImages/bonnBilde.png'},
    { month: "May", id: "/event/KalenderNewCreation/AlphaOgDypere", date: 3, image: 'grupperImages/AlphaOgDypere.png'},
    { month: "May", id: "/event/kalenderYouth/Gudstjeneste", date: 4, image: 'arrangementImages/gudstjenesteBilde.png'},
    { month: "May", id: "/event/KalenderNewCreation/Connect", date: 8, image: 'grupperImages/connectBilde.png'},
    { month: "May", id: "/event/KalenderNewCreation/Evangelisering", date: 9, image: 'grupperImages/evangeliseringBilde.png'},
    { month: "May", id: "/event/KalenderNewCreation/AlphaOgDypere", date: 10, image: 'grupperImages/AlphaOgDypere.png'},
    { month: "May", id: "/event/kalenderYouth/Gudstjeneste", date: 11, image: 'arrangementImages/gudstjenesteBilde.png'},
    { month: "May", id: "/event/KalenderNewCreation/Tjenestekurs", date: 7, image: 'grupperImages/tjenesteKursBilde.png'},
    { month: "May", id: "/event/KalenderNewCreation/Bibelstudie", date: 13, image: 'grupperImages/bibelStudieBilde.png'},
    { month: "May", id: "/event/KalenderNewCreation/Tjenestekurs", date: 14, image: 'grupperImages/tjenesteKursBilde.png'},
    { month: "May", id: "/event/KalenderNewCreation/Bonnemote", date: 15, image: 'grupperImages/bonnBilde.png'},
    { month: "May", id: "/event/KalenderNewCreation/Fellesmote", date: 18, image: 'arrangementImages/fellesMoteImage.png'},
    { month: "May", id: "/event/KalenderNewCreation/AlphaOgDypere", date: 17, image: 'grupperImages/AlphaOgDypere.png'},
    { month: "May", id: "/event/KalenderNewCreation/Connect", date: 22, image: 'grupperImages/connectBilde.png'},
    { month: "May", id: "/event/KalenderNewCreation/Tjenestekurs", date: 21, image: 'grupperImages/tjenesteKursBilde.png'},
    { month: "May", id: "/event/KalenderNewCreation/Evangelisering", date: 23, image: 'grupperImages/evangeliseringBilde.png'},
    { month: "May", id: "/event/kalenderYouth/Gudstjeneste", date: 25, image: 'arrangementImages/gudstjenesteBilde.png'},
    { month: "May", id: "/event/KalenderNewCreation/AlphaOgDypere", date: 24, image: 'grupperImages/AlphaOgDypere.png'},
    { month: "May", id: "/event/KalenderNewCreation/Bibelstudie", date: 27, image: 'grupperImages/bibelStudieBilde.png'},
    { month: "May", id: "/event/KalenderNewCreation/Tjenestekurs", date: 28, image: 'grupperImages/tjenesteKursBilde.png'},
    { month: "May", id: "/event/KalenderNewCreation/Bonnemote", date: 29, image: 'grupperImages/bonnBilde.png'},
    { month: "May", id: "/event/KalenderNewCreation/AlphaOgDypere", date: 31, image: 'grupperImages/AlphaOgDypere.png'},

    /////////////////
    // June Seksjon
    { month: "June", id: "/event/kalenderYouth/Gudstjeneste", date: 1, image: 'arrangementImages/gudstjenesteBilde.png'},
    { month: "June", id: "/event/KalenderNewCreation/Connect", date: 5, image: 'grupperImages/connectBilde.png'},
    { month: "June", id: "/event/KalenderNewCreation/Evangelisering", date: 6, image: 'grupperImages/evangeliseringBilde.png'},
    { month: "June", id: "/event/KalenderNewCreation/AlphaOgDypere", date: 7, image: 'grupperImages/AlphaOgDypere.png'},
    { month: "June", id: "/event/kalenderYouth/Gudstjeneste", date: 8, image: 'arrangementImages/gudstjenesteBilde.png'},
    { month: "June", id: "/event/KalenderNewCreation/Bibelstudie", date: 10, image: 'grupperImages/bibelStudieBilde.png'},
    { month: "June", id: "/event/KalenderNewCreation/Bonnemote", date: 12, image: 'grupperImages/bonnBilde.png'},
    { month: "June", id: "/event/KalenderNewCreation/AlphaOgDypere", date: 14, image: 'grupperImages/AlphaOgDypere.png'},
    { month: "June", id: "/event/kalenderYouth/Gudstjeneste", date: 15, image: 'arrangementImages/gudstjenesteBilde.png'},
    { month: "June", id: "/event/KalenderNewCreation/Connect", date: 19, image: 'grupperImages/connectBilde.png'},
    { month: "June", id: "/event/KalenderNewCreation/Evangelisering", date: 20, image: 'grupperImages/evangeliseringBilde.png'},
    { month: "June", id: "/event/kalenderYouth/Gudstjeneste", date: 22, image: 'arrangementImages/gudstjenesteBilde.png'},
    { month: "June", id: "/event/KalenderNewCreation/Bibelstudie", date: 24, image: 'grupperImages/bibelStudieBilde.png'},
    { month: "June", id: "/event/KalenderNewCreation/Bonnemote", date: 26, image: 'grupperImages/bonnBilde.png'},
    { month: "June", id: "/event/kalenderYouth/Gudstjeneste", date: 29, image: 'arrangementImages/gudstjenesteBilde.png'},
  ];
  

console.log(data);
const Home: React.FC = () => {
  
  return (
    <main className="py-[100px] px-[20px]">
      <div className="w-full max-w-[1100px] mx-auto p-4 kalender-div" id="NewCreation-kalender">
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
