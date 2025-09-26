import React from "react";

function SearchFilter({ categories, searchText, setSearchText, activeCategory, setActiveCategory }) {
  return (
    <div className="d-flex flex-column flex-md-row gap-2 mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search resources..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <select
        className="form-select"
        value={activeCategory}
        onChange={(e) => setActiveCategory(e.target.value)}
      >
        {categories.map((category, idx) => (
          <option key={idx} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SearchFilter;
