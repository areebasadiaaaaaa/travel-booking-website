import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import packages from "../data/packages";

function MyBookings() {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("travelBookings") || "[]"
      );
    } catch {
      return [];
    }
  });

  const [deleteId, setDeleteId] = useState(null);

  const getPackageDetails = (packageId) => {
    return packages.find(
      (item) => Number(item.id) === Number(packageId)
    );
  };

  const handleDelete = (id) => {
    const updatedBookings = bookings.filter(
      (booking) => booking.id !== id
    );

    localStorage.setItem(
      "travelBookings",
      JSON.stringify(updatedBookings)
    );

    setBookings(updatedBookings);
    setDeleteId(null);
  };

  return (
    <>
      <section className="page-header">
        <div className="container text-center">
          <span>YOUR TRAVEL PLANS</span>
          <h1>My Bookings</h1>
          <p>
            Manage, update and cancel your upcoming travel bookings.
          </p>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          {bookings.length === 0 ? (
            <div className="card border-0 shadow-sm text-center p-5">
              <div className="display-2 mb-3">✈️</div>

              <h2 className="fw-bold">
                No Bookings Yet
              </h2>

              <p className="text-muted mx-auto mb-4" style={{ maxWidth: "500px" }}>
                You haven't booked a trip yet. Explore our travel
                packages and start planning your next adventure.
              </p>

              <div>
                <Link
                  to="/packages"
                  className="btn btn-primary btn-lg rounded-pill px-5"
                >
                  Explore Packages
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
                <div>
                  <h2 className="fw-bold mb-1">
                    Your Reservations
                  </h2>

                  <p className="text-muted mb-0">
                    {bookings.length} booking
                    {bookings.length !== 1 ? "s" : ""} saved
                  </p>
                </div>

                <Link
                  to="/packages"
                  className="btn btn-primary rounded-pill px-4"
                >
                  + Book Another Trip
                </Link>
              </div>

              <div className="row g-4">
                {bookings.map((booking) => {
                  const packageData = getPackageDetails(
                    booking.packageId
                  );

                  return (
                    <div className="col-12" key={booking.id}>
                      <div className="card border-0 shadow-sm overflow-hidden">
                        <div className="row g-0">
                          <div className="col-md-4">
                            {packageData ? (
                              <img
                                src={packageData.image}
                                alt={packageData.destination}
                                className="w-100 h-100"
                                style={{
                                  minHeight: "280px",
                                  objectFit: "cover",
                                }}
                              />
                            ) : (
                              <div
                                className="d-flex align-items-center justify-content-center bg-secondary text-white h-100"
                                style={{ minHeight: "280px" }}
                              >
                                Package unavailable
                              </div>
                            )}
                          </div>

                          <div className="col-md-8">
                            <div className="card-body p-4">
                              <div className="d-flex flex-column flex-lg-row justify-content-between gap-3">
                                <div>
                                  <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2 mb-2">
                                    Confirmed
                                  </span>

                                  <h3 className="fw-bold mb-1">
                                    {packageData
                                      ? packageData.title
                                      : "Travel Package"}
                                  </h3>

                                  <p className="text-muted mb-3">
                                    📍{" "}
                                    {packageData
                                      ? packageData.destination
                                      : "Destination unavailable"}
                                  </p>
                                </div>

                                {packageData && (
                                  <div className="text-lg-end">
                                    <small className="text-muted">
                                      Package price
                                    </small>

                                    <div className="fs-4 fw-bold text-primary">
                                      ${packageData.price}
                                    </div>
                                  </div>
                                )}
                              </div>

                              <div className="row g-3 my-2">
                                <div className="col-sm-6 col-lg-3">
                                  <small className="text-muted d-block">
                                    Traveler
                                  </small>
                                  <strong>
                                    {booking.name}
                                  </strong>
                                </div>

                                <div className="col-sm-6 col-lg-3">
                                  <small className="text-muted d-block">
                                    Travel Date
                                  </small>
                                  <strong>
                                    {booking.travelDate}
                                  </strong>
                                </div>

                                <div className="col-sm-6 col-lg-3">
                                  <small className="text-muted d-block">
                                    Travelers
                                  </small>
                                  <strong>
                                    {booking.travelers}
                                  </strong>
                                </div>

                                <div className="col-sm-6 col-lg-3">
                                  <small className="text-muted d-block">
                                    Phone
                                  </small>
                                  <strong>
                                    {booking.phone}
                                  </strong>
                                </div>
                              </div>

                              {booking.specialRequest && (
                                <div className="bg-light rounded-3 p-3 mt-3">
                                  <small className="text-muted d-block mb-1">
                                    Special Request
                                  </small>

                                  <span>
                                    {booking.specialRequest}
                                  </span>
                                </div>
                              )}

                              <div className="d-flex flex-wrap gap-2 mt-4 pt-3 border-top">
                                {packageData && (
                                  <Link
                                    to={`/packages/${packageData.id}`}
                                    className="btn btn-outline-primary rounded-pill px-4"
                                  >
                                    View Package
                                  </Link>
                                )}

                                <button
                                  className="btn btn-primary rounded-pill px-4"
                                  onClick={() =>
                                    navigate(
                                      `/booking?edit=${booking.id}`
                                    )
                                  }
                                >
                                  Edit Booking
                                </button>

                                <button
                                  className="btn btn-outline-danger rounded-pill px-4"
                                  onClick={() =>
                                    setDeleteId(booking.id)
                                  }
                                >
                                  Cancel Booking
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>

      {deleteId && (
        <div
          className="modal d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 rounded-4">
              <div className="modal-body p-4 text-center">
                <div className="display-5 mb-3">⚠️</div>

                <h4 className="fw-bold">
                  Cancel this booking?
                </h4>

                <p className="text-muted">
                  This action will permanently remove the booking
                  from your saved reservations.
                </p>

                <div className="d-flex justify-content-center gap-2 mt-4">
                  <button
                    className="btn btn-light rounded-pill px-4"
                    onClick={() => setDeleteId(null)}
                  >
                    Keep Booking
                  </button>

                  <button
                    className="btn btn-danger rounded-pill px-4"
                    onClick={() => handleDelete(deleteId)}
                  >
                    Yes, Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MyBookings;