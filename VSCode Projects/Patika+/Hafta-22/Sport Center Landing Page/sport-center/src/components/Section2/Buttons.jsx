function Buttons() {
  return (
      <div className="container">
        <div className="buttons-all">
          <div className="d-flex justify-content-around mt-5 mb-5 me-5 buttons buttons-div">
            <button
              className="btn btn-warning btn-lg custom-btn btn-1 yoga active"
              type="button"
            >
              Yoga
            </button>
            <button
              className="btn btn-primary btn-lg custom-btn group btn-2"
              type="button"
            >
              Group
            </button>
            <button
              className="btn btn-primary btn-lg custom-btn solo btn-3"
              type="button"
            >
              Solo
            </button>
            <button
              className="btn btn-primary btn-lg custom-btn stretching btn-4"
              type="button"
            >
              Stretching
            </button>
          </div>
        </div>
      </div>
  );
}

export default Buttons;
