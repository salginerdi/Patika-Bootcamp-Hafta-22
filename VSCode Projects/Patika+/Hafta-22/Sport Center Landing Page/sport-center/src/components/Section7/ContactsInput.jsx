function ContactsInput() {
  const textAreaStyle = {
    height: "100px",
  };
  return (
      <div className="col-md-6">
        <div className="container d-flex">
          <div className="me-2">
            <h6>
              <b>Mobile Number</b>
            </h6>
            <p>+135 773 321 4442</p>
          </div>
          <div>
            <h6>
              <b>Email Address</b>
            </h6>
            <p>demo@demo.com</p>
          </div>
        </div>
        <div>
          <h3 className="appointment">
            <b>Make An Appointment</b>
          </h3>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Your Email"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={textAreaStyle}
            ></textarea>
            <label htmlFor="floatingTextarea2">Your Message</label>
          </div>
        </div>
      </div>
  );
}

export default ContactsInput;
