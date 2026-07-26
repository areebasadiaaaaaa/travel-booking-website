const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-logo">
            ✈ Travel<span>Ease</span>
          </div>

          <p className="footer-description">
            Your trusted travel partner for unforgettable journeys around the
            world. Discover beautiful destinations and book your perfect trip.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <p>Popular Destinations</p>
          <p>Travel Packages</p>
          <p>Special Offers</p>
        </div>

        <div>
          <h3>Support</h3>
          <p>Contact Us</p>
          <p>Help Center</p>
          <p>Travel Guide</p>
        </div>

        <div>
          <h3>Contact</h3>
          <p>✉ hello@travelease.com</p>
          <p>☎ +1 234 567 890</p>
          <p>📍 Worldwide Travel</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 TravelEase. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;