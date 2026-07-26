import { useState } from "react";

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    travelers: 1,
    travelDate: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing bookings from Local Storage
    const existingBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    // Create new booking
    const newBooking = {
      id: Date.now(),
      ...formData,
      status: "Confirmed",
      createdAt: new Date().toISOString(),
    };

    // Add new booking to existing bookings
    const updatedBookings = [
      ...existingBookings,
      newBooking,
    ];

    // Save bookings to Local Storage
    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );

    // Show success message
    setSubmitted(true);

    // Clear form
    setFormData({
      name: "",
      email: "",
      destination: "",
      travelers: 1,
      travelDate: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="page">
      <section className="page-header">
        <div>
          <span>START YOUR JOURNEY</span>
          <h1>Book Your Trip</h1>
          <p>
            Fill in your details and get ready for an unforgettable
            travel experience.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container booking-layout">
          <div className="booking-info">
            <span className="section-label">
              READY TO TRAVEL?
            </span>

            <h2>Let's Plan Your Dream Vacation</h2>

            <p>
              Complete the booking form and start planning your next
              unforgettable journey.
            </p>

            <div className="booking-benefit">
              <span>✓</span>
              <div>
                <h4>Easy Booking</h4>
                <p>Simple and quick booking process.</p>
              </div>
            </div>

            <div className="booking-benefit">
              <span>✓</span>
              <div>
                <h4>Travel Support</h4>
                <p>Our team is here to help you anytime.</p>
              </div>
            </div>

            <div className="booking-benefit">
              <span>✓</span>
              <div>
                <h4>Best Experiences</h4>
                <p>Carefully selected destinations for you.</p>
              </div>
            </div>
          </div>

          <div className="booking-form-card">
            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>

                <h2>Booking Confirmed!</h2>

                <p>
                  Your trip has been successfully booked.
                  You can view your booking in the My Bookings
                  section.
                </p>

                <a
                  href="/my-bookings"
                  className="primary-button"
                >
                  View My Bookings →
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2>Booking Details</h2>

                <p>
                  Enter your information below to book your trip.
                </p>

                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Travel Destination</label>

                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Select destination
                      </option>

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
                    <label>Number of Travelers</label>

                    <input
                      type="number"
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleChange}
                      min="1"
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
                      value={formData.travelDate}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 890"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Additional Message</label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us anything you'd like us to know..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="primary-button full-button"
                >
                  Confirm Booking →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;