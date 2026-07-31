import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-5">
            <Link
              to="/"
              className="text-white text-decoration-none d-inline-flex align-items-center gap-2 mb-3"
            >
              <span className="brand-icon footer-brand-icon">✈</span>
              <span className="fw-bold fs-4">TravelEase</span>
            </Link>

            <p className="footer-text">
              Your trusted travel companion for discovering beautiful
              destinations, unforgettable experiences and carefully designed
              travel packages.
            </p>
          </div>

          <div className="col-6 col-lg-2">
            <h6 className="text-white fw-bold mb-3">Explore</h6>

            <ul className="list-unstyled footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/packages">Packages</Link>
              </li>
              <li>
                <Link to="/my-bookings">My Bookings</Link>
              </li>
              <li>
                <Link to="/booking">Book a Trip</Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-lg-2">
            <h6 className="text-white fw-bold mb-3">Support</h6>

            <ul className="list-unstyled footer-links">
              <li>Travel Support</li>
              <li>Booking Help</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h6 className="text-white fw-bold mb-3">Get in Touch</h6>

            <p className="footer-text mb-2">hello@travelease.com</p>
            <p className="footer-text mb-2">+92 300 1234567</p>
            <p className="footer-text">Gujranwala, Pakistan</p>
          </div>
        </div>

        <hr className="footer-divider my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between gap-2">
          <p className="footer-text mb-0">
            © 2026 TravelEase. All rights reserved.
          </p>

          <p className="footer-text mb-0">
            Built with React & Bootstrap
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;