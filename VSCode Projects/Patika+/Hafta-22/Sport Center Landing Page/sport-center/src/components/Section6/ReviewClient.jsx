function ReviewClient() {
  return (
      <div className="container d-flex justify-content-around mt-5 review">
        <div className="client-review-class first-review">
          <div className="d-flex">
            <div className="d-flex client flex-column">
              <div className="d-flex">
                <img src="img/client1.jpg" alt="" />
                <div className="ms-2">  
                  <h6>
                    <b>Diet Expert</b>
                  </h6>
                  <p>CFO</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container d-flex justify-content-around custom-div-text">
            <div className="text-div">
              <p>
                Fantastic sports center with state-of-the-art facilities! The
                staff is friendly and attentive. Great variety of classes and
                equipment. Clean and well-maintained environment. Highly
                recommend for fitness enthusiasts!
              </p>
            </div>
          </div>
        </div>

        <div className="client-review-class">
          <div className="d-flex client flex-column">
            <div className="d-flex">
              <img src="img/client2.jpg" alt="" />
              <div className="ms-2">
                <h6>
                  <b>Cardio Trainer</b>
                </h6>
                <p>CEO</p>
              </div>
            </div>
          </div>

          <div className="container d-flex justify-content-around custom-div-text client-div-text-2">
            <div className="text-div">
              <p>
                Exceptional experience at this sports center! The trainers are
                knowledgeable, creating personalized workouts. The atmosphere is
                motivating, and the facilities are top-notch. A perfect place to
                achieve your fitness goals!
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ReviewClient;
