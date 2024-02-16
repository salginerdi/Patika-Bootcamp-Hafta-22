import ContactsInfo from "./ContactsInfo";
import ContactsInput from "./ContactsInput";
import ContactsMap from "./ContactsMap";

function ContactsMain() {
  return (
      <section className="pb-5 bg-white pt-3" id="contact">
        <ContactsInfo />
        <div className="container mt-5">
          <div className="container ms-5">
            <div className="row features g-5">
              <ContactsInput />
              <ContactsMap />
            </div>
          </div>
        </div>
      </section>
  );
}

export default ContactsMain;
