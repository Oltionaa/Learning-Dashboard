import React from "react";

function Header({ isDarkTheme, toggleTheme }) {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
      <h1 className="fw-bold mb-3 mb-md-0 text-center text-md-start">
        Cybersecurity Dashboard
      </h1>
      <button
        className={`btn ${isDarkTheme ? "btn-light" : "btn-dark"}`}
        onClick={toggleTheme}
      >
        {isDarkTheme ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default Header;
