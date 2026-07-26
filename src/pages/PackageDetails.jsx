import { Link, useParams } from "react-router-dom";
import { packages } from "../data/packages";

const PackageDetails = () => {
  const { id } = useParams();

  const packageData = packages.find(
    (item) => item.id === Number(id)
  );

  if (!packageData) {
    return (
      <div className="not-found">
        <h1>Package Not Found</h1>
        <Link to="/packages" className="primary-button">
          Back to Packages
        </Link>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="container details-page">
        <Link to="/packages" className="back-link">
          ← Back to Packages
        </Link>

        <div className="details-layout">
          <div className="details-image">
            <img src={packageData.image} alt={packageData.title} />
          </div>

          <div className="details-content">
            <p className="package-location">📍 {packageData.location}</p>

            <h1>{packageData.title}</h1>

            <div className="details-rating">
              ★ {packageData.rating} Excellent Rating
            </div>

            <p className="details-description">
              {packageData.description}
            </p>

            <div className="detail-info-grid">
              <div>
                <span>Duration</span>
                <strong>🕒 {packageData.duration}</strong>
              </div>

              <div>
                <span>Price</span>
                <strong>
                  ${packageData.price.toLocaleString("en-US")}
                </strong>
              </div>
            </div>

            <h3>Package Includes</h3>

            <div className="features-list">
              {packageData.features.map((feature, index) => (
                <div key={index}>
                  <span>✓</span>
                  {feature}
                </div>
              ))}
            </div>

            <Link
              to={`/booking?package=${packageData.id}`}
              className="primary-button full-button"
            >
              Book This Package →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;