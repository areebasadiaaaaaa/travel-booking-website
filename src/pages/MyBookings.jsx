import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { packages } from "../data/packages";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [editingBooking, setEditingBooking] = useState(null);

  useEffect(() => {
    const savedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    setBookings(savedBookings);
  }, []);

  const getPackageDetails = (destination) => {
    return packages.find(
      (item) =>
        item.location.toLowerCase().includes(
          destination.toLowerCase()
        ) ||
        destination
          .toLowerCase()
          .includes(item.location.split(",")[0].toLowerCase())
    );
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (!confirmDelete) return;

    const updatedBookings = bookings.filter(
      (booking) => booking.id !== id
    );

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );

    setBookings(updatedBookings);
  };

  const handleEdit = (booking) => {
    setEditingBooking({ ...booking });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;

    setEditingBooking((previousBooking) => ({
      ...previousBooking,
      [name]: value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedBookings = bookings.map((booking) =>
      booking.id === editingBooking.id
        ? editingBooking
        : booking
    );

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );

    setBookings(updatedBookings);
    setEditingBooking(null);

    alert("Your booking has been updated successfully!");
  };

  return (
    <div className="page">

      {/* PAGE HEADER */}

      <section className="page-header">
        <div>
          <span>YOUR TRAVEL JOURNEY</span>

          <h1>My Bookings</h1>

          <p>
            Manage your trips, update your travel details,
            and keep track of your upcoming adventures.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">

          {/* STATS */}

          <div className="booking-dashboard">

            <div className="dashboard-card">
              <div className="dashboard-icon-wrapper">
                📅
              </div>

              <div>
                <strong>{bookings.length}</strong>
                <p>Total Bookings</p>
              </div>
            </div>

            <div className="dashboard-card">
              <div className="dashboard-icon-wrapper">
                ✈️
              </div>

              <div>
                <strong>{bookings.length}</strong>
                <p>Upcoming Trips</p>
              </div>
            </div>

            <div className="dashboard-card">
              <div className="dashboard-icon-wrapper">
                🌍
              </div>

              <div>
                <strong>
                  {
                    new Set(
                      bookings.map(
                        (booking) => booking.destination
                      )
                    ).size
                  }
                </strong>

                <p>Destinations</p>
              </div>
            </div>

          </div>

          {/* EDIT BOOKING */}

          {editingBooking && (
            <div className="edit-booking-overlay">

              <div className="edit-booking-modal">

                <div className="edit-modal-header">

                  <div>
                    <span>MANAGE YOUR TRIP</span>

                    <h2>Edit Booking</h2>

                    <p>
                      Update your travel information below.
                    </p>
                  </div>

                  <button
                    className="modal-close-button"
                    onClick={() =>
                      setEditingBooking(null)
                    }
                  >
                    ×
                  </button>

                </div>

                <form onSubmit={handleUpdate}>

                  <div className="form-row">

                    <div className="form-group">
                      <label>Full Name</label>

                      <input
                        type="text"
                        name="name"
                        value={editingBooking.name}
                        onChange={handleEditChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Email Address</label>

                      <input
                        type="email"
                        name="email"
                        value={editingBooking.email}
                        onChange={handleEditChange}
                        required
                      />
                    </div>

                  </div>

                  <div className="form-row">

                    <div className="form-group">
                      <label>Destination</label>

                      <select
                        name="destination"
                        value={editingBooking.destination}
                        onChange={handleEditChange}
                        required
                      >
                        <option value="Dubai">
                          Dubai
                        </option>

                        <option value="Maldives">
                          Maldives
                        </option>

                        <option value="Turkey">
                          Turkey
                        </option>

                        <option value="Switzerland">
                          Switzerland
                        </option>

                        <option value="Bali">
                          Bali
                        </option>

                        <option value="Paris">
                          Paris
                        </option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Travelers</label>

                      <input
                        type="number"
                        name="travelers"
                        min="1"
                        value={editingBooking.travelers}
                        onChange={handleEditChange}
                        required
                      />
                    </div>

                  </div>

                  <div className="form-row">

                    <div className="form-group">
                      <label>Travel Date</label>

                      <input
                        type="date"
                        name="travelDate"
                        value={editingBooking.travelDate}
                        onChange={handleEditChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Phone Number</label>

                      <input
                        type="tel"
                        name="phone"
                        value={editingBooking.phone}
                        onChange={handleEditChange}
                        required
                      />
                    </div>

                  </div>

                  <div className="form-group">
                    <label>Additional Message</label>

                    <textarea
                      name="message"
                      rows="4"
                      value={
                        editingBooking.message || ""
                      }
                      onChange={handleEditChange}
                    />
                  </div>

                  <div className="modal-actions">

                    <button
                      type="button"
                      className="modal-cancel-button"
                      onClick={() =>
                        setEditingBooking(null)
                      }
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="modal-save-button"
                    >
                      Save Changes
                    </button>

                  </div>

                </form>

              </div>

            </div>
          )}

          {/* EMPTY STATE */}

          {bookings.length === 0 ? (

            <div className="professional-empty-state">

              <div className="empty-state-icon">
                ✈️
              </div>

              <h2>No Trips Booked Yet</h2>

              <p>
                Your travel journey is waiting for you.
                Explore our destinations and book your
                next unforgettable adventure.
              </p>

              <Link
                to="/packages"
                className="primary-button"
              >
                Explore Travel Packages →
              </Link>

            </div>

          ) : (

            /* BOOKINGS */

            <div className="my-bookings-section">

              <div className="bookings-section-heading">

                <div>
                  <span>YOUR RESERVATIONS</span>

                  <h2>Upcoming Trips</h2>

                  <p>
                    Here are your confirmed travel
                    reservations.
                  </p>
                </div>

                <Link
                  to="/packages"
                  className="add-trip-button"
                >
                  + Book Another Trip
                </Link>

              </div>

              <div className="professional-bookings-list">

                {bookings.map((booking) => {

                  const packageDetails =
                    getPackageDetails(
                      booking.destination
                    );

                  return (

                    <div
                      className="professional-booking-card"
                      key={booking.id}
                    >

                      {/* IMAGE */}

                      <div className="booking-card-image">

                        <img
                          src={
                            packageDetails?.image ||
                            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80"
                          }
                          alt={booking.destination}
                        />

                        <div className="booking-image-label">
                          ✈ Your Trip
                        </div>

                      </div>

                      {/* DETAILS */}

                      <div className="booking-card-content">

                        <div className="booking-card-top">

                          <div>

                            <span className="confirmed-badge">
                              ✓ Confirmed
                            </span>

                            <h3>
                              {booking.destination}
                            </h3>

                            <p className="booking-subtitle">
                              Your upcoming travel
                              adventure
                            </p>

                          </div>

                          <div className="booking-id">
                            Booking ID
                            <strong>
                              #{String(
                                booking.id
                              ).slice(-6)}
                            </strong>
                          </div>

                        </div>

                        <div className="booking-details-grid">

                          <div className="booking-detail">
                            <span>📅</span>

                            <div>
                              <small>
                                Travel Date
                              </small>

                              <strong>
                                {booking.travelDate}
                              </strong>
                            </div>
                          </div>

                          <div className="booking-detail">
                            <span>👥</span>

                            <div>
                              <small>
                                Travelers
                              </small>

                              <strong>
                                {booking.travelers}{" "}
                                Person(s)
                              </strong>
                            </div>
                          </div>

                          <div className="booking-detail">
                            <span>👤</span>

                            <div>
                              <small>
                                Booked By
                              </small>

                              <strong>
                                {booking.name}
                              </strong>
                            </div>
                          </div>

                          <div className="booking-detail">
                            <span>📍</span>

                            <div>
                              <small>
                                Destination
                              </small>

                              <strong>
                                {booking.destination}
                              </strong>
                            </div>
                          </div>

                        </div>

                        <div className="booking-card-footer">

                          <div className="contact-info">

                            <span>
                              ✉ {booking.email}
                            </span>

                            <span>
                              ☎ {booking.phone}
                            </span>

                          </div>

                          <div className="booking-card-actions">

                            <button
                              className="professional-edit-button"
                              onClick={() =>
                                handleEdit(
                                  booking
                                )
                              }
                            >
                              ✏️ Edit Booking
                            </button>

                            <button
                              className="professional-delete-button"
                              onClick={() =>
                                handleDelete(
                                  booking.id
                                )
                              }
                            >
                              Cancel Trip
                            </button>

                          </div>

                        </div>

                      </div>

                    </div>

                  );
                })}

              </div>

            </div>

          )}

        </div>
      </section>

    </div>
  );
};

export default MyBookings;