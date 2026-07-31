import { Link, useParams } from "react-router-dom";
import packages from "../data/packages";

function PackageDetails() {
  const { id } = useParams();

  const packageData = packages.find(
    (item) => item.id === Number(id)
  );

  if (!packageData) {
    return (
      <section className="py-5">
        <div className="container text-center">
          <div className="display-3 mb-3">🌍</div>
          <h2>Package Not Found</h2>
          <p className="text-muted">
            The travel package you're looking for does not exist.
          </p>

          <Link
            to="/packages"
            className="btn btn-primary rounded-pill px-4"
          >
            Back to Packages
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <span>TRAVEL PACKAGE</span>
          <h1>{packageData.title}</h1>
          <p>📍 {packageData.destination}</p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <img
                src={packageData.image}
                alt={packageData.destination}
                className="img-fluid rounded-4 shadow-sm w-100"
                style={{
                  height: "450px",
                  objectFit: "cover",
                }}
              />
            </div>

            <div className="col-lg-5">
              <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2 mb-3">
                {packageData.category}
              </span>

              <h2 className="fw-bold mb-3">
                {packageData.title}
              </h2>

              <div className="d-flex flex-column gap-2 mb-4">
                <div>
                  <strong>📍 Destination:</strong>{" "}
                  {packageData.destination}
                </div>

                <div>
                  <strong>🕒 Duration:</strong>{" "}
                  {packageData.duration}
                </div>
              </div>

              <p className="text-muted lh-lg">
                {packageData.description}
              </p>

              <div className="border-top pt-4 mt-4">
                <small className="text-muted">
                  Starting from
                </small>

                <div className="display-6 fw-bold text-primary">
                  ${packageData.price}
                </div>
                <small className="text-muted">
                  per traveler
                </small>
              </div>

              <Link
                to={`/booking?packageId=${packageData.id}`}
                className="btn btn-primary btn-lg rounded-pill px-5 mt-4"
              >
                Book This Trip →
              </Link>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm p-4">
                <h3 className="fw-bold mb-4">
                  What's Included?
                </h3>

                <div className="row g-3">
                  {packageData.included.map((item, index) => (
                    <div className="col-md-6" key={index}>
                      <div className="d-flex gap-2 align-items-start">
                        <span className="text-success fw-bold">
                          ✓
                        </span>
                        <span>{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="card border-0 shadow-sm p-4 h-100">
                <h4 className="fw-bold mb-3">
                  Ready to Travel?
                </h4>

                <p className="text-muted">
                  Reserve your place today and start planning your
                  unforgettable journey.
                </p>

                <Link
                  to={`/booking?packageId=${packageData.id}`}
                  className="btn btn-primary rounded-pill w-100"
                >
                  Start Booking
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PackageDetails;