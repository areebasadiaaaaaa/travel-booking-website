import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `nav-link fw-medium ${isActive ? "active text-primary" : ""}`;

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container py-2">
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
          <span className="brand-icon">✈</span>
          <span className="fw-bold fs-4">TravelEase</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <div className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/packages" className={navLinkClass}>
              Packages
            </NavLink>

            <NavLink to="/my-bookings" className={navLinkClass}>
              My Bookings
            </NavLink>

            <Link
              to="/booking"
              className="btn btn-primary rounded-pill px-4 ms-lg-3 mt-3 mt-lg-0"
            >
              Book a Trip
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;