import { useState } from "react";
import { patients } from "../data/mockData";
import "./Blog.css";

function Blog() {
  const [expandedId, setExpandedId] = useState(null);
  const [likedIds, setLikedIds] = useState([]);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const toggleLike = (id) => {
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="blog-page">
      <div className="page-header">
        <h1>Patient Stories</h1>
        <p>
          Real stories from real people. Every voice matters in the fight
          against kidney disease.
        </p>
      </div>

      <div className="blog-grid">
        {patients.map((patient) => (
          <article key={patient.id} className="blog-card">
            <div className="blog-card-header">
              <img
                src={patient.avatar}
                alt={patient.name}
                className="blog-avatar"
              />
              <div className="blog-meta">
                <h3 className="blog-author">{patient.name}</h3>
                <span className="blog-diagnosis">{patient.diagnosis}</span>
                <span className="blog-date">
                  {new Date(patient.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <span className="blog-age">Age {patient.age}</span>
            </div>

            <div className="blog-card-body">
              <p className={expandedId === patient.id ? "expanded" : "collapsed"}>
                {patient.story}
              </p>
              <button
                className="read-more-btn"
                onClick={() => toggleExpand(patient.id)}
              >
                {expandedId === patient.id ? "Show less" : "Read more"}
              </button>
            </div>

            <div className="blog-card-footer">
              <button
                className={`like-btn ${likedIds.includes(patient.id) ? "liked" : ""}`}
                onClick={() => toggleLike(patient.id)}
              >
                <span className="like-icon">
                  {likedIds.includes(patient.id) ? "\u2764" : "\u2661"}
                </span>
                <span>
                  {patient.likes + (likedIds.includes(patient.id) ? 1 : 0)}
                </span>
              </button>
              <span className="comment-count">
                &#128172; {patient.comments} comments
              </span>
            </div>
          </article>
        ))}
      </div>

      <div className="blog-cta">
        <h2>Have a Story to Share?</h2>
        <p>
          Your experience can inspire others and raise awareness about kidney
          disease. Share your journey with the Kidney Connect community.
        </p>
        <button className="btn btn-primary">Share Your Story</button>
      </div>
    </div>
  );
}

export default Blog;
