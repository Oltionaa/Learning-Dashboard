import React from "react";

function ResourceCard({ resource, isDarkTheme }) {
  return (
    <div
      className={`card flex-fill ${isDarkTheme ? "bg-secondary text-light" : "bg-light text-dark"}`}
      style={{ minWidth: "250px", maxWidth: "300px" }}
    >
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{resource.title}</h5>
          <p className="card-text">{resource.description}</p>
          <p>
            <strong>Category:</strong> {resource.category}
          </p>
        </div>
        <a
          href={resource.link}
          className="btn btn-primary mt-2"
          target="_blank"
          rel="noreferrer"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}

export default ResourceCard;
