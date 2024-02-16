function Lessons() {
  const paragraphStyle = {
    textAlign: "justify",
  };
  return (
      <div className="container mt-5">
        <div className="container ms-5">
          <div className="row features g-5">
            <div className="col-md-6">
              <h3 className="pt-1 header-div header-3">
                <b>Why are your Yoga?</b>
              </h3>
              <p className="paragraph-div" style={paragraphStyle}>
                <b>
                  Yoga, for me, is about finding inner balance, flexibility, and
                  peace. It helps reduce daily stress, enhances mental focus,
                  and contributes to my overall well-being. Yoga strengthens the
                  connection between my body and mind, improving my quality of
                  life. Each session offers an opportunity for relaxation and
                  personal growth. Its a source of physical strength and a
                  gateway to mental awakening and tranquility.
                </b>
              </p>
              <br />
              <h3 className="header-div-2 header-3">
                <b>When comes Yoga Your Time.</b>
              </h3>
              <p className="paragraph-div-2">
                <b>Saturday - Sunday: 8:00 am - 10.00 am</b>
                <br />
                <br />
                <b>Monday - Tuesday: 10:00 am - 12:00 pm </b>
                <br />
                <br />
                <b>Wednesday - Friday: 3:00 pm - 6:00 pm</b>
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="img/yoga.jpg"
                alt="Yoga Photo"
                className="img-fluid pt-5 pe-5 img-yoga img-div"
              />
            </div>
          </div>
        </div>
      </div>
  );
}

export default Lessons;
