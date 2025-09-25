import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const resources = [
    {
      title: "Web Security Basics",
      description: "Learn the basics of web security.",
      category: "Web Security",
      link: "https://www.youtube.com/results?search_query=web+security+basics",
    },
    {
      title: "Networking 101",
      description: "Introduction to computer networks.",
      category: "Networking",
      link: "https://www.youtube.com/results?search_query=networking+basics",
    },
    {
      title: "CTF Challenges",
      description: "Practice Capture the Flag challenges.",
      category: "CTFs",
      link: "https://www.youtube.com/results?search_query=CTF+challenges",
    },
  ];

  const categories = ["All", "Web Security", "Networking", "CTFs"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = resources.filter((res) => {
    const matchesCategory =
      selectedCategory === "All" || res.category === selectedCategory;

    const matchesSearch =
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
   <div
  className={`min-vh-100 m-0 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
>

  <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
    <h1 className="fw-bold mb-3 mb-md-0 text-center text-md-start">
      Cybersecurity Dashboard
    </h1>
    <button
      className={`btn ${darkMode ? "btn-light" : "btn-dark"}`}
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  </div>


  <div className="d-flex flex-column flex-md-row gap-2 mb-4">
    <input
      type="text"
      className="form-control"
      placeholder="Search by title or description..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <select
      className="form-select"
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
    >
      {categories.map((cat, idx) => (
        <option key={idx} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  </div>


  <div className="d-flex flex-wrap justify-content-center gap-3">
    {filteredResources.length > 0 ? (
      filteredResources.map((res, index) => (
        <div
          className={`card flex-fill ${darkMode ? "bg-secondary text-light" : "bg-light text-dark"}`}
          style={{ minWidth: "250px", maxWidth: "300px" }}
          key={index}
        >
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <h5 className="card-title">{res.title}</h5>
              <p className="card-text">{res.description}</p>
              <p>
                <strong>Category:</strong> {res.category}
              </p>
            </div>
            <a
              href={res.link}
              className="btn btn-primary mt-2"
              target="_blank"
              rel="noreferrer"
            >
               Learn more
            </a>
          </div>
        </div>
      ))
    ) : (
      <p className="text-center mt-4"> The result of this was not found.</p>
    )}
  </div>
</div>
  );
}

export default App;
