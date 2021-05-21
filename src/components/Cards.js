export const Cards = (prop) => {
  return (
    <div className="card col-sm-6" key={prop.rocket.id}>
      <div className="card">
        <img
          src={prop.rocket.flickr_images[1]}
          className="card-img-top"
          alt="rockets images"
        />
        <div className="card-body">
          <h5 className="card-title"> {prop.rocket.name} </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a
            href="#"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={`#popup${prop.rocket.id}`}
          >
            View More
          </a>
        </div>
      </div>
    </div>
  );
};
