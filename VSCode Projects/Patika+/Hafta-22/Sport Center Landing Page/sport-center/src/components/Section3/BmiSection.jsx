function BmiSection() {
  const PStyle = {
    textAlign: "justify",
  };
  return (
      <section className="bg-white mt-5">
        <div className="container mt-5 pb-5">
          <div className="row g-5 features d-flex">
            <div className="col-md-6 pt-5 pe-5 div-1">
              <h2>
                <b>BMI Calculator</b>
              </h2>
              <p style={PStyle} className="pt-2">
                <b>
                  Body Mass Index (BMI) is a numerical measurement that assesses
                  an individuals body weight in relation to their height. It is
                  a widely used screening tool to categorize people into
                  different weight status categories, helping to identify
                  potential health risks associated with weight.
                </b>
              </p>
              <br />
              <p>
                <b>
                  BMI serves as a valuable initial indicator of potential health
                  risks associated with weight, guiding healthcare professionals
                  in further assessments and interventions.
                </b>
              </p>
              <br />
              <div className="d-flex">
                <p>
                  <input
                    className="heightInput"
                    placeholder=" Your Height"
                    type="text"
                  />
                  cm
                </p>
                <p>
                  <input
                    className="weightInput"
                    placeholder=" Your weight"
                    type="text"
                  />
                  kg
                </p>
              </div>
            </div>
            <div className="col-md-6 pt-5">
              <h3 className="text-center">Your BMI</h3>
              <div className="container d-flex align-items-center">
                <div className="d-flex flex-column flex-start bmi-triangle">
                  <img
                    src="img/bmi-index.jpg"
                    alt="BMI Calculate Photo"
                    className="img-fluid ps-5 bmi-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default BmiSection;
