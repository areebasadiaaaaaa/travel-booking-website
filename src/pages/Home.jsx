import { Link } from "react-router-dom";
import packages from "../data/packages";
import PackageCard from "../components/PackageCard";

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <span className="hero-badge">
                ✈ Explore The World With Us
              </span>

              <h1>
                Your Journey Begins
                <span> Here.</span>
              </h1>

              <p>
                Discover breathtaking destinations, explore unforgettable
                experiences, and book your dream vacation with TravelEase.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Link to="/packages" className="btn btn-primary btn-lg rounded-pill px-4">
                  Explore Packages →
                </Link>

                <Link
                  to="/booking"
                  className="btn btn-light btn-lg rounded-pill px-4"
                >
                  Plan Your Trip
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-6 col-lg-3">
              <div className="stat-item">
                <strong>50+</strong>
                <span>Destinations</span>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="stat-item">
                <strong>10K+</strong>
                <span>Happy Travelers</span>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="stat-item">
                <strong>4.9/5</strong>
                <span>Customer Rating</span>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="stat-item">
                <strong>24/7</strong>
                <span>Travel Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="section-heading text-center mb-5">
            <span>TOP DESTINATIONS</span>
            <h2>Popular Travel Packages</h2>
            <p>
              Explore our most loved destinations and start planning your
              next unforgettable adventure.
            </p>
          </div>

          <div className="row g-4">
            {packages.slice(0, 3).map((item) => (
              <div className="col-md-6 col-lg-4" key={item.id}>
                <PackageCard packageData={item} />
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link
              to="/packages"
              className="btn btn-outline-primary rounded-pill px-4"
            >
              View All Packages →
            </Link>
          </div>
        </div>
      </section>

      <section className="why-section py-5">
        <div className="container">
          <div className="section-heading text-center mb-5">
            <span>WHY TRAVEL WITH US</span>
            <h2>Travel Made Simple</h2>
            <p>
              Everything you need for a smooth and memorable travel
              experience.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card h-100">
                <div className="feature-icon">🌍</div>
                <h3>Handpicked Destinations</h3>
                <p>
                  We carefully select amazing destinations and experiences
                  for unforgettable journeys.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card h-100">
                <div className="feature-icon">💳</div>
                <h3>Best Value</h3>
                <p>
                  Enjoy thoughtfully designed travel packages with excellent
                  value for your budget.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card h-100">
                <div className="feature-icon">🛡️</div>
                <h3>Trusted & Secure</h3>
                <p>
                  Our simple booking experience makes planning your trip
                  reliable and stress-free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;