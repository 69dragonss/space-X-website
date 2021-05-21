export const Model = ({ rocket }) => {
  return (
    <div
      className="modal fade"
      id={`popup${rocket.id}`}
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog model-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {rocket.name}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div
              id={`carousal${rocket.id}`}
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={rocket.flickr_images[0]}
                    className="d-block w-100"
                    alt="rocket images"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={rocket.flickr_images[1]}
                    className="d-block w-100"
                    alt="rocket images"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={`#carousal${rocket.id}`}
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target={`#carousal${rocket.id}`}
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="row row-info">
              <div classname="col-sm-2">
                <h4>height</h4>
                <p> {rocket.height.feet} feets </p>
              </div>

              <div classname="col-sm-2 col-xxl-2">
                <h4>Diameter</h4>
                <p> {rocket.diameter.feet} feets </p>
              </div>
              <div classname="col-sm-2 col-xxl-2">
                <h4>Mass</h4>
                <p> {rocket.mass.kg / 1000} Tonne</p>
              </div>
              <div classname="col-sm-2 col-xxl-2">
                <h4>First Flight</h4>
                <p> {rocket.first_flight} </p>
              </div>
              <div classname="col-sm-2 col-xxl-2">
                <h4>Active</h4>
                <p> {rocket.active ? "Yes" : "No"} </p>
              </div>
              <div classname="col-sm-2 col-xxl-2">
                <h4>Cost per Launch</h4>
                <p> {rocket.cost_per_launch / 1000000} Millions </p>
              </div>
            </div>
            <p> {rocket.description} </p>
            <a href={rocket.wikipedia} target="__blank">
              Details Here!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
