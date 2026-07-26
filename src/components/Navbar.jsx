import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          <span className="logo-icon">✈</span>
          Travel<span>Ease</span>
        </Link>

        <nav className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>

          <NavLink to="/packages" className="nav-link">
            Packages
          </NavLink>

          <NavLink to="/my-bookings" className="nav-link">
            My Bookings
          </NavLink>

          <NavLink to="/booking" className="nav-button">
            Book Your Trip
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;