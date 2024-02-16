function TrainersName() {
  const CardWidth = {
    width: "18rem",
  };
  return (
      <div className="container d-flex justify-content-around mt-5 mb-5 best-trainers">
        <div className="card border border-warning trainer" style={CardWidth}>
          <div className="overlay text-center">
            <span>Floor JANSEN</span>
            <br />
            Yoga Trainer
          </div>
          <img
            src="img/trainer1.jpg"
            className="card-img-top"
            alt="trainer-one"
          />
        </div>
        <div className="card border border-warning trainer" style={CardWidth}>
          <div className="overlay text-center">
            <span>James HETFIELD</span>
            <br />
            Fitness Trainer
          </div>
          <img
            src="img/trainer2.jpg"
            className="card-img-top"
            alt="trainer-one"
          />
        </div>
        <div className="card border border-warning trainer" style={CardWidth}>
          <div className="overlay text-center">
            <span>Jane DOE</span>
            <br />
            Cardio Trainer
          </div>
          <img
            src="img/trainer3.jpg"
            className="card-img-top"
            alt="trainer-one"
          />
        </div>
      </div>
  );
}

export default TrainersName;
