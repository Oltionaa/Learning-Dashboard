import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header.jsx";
import SearchFilter from "./components/SearchFilter.jsx";
import ResourceCard from "./components/ResourceCard.jsx";
import resourcesData from "./data/resources";

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchText, setSearchText] = useState("");

  const categories = ["All", "Web Security", "Networking", "CTFs"];

  const visibleResources = resourcesData.filter((item) => {
    const categoryMatch =
      activeCategory === "All" || item.category === activeCategory;
    const searchMatch =
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.description.toLowerCase().includes(searchText.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div className={`min-vh-100 m-0 ${isDarkTheme ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <div className="container py-4">
        <Header isDarkTheme={isDarkTheme} toggleTheme={() => setIsDarkTheme(!isDarkTheme)} />
        <SearchFilter
          categories={categories}
          searchText={searchText}
          setSearchText={setSearchText}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <div className="d-flex flex-wrap justify-content-center gap-3">
          {visibleResources.length > 0 ? (
            visibleResources.map((item, idx) => (
              <ResourceCard key={idx} resource={item} isDarkTheme={isDarkTheme} />
            ))
          ) : (
            <p className="text-center mt-4">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
