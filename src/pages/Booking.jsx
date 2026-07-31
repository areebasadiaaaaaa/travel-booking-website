import { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import packages from "../data/packages";

const initialForm = {
  packageId: "",
  name: "",
  email: "",
  phone: "",
  travelDate: "",
  travelers: 1,
  specialRequest: "",
};

function Booking() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const packageId = searchParams.get("packageId");
  const editId = searchParams.get("edit");

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const selectedPackage = packages.find(
    (item) => item.id === Number(form.packageId)
  );

  useEffect(() => {
    if (editId) {
      const savedBookings = JSON.parse(
        localStorage.getItem("travelBookings") || "[]"
      );

      const existingBooking = savedBookings.find(
        (booking) => String(booking.id) === String(editId)
      );

      if (existingBooking) {
        setForm({
          packageId: existingBooking.packageId,
          name: existingBooking.name,
          email: existingBooking.email,
          phone: existingBooking.phone,
          travelDate: existingBooking.travelDate,
          travelers: existingBooking.travelers,
          specialRequest: existingBooking.specialRequest || "",
        });
      }
    } else if (packageId) {
      setForm((prev) => ({
        ...prev,
        packageId,
      }));
    }
  }, [editId, packageId]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.packageId) {
      newErrors.packageId = "Please select a travel package.";
    }

    if (!form.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (form.name.trim().length < 3) {
      newErrors.name = "Name must contain at least 3 characters.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9+\-\s]{10,15}$/.test(form.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!form.travelDate) {
      newErrors.travelDate = "Please select your travel date.";
    } else {
      const selectedDate = new Date(form.travelDate);
      const today = new Date();

      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        newErrors.travelDate =
          "Travel date cannot be in the past.";
      }
    }

    if (!form.travelers || Number(form.travelers) < 1) {
      newErrors.travelers =
        "At least one traveler is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const savedBookings = JSON.parse(
      localStorage.getItem("travelBookings") || "[]"
    );

    if (editId) {
      const updatedBookings = savedBookings.map((booking) =>
        String(booking.id) === String(editId)
          ? {
              ...booking,
              ...form,
              travelers: Number(form.travelers),
              updatedAt: new Date().toISOString(),
            }
          : booking
      );

      localStorage.setItem(
        "travelBookings",
        JSON.stringify(updatedBookings)
      );
    } else {
      const newBooking = {
        id: Date.now(),
        ...form,
        travelers: Number(form.travelers),
        createdAt: new Date().toISOString(),
      };

      localStorage.setItem(
        "travelBookings",
        JSON.stringify([
          ...savedBookings,
          newBooking,
        ])
      );
    }

    setSuccess(true);

    setTimeout(() => {
      navigate("/my-bookings");
    }, 1200);
  };

  return (
    <>
      <section className="page-header">
        <div className="container text-center">
          <span>{editId ? "UPDATE YOUR TRIP" : "PLAN YOUR JOURNEY"}</span>
          <h1>{editId ? "Edit Booking" : "Book Your Trip"}</h1>
          <p>
            {editId
              ? "Update your travel details below."
              : "Complete the form and reserve your dream vacation."}
          </p>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                <div className="card-body p-4 p-md-5">
                  {success && (
                    <div className="alert alert-success">
                      ✓ Booking saved successfully! Redirecting to
                      My Bookings...
                    </div>
                  )}

                  <form onSubmit={handleSubmit} noValidate>
                    <h3 className="fw-bold mb-4">
                      Trip Information
                    </h3>

                    <div className="mb-4">
                      <label className="form-label fw-semibold">
                        Select Travel Package *
                      </label>

                      <select
                        name="packageId"
                        className={`form-select form-select-lg ${
                          errors.packageId ? "is-invalid" : ""
                        }`}
                        value={form.packageId}
                        onChange={handleChange}
                      >
                        <option value="">
                          Choose a destination
                        </option>

                        {packages.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.title} — ${item.price}
                          </option>
                        ))}
                      </select>

                      {errors.packageId && (
                        <div className="invalid-feedback">
                          {errors.packageId}
                        </div>
                      )}
                    </div>

                    {selectedPackage && (
                      <div className="alert alert-primary d-flex justify-content-between align-items-center">
                        <div>
                          <strong>{selectedPackage.title}</strong>
                          <br />
                          <small>
                            {selectedPackage.destination} •{" "}
                            {selectedPackage.duration}
                          </small>
                        </div>

                        <strong>
                          ${selectedPackage.price}
                        </strong>
                      </div>
                    )}

                    <hr className="my-4" />

                    <h3 className="fw-bold mb-4">
                      Personal Information
                    </h3>

                    <div className="row g-4">
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">
                          Full Name *
                        </label>

                        <input
                          type="text"
                          name="name"
                          className={`form-control ${
                            errors.name ? "is-invalid" : ""
                          }`}
                          placeholder="Enter your full name"
                          value={form.name}
                          onChange={handleChange}
                        />

                        {errors.name && (
                          <div className="invalid-feedback">
                            {errors.name}
                          </div>
                        )}
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-semibold">
                          Email Address *
                        </label>

                        <input
                          type="email"
                          name="email"
                          className={`form-control ${
                            errors.email ? "is-invalid" : ""
                          }`}
                          placeholder="example@email.com"
                          value={form.email}
                          onChange={handleChange}
                        />

                        {errors.email && (
                          <div className="invalid-feedback">
                            {errors.email}
                          </div>
                        )}
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-semibold">
                          Phone Number *
                        </label>

                        <input
                          type="tel"
                          name="phone"
                          className={`form-control ${
                            errors.phone ? "is-invalid" : ""
                          }`}
                          placeholder="+92 300 1234567"
                          value={form.phone}
                          onChange={handleChange}
                        />

                        {errors.phone && (
                          <div className="invalid-feedback">
                            {errors.phone}
                          </div>
                        )}
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-semibold">
                          Travel Date *
                        </label>

                        <input
                          type="date"
                          name="travelDate"
                          className={`form-control ${
                            errors.travelDate ? "is-invalid" : ""
                          }`}
                          value={form.travelDate}
                          onChange={handleChange}
                        />

                        {errors.travelDate && (
                          <div className="invalid-feedback">
                            {errors.travelDate}
                          </div>
                        )}
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-semibold">
                          Number of Travelers *
                        </label>

                        <input
                          type="number"
                          name="travelers"
                          min="1"
                          max="20"
                          className={`form-control ${
                            errors.travelers ? "is-invalid" : ""
                          }`}
                          value={form.travelers}
                          onChange={handleChange}
                        />

                        {errors.travelers && (
                          <div className="invalid-feedback">
                            {errors.travelers}
                          </div>
                        )}
                      </div>

                      <div className="col-12">
                        <label className="form-label fw-semibold">
                          Special Requests
                        </label>

                        <textarea
                          name="specialRequest"
                          rows="4"
                          className="form-control"
                          placeholder="Any special requirements or requests?"
                          value={form.specialRequest}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row gap-3 mt-5">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg rounded-pill px-5"
                      >
                        {editId
                          ? "Update Booking"
                          : "Confirm Booking"}
                      </button>

                      <Link
                        to="/my-bookings"
                        className="btn btn-outline-secondary btn-lg rounded-pill px-5"
                      >
                        Cancel
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Booking;