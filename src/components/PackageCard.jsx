import { Link } from "react-router-dom";

function PackageCard({ packageData }) {
  return (
    <div className="package-card h-100">
      {/* Package Image */}
      <div className="package-image-wrapper">
        <img
          src={packageData.image}
          alt={packageData.destination}
          className="package-image"
        />

        <span className="package-category">
          {packageData.category}
        </span>
      </div>

      {/* Package Content */}
      <div className="package-content d-flex flex-column">
        <div>
          <h3>{packageData.title}</h3>

          <p className="package-destination">
            📍 {packageData.destination}
          </p>

          <div className="package-info">
            <span>🕒 {packageData.duration}</span>
          </div>

          <p className="package-description">
            {packageData.description}
          </p>
        </div>

        {/* Price + Button */}
        <div className="package-bottom mt-auto">
          <div className="package-price">
            <small>Starting from</small>
            <strong>${packageData.price}</strong>
          </div>

          <Link
            to={`/packages/${packageData.id}`}
            className="view-details-btn"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PackageCard;