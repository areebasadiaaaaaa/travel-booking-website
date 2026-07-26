import { Link } from "react-router-dom";
import PackageCard from "../components/PackageCard";
import { packages } from "../data/packages";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay">
          <div className="container hero-content">
            <span className="hero-tag">✈ Explore The World With Us</span>

            <h1>
              Your Journey Begins
              <br />
              <span>Here.</span>
            </h1>

            <p>
              Discover breathtaking destinations, explore unforgettable
              experiences, and book your dream vacation with TravelEase.
            </p>

            <div className="hero-buttons">
              <Link to="/packages" className="primary-button">
                Explore Packages →
              </Link>

              <Link to="/booking" className="secondary-button">
                Plan Your Trip
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          <div>
            <strong>50+</strong>
            <span>Destinations</span>
          </div>

          <div>
            <strong>10K+</strong>
            <span>Happy Travelers</span>
          </div>

          <div>
            <strong>4.9/5</strong>
            <span>Customer Rating</span>
          </div>

          <div>
            <strong>24/7</strong>
            <span>Travel Support</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span>TOP DESTINATIONS</span>
          <h2>Popular Travel Packages</h2>
          <p>
            Explore our most loved destinations and start planning your next
            unforgettable adventure.
          </p>
        </div>

        <div className="container packages-grid">
          {packages.slice(0, 3).map((item) => (
            <PackageCard key={item.id} packageData={item} />
          ))}
        </div>

        <div className="center-button">
          <Link to="/packages" className="outline-button">
            View All Packages →
          </Link>
        </div>
      </section>

      <section className="why-section">
        <div className="container">
          <div className="section-heading">
            <span>WHY TRAVEL WITH US</span>
            <h2>Travel Made Simple</h2>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Handpicked Destinations</h3>
              <p>
                We select amazing destinations and experiences to make your
                journey truly memorable.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h3>Best Value</h3>
              <p>
                Enjoy carefully designed packages with excellent value for
                your travel budget.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Trusted & Secure</h3>
              <p>
                Travel with confidence knowing your booking experience is
                simple, reliable, and secure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;