function Hero() {
  return (  
    <div className="container hero-container">
    <div className="hero-section">
      <div className="btn-div">
        <button type="button" className="btn btn-primary btn-sm custom-btn">
          POWERFULL
        </button>
      </div>
      <div className="main">
        <h1>
          Group <br />
          Practice <br />
          With Trainer
        </h1>
        <p>
          Sports centers offer a diverse range of activities, catering to
          fitness enthusiasts of all levels. From state-of-the-art gym
          equipment to group classes and recreational sports, these
          facilities promote a healthy and active lifestyle. Members can
          engage in cardio workouts, strength training, or enjoy team sports
          for a holistic fitness experience.
        </p>
      </div>
      <div className="btns-div">
        <button type="button" className="btn btn-primary btn-lg custom-btn">
          Sign Up
        </button>
        <button type="button" className="btn btn-secondary btn-lg custom-btn2">
          Details
        </button>
      </div>
    </div>
  </div>
  );
}

export default Hero;
