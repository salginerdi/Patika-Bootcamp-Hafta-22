import FooterInfo from "./FooterInfo";
import FooterList from "./FooterList";

function FooterMain() {
  return (
      <div className="footer-container">
        <footer className="container py-5">
          <FooterInfo />
          <FooterList />
        </footer>
      </div>
  );
}

export default FooterMain;
