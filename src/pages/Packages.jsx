import { useMemo, useState } from "react";
import packages from "../data/packages";
import PackageCard from "../components/PackageCard";

function Packages() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const categories = [
    "All",
    ...new Set(packages.map((item) => item.category)),
  ];

  const filteredPackages = useMemo(() => {
    let result = packages.filter((item) => {
      const search = searchTerm.toLowerCase().trim();

      const matchesSearch =
        item.title.toLowerCase().includes(search) ||
        item.destination.toLowerCase().includes(search) ||
        item.category.toLowerCase().includes(search);

      const matchesCategory =
        category === "All" || item.category === category;

      return matchesSearch && matchesCategory;
    });

    if (sortBy === "lowToHigh") {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sortBy === "highToLow") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [searchTerm, category, sortBy]);

  const clearFilters = () => {
    setSearchTerm("");
    setCategory("All");
    setSortBy("default");
  };

  return (
    <>
      <section className="page-header">
        <div className="container text-center">
          <span>DISCOVER YOUR NEXT ADVENTURE</span>
          <h1>Travel Packages</h1>
          <p>
            Find your perfect destination and start your next unforgettable
            journey.
          </p>
        </div>
      </section>

      <section className="py-4 bg-light">
        <div className="container">
          <div className="card border-0 shadow-sm p-4">
            <div className="row g-3">
              <div className="col-lg-5">
                <label className="form-label fw-semibold">
                  Search Destination
                </label>

                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Search destination or package..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="col-md-6 col-lg-3">
                <label className="form-label fw-semibold">
                  Category
                </label>

                <select
                  className="form-select form-select-lg"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-6 col-lg-4">
                <label className="form-label fw-semibold">
                  Sort By
                </label>

                <select
                  className="form-select form-select-lg"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="default">Recommended</option>
                  <option value="lowToHigh">
                    Price: Low to High
                  </option>
                  <option value="highToLow">
                    Price: High to Low
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
            <div>
              <h2 className="fw-bold mb-1">Explore Packages</h2>
              <p className="text-muted mb-0">
                {filteredPackages.length} package
                {filteredPackages.length !== 1 ? "s" : ""} found
              </p>
            </div>

            {(searchTerm || category !== "All" || sortBy !== "default") && (
              <button
                className="btn btn-outline-secondary rounded-pill"
                onClick={clearFilters}
              >
                Clear Filters
              </button>
            )}
          </div>

          {filteredPackages.length > 0 ? (
            <div className="row g-4">
              {filteredPackages.map((item) => (
                <div className="col-md-6 col-lg-4" key={item.id}>
                  <PackageCard packageData={item} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-5">
              <div className="display-3 mb-3">🔍</div>
              <h3>No packages found</h3>
              <p className="text-muted">
                Try another destination or change your filters.
              </p>

              <button
                className="btn btn-primary rounded-pill px-4"
                onClick={clearFilters}
              >
                Show All Packages
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Packages;