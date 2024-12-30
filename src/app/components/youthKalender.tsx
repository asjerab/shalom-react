import Calendar from "./YouthKalenderFrame";

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
  // Feburar Seksjon
  { month: "February", id: "/event/kalenderYouth/Gudstjeneste", date: 1, image: 'arrangementImages/gudstjenesteBilde.png'},
  { month: "February", id: "/event/kalenderYouth/Bibelstudie", date: 4, image: 'grupperImages/bibelStudieBilde.png'},
  { month: "February", id: "/event/kalenderYouth/Bonnemote", date: 6, image: 'grupperImages/bonnBilde.png'},
  { month: "February", id: "/event/kalenderYouth/Gudstjeneste", date: 8, image: 'arrangementImages/gudstjenesteBilde.png'},
  { month: "February", id: "/event/kalenderYouth/Connect", date: 12, image: 'grupperImages/connectBilde.png'},
  { month: "February", id: "/event/kalenderYouth/Evangelisering", date: 14, image: 'grupperImages/evangeliseringBilde.png'},
  { month: "February", id: "/event/kalenderYouth/JamesEvent", date: 15, image: 'arrangementImages/jamesMinistryBilde.png'},
  { month: "February", id: "/event/kalenderYouth/Bibelstudie", date: 18, image: 'grupperImages/bibelStudieBilde.png'},
  { month: "February", id: "/event/kalenderYouth/Bonnemote", date: 20, image: 'grupperImages/bonnBilde.png'},
  { month: "February", id: "/event/kalenderYouth/AlphaOgDypere", date: 22, image: 'grupperImages/AlphaOgDypere.png'},
  { month: "February", id: "/event/kalenderYouth/Fellesmote", date: 23, image: 'arrangementImages/fellesMoteImage.png'},
  { month: "February", id: "/event/kalenderYouth/ConnectOgTjenestekurs", date: 26, image: 'grupperImages/connectOgTjenestekurs.png'},
  /////////////////
  // Mars Seksjon
  { month: "March", id: "/event/kalenderYouth/MultiSondagsArrangement", date: 1, image: 'grupperImages/GudstjenesteAlphaOgDypere.png'},
  { month: "March", id: "/event/kalenderYouth/Bibelstudie", date: 4, image: 'grupperImages/bibelStudieBilde.png'},
  { month: "March", id: "/event/kalenderYouth/Tjenestekurs", date: 5, image: 'grupperImages/tjenesteKursBilde.png'},
  { month: "March", id: "/event/kalenderYouth/Bonnemote", date: 6, image: 'grupperImages/bonnBilde.png'},
  { month: "March", id: "/event/kalenderYouth/MultiSondagsArrangement", date: 8, image: 'grupperImages/GudstjenesteAlphaOgDypere.png'},
  { month: "March", id: "/event/kalenderYouth/ConnectOgTjenestekurs", date: 12, image: 'grupperImages/connectOgTjenestekurs.png'},
  { month: "March", id: "/event/kalenderYouth/Evangelisering", date: 14, image: 'grupperImages/evangeliseringBilde.png'},
  { month: "March", id: "/event/kalenderYouth/MultiSondagsArrangement", date: 15, image: 'grupperImages/GudstjenesteAlphaOgDypere.png'},
  { month: "March", id: "/event/kalenderYouth/Bibelstudie", date: 18, image: 'grupperImages/bibelStudieBilde.png'},
  { month: "March", id: "/event/kalenderYouth/Tjenestekurs", date: 19, image: 'grupperImages/tjenesteKursBilde.png'},
  { month: "March", id: "/event/kalenderYouth/ConnectOgTjenestekurs", date: 26, image: 'grupperImages/connectOgTjenestekurs.png'},
  { month: "March", id: "/event/kalenderYouth/Bonnemote", date: 20, image: 'grupperImages/bonnBilde.png'},
  { month: "March", id: "/event/kalenderYouth/MultiSondagsArrangement", date: 22, image: 'grupperImages/GudstjenesteAlphaOgDypere.png'},
  { month: "March", id: "/event/kalenderYouth/Evangelisering", date: 28, image: 'grupperImages/evangeliseringBilde.png'},
  { month: "March", id: "/event/kalenderYouth/MultiSondagsArrangement", date: 29, image: 'grupperImages/GudstjenesteAlphaOgDypere.png'},
  /////////////////
  // April Seksjon
  { month: "April", id: "/event/kalenderYouth/Bibelstudie", date: 1, image: 'grupperImages/bibelStudieBilde.png'},
  { month: "April", id: "/event/kalenderYouth/Bonnemote", date: 3, image: 'grupperImages/bonnBilde.png'},
  { month: "April", id: "/event/kalenderYouth/MultiSondagsArrangement", date: 5, image: 'grupperImages/GudstjenesteAlphaOgDypere.png'},
  { month: "April", id: "/event/kalenderYouth/Connect", date: 9, image: 'grupperImages/connectBilde.png'},
  { month: "April", id: "/event/arrangement/Paaskekonf", date: 11, image: 'arrangementImages/paaskekonf.png'},
  { month: "April", id: "/event/arrangement/Paaskekonf", date: 12, image: 'arrangementImages/paaskekonf.png'},
  { month: "April", id: "/event/kalenderYouth/Connect", date: 23, image: 'grupperImages/connectBilde.png'},
  { month: "April", id: "/event/kalenderYouth/Evangelisering", date: 25, image: 'grupperImages/evangeliseringBilde.png'},
  { month: "April", id: "/event/kalenderYouth/Gudstjeneste", date: 26, image: 'arrangementImages/gudstjenesteBilde.png'},
  { month: "April", id: "/event/kalenderYouth/Bibelstudie", date: 29, image: 'grupperImages/bibelStudieBilde.png'},
  /////////////////
  // Mai Seksjon
  { month: "May", id: "/event/kalenderYouth/Bonnemote", date: 1, image: 'grupperImages/bonnBilde.png'},
  { month: "May", id: "/event/kalenderYouth/MultiSondagsArrangement", date: 3, image: 'grupperImages/GudstjenesteAlphaOgDypere.png'},
  { month: "May", id: "/event/kalenderYouth/ConnectOgTjenestekurs", date: 7, image: 'grupperImages/connectOgTjenestekurs.png'},
  { month: "May", id: "/event/kalenderYouth/Evangelisering", date: 9, image: 'grupperImages/evangeliseringBilde.png'},
  { month: "May", id: "/event/kalenderYouth/MultiSondagsArrangement", date: 10, image: 'grupperImages/GudstjenesteAlphaOgDypere.png'},
  { month: "May", id: "/event/kalenderYouth/Bibelstudie", date: 13, image: 'grupperImages/bibelStudieBilde.png'},
  { month: "May", id: "/event/kalenderYouth/Tjenestekurs", date: 14, image: 'grupperImages/tjenesteKursBilde.png'},
  { month: "May", id: "/event/kalenderYouth/Bonnemote", date: 15, image: 'grupperImages/bonnBilde.png'},
  { month: "May", id: "/event/kalenderYouth/FellesMoteMultiArrangement", date: 18, image: 'grupperImages/FellesMoteMAlpha&Dypere.png'},
  { month: "May", id: "/event/kalenderYouth/ConnectOgTjenestekurs", date: 21, image: 'grupperImages/connectOgTjenestekurs.png'},
  { month: "May", id: "/event/kalenderYouth/Evangelisering", date: 23, image: 'grupperImages/evangeliseringBilde.png'},
  { month: "May", id: "/event/kalenderYouth/MultiSondagsArrangement", date: 24, image: 'grupperImages/GudstjenesteAlphaOgDypere.png'},
  { month: "May", id: "/event/kalenderYouth/Bibelstudie", date: 27, image: 'grupperImages/bibelStudieBilde.png'},
  { month: "May", id: "/event/kalenderYouth/Tjenestekurs", date: 28, image: 'grupperImages/tjenesteKursBilde.png'},
  { month: "May", id: "/event/kalenderYouth/Bonnemote", date: 29, image: 'grupperImages/bonnBilde.png'},
  { month: "May", id: "/event/kalenderYouth/FellesMoteMultiArrangement", date: 31, image: 'grupperImages/FellesMoteMAlpha&Dypere.png'},
  /////////////////
  // Juni Seksjon
  { month: "June", id: "/event/kalenderYouth/Connect", date: 4, image: 'grupperImages/connectBilde.png'},
  { month: "June", id: "/event/kalenderYouth/Evangelisering", date: 6, image: 'grupperImages/evangeliseringBilde.png'},
  { month: "June", id: "/event/kalenderYouth/MultiSondagsArrangement", date: 7, image: 'grupperImages/GudstjenesteAlphaOgDypere.png'},
  { month: "June", id: "/event/kalenderYouth/Bibelstudie", date: 10, image: 'grupperImages/bibelStudieBilde.png'},
  { month: "June", id: "/event/kalenderYouth/Bonnemote", date: 12, image: 'grupperImages/bonnBilde.png'},
  { month: "June", id: "/event/kalenderYouth/MultiSondagsArrangement", date: 14, image: 'grupperImages/GudstjenesteAlphaOgDypere.png'},
  { month: "June", id: "/event/kalenderYouth/Connect", date: 18, image: 'grupperImages/connectBilde.png'},
  { month: "June", id: "/event/kalenderYouth/Evangelisering", date: 20, image: 'grupperImages/evangeliseringBilde.png'},
  { month: "June", id: "/event/kalenderYouth/Gudstjeneste", date: 21, image: 'arrangementImages/gudstjenesteBilde.png'},
  { month: "June", id: "/event/kalenderYouth/Bibelstudie", date: 24, image: 'grupperImages/bibelStudieBilde.png'},
  { month: "June", id: "/event/kalenderYouth/Bonnemote", date: 26, image: 'grupperImages/bonnBilde.png'},
  { month: "June", id: "/event/kalenderYouth/Gudstjeneste", date: 28, image: 'arrangementImages/gudstjenesteBilde.png'},
























  






























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