import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
const resources = [
  {
    title: "Web Security Basics",
    description: "Learn the fundamentals of web security.",
    category: "Web Security",
    link: "https://www.youtube.com/results?search_query=web+security+basics"
  },
  {
    title: "Networking 101",
    description: "Introduction to computer networks.",
    category: "Networking",
    link: "https://www.youtube.com/results?search_query=networking+basics"
  },
  {
    title: "CTF Challenges",
    description: "Practice Capture the Flag challenges.",
    category: "CTFs",
    link: "https://www.youtube.com/results?search_query=CTF+challenges"
  }
];

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Cybersecurity Dashboard</h1>
      <div className="row">
        {resources.map((res, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{res.title}</h5>
                <p className="card-text">{res.description}</p>
                <p><strong>Category:</strong> {res.category}</p>
                <a href={res.link} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Mëso më shumë
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
