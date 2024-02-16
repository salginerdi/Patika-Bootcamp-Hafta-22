function ContactsMap() {
  const mapStyle = {
    border: "0",
  };
  return (
      <div className="col-md-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.477398002256!2d31.23349711477818!3d40.86139633640042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409d0afe1c9b900d%3A0x96f0d958d15e6f6f!2zQmFow6dlbGlldmxlciwgNTAuIFNrLiwgODE2MzAgRMO8emNlIE1lcmtlei9Ew7x6Y2U!5e0!3m2!1str!2str!4v1661796794681!5m2!1str!2str"
          width="600"
          height="315"
          style={mapStyle}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
  );
}

export default ContactsMap;
