import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Packages from "./pages/Packages";
import PackageDetails from "./pages/PackageDetails";
import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route
            path="/packages/:id"
            element={<PackageDetails />}
          />
          <Route path="/booking" element={<Booking />} />
          <Route path="/my-bookings" element={<MyBookings />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;