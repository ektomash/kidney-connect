import { useState } from "react";
import { articles } from "../data/mockData";
import "./Advice.css";

function Advice() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedId, setExpandedId] = useState(null);

  const categories = ["All", ...new Set(articles.map((a) => a.category))];

  const filtered =
    selectedCategory === "All"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  return (
    <div className="advice-page">
      <div className="page-header">
        <h1>Advice & Education</h1>
        <p>
          Learn about kidney health, organ donation, and how you can make a
          difference. Knowledge is the first step toward change.
        </p>
      </div>

      <div className="category-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="articles-grid">
        {filtered.map((article) => (
          <article key={article.id} className="article-card">
            <div className="article-image">
              <img src={article.image} alt={article.title} />
              <span className="article-category">{article.category}</span>
            </div>
            <div className="article-body">
              <div className="article-meta">
                <span className="article-author">{article.author}</span>
                <span className="article-dot">&middot;</span>
                <span className="article-readtime">{article.readTime}</span>
              </div>
              <h3 className="article-title">{article.title}</h3>
              <p className="article-summary">{article.summary}</p>

              {expandedId === article.id && (
                <div className="article-full-content">
                  <p>{article.content}</p>
                </div>
              )}

              <button
                className="article-read-btn"
                onClick={() =>
                  setExpandedId(
                    expandedId === article.id ? null : article.id
                  )
                }
              >
                {expandedId === article.id ? "Show less" : "Read article"}{" "}
                &rarr;
              </button>
            </div>
          </article>
        ))}
      </div>

      <section className="quick-facts">
        <h2>Quick Facts About Kidney Health</h2>
        <div className="facts-grid">
          <div className="fact-card">
            <div className="fact-number">850M</div>
            <p>people worldwide are affected by kidney disease</p>
          </div>
          <div className="fact-card">
            <div className="fact-number">1 in 10</div>
            <p>adults globally has some form of chronic kidney disease</p>
          </div>
          <div className="fact-card">
            <div className="fact-number">8</div>
            <p>lives can be saved by a single organ donor</p>
          </div>
          <div className="fact-card">
            <div className="fact-number">90%</div>
            <p>of kidney disease can be prevented with early detection</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Advice;
