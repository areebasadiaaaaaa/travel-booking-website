import PackageCard from "../components/PackageCard";
import { packages } from "../data/packages";

const Packages = () => {
  return (
    <div className="page">
      <section className="page-header">
        <div>
          <span>EXPLORE THE WORLD</span>
          <h1>Our Travel Packages</h1>
          <p>
            Choose from our carefully selected travel experiences and start
            your next adventure.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="packages-top">
            <div>
              <h2>All Packages</h2>
              <p>{packages.length} amazing destinations available</p>
            </div>

            <select className="filter-select">
              <option>Sort by: Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Top Rated</option>
            </select>
          </div>

          <div className="packages-grid">
            {packages.map((item) => (
              <PackageCard key={item.id} packageData={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;