import { Link } from "react-router-dom";

const PackageCard = ({ packageData }) => {
  return (
    <div className="package-card">
      <div className="package-image-wrapper">
        <img
          src={packageData.image}
          alt={packageData.title}
          className="package-image"
        />

        <div className="rating-badge">
          ★ {packageData.rating}
        </div>
      </div>

      <div className="package-content">
        <p className="package-location">📍 {packageData.location}</p>

        <h3>{packageData.title}</h3>

        <p className="package-duration">
          🕒 {packageData.duration}
        </p>

        <div className="package-bottom">
          <div>
            <span className="price-label">From</span>
            <strong>${packageData.price.toLocaleString("en-US")}</strong>
            <span className="per-person"> / person</span>
          </div>

          <Link
            to={`/packages/${packageData.id}`}
            className="details-button"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;