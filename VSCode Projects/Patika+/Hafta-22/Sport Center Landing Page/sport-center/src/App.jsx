import "./App.css";
import Header from "./components/Header/Header";
import Section1 from "./components/Section1/Section1";
import MainSection from "./components/Section2/MainSection";
import BmiSection from "./components/Section3/BmiSection";
import Trainers from "./components/Section4/Trainers";
import PurchaseMain from "./components/Section5/PurchaseMain";
import ReviewMain from "./components/Section6/ReviewMain";
import ContactsMain from "./components/Section7/ContactsMain";
import FooterMain from "./components/Footer/FooterMain";
import "./style/style.css";

function App() {
  return (
    <>
      <Header />
      <Section1 />
      <MainSection />
      <BmiSection />
      <Trainers />
      <PurchaseMain />
      <ReviewMain />
      <ContactsMain />
      <FooterMain />
    </>
  );
}

export default App;
