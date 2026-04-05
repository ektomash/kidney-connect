import { useState } from "react";
import { Link } from "react-router-dom";
import { kidsLessons } from "../data/kidsLessons";
import Mascot from "../components/Mascot";
import "./KidsZone.css";

const AGE_GROUPS = [
  { key: "younger", label: "Ages 7-10", emoji: "\ud83c\udf1f" },
  { key: "older", label: "Ages 11-16", emoji: "\ud83d\ude80" },
];

function KidsZone() {
  const [ageGroup, setAgeGroup] = useState("younger");

  return (
    <div className="kids-zone">
      <div className="kids-zone-hero">
        <div className="kids-zone-hero-text">
          <h1>
            Kids Zone <span className="kids-zone-sparkle">&#10024;</span>
          </h1>
          <p>
            Learn all about your kidneys with Rinni! Choose your age group and
            start exploring fun interactive lessons.
          </p>
        </div>
        <div className="kids-zone-hero-mascot">
          <Mascot pose="idle" size={140} />
        </div>
      </div>

      <div className="age-group-selector">
        <span className="age-group-label">I am:</span>
        {AGE_GROUPS.map((group) => (
          <button
            key={group.key}
            className={`age-group-btn ${ageGroup === group.key ? "active" : ""}`}
            onClick={() => setAgeGroup(group.key)}
          >
            <span className="age-group-emoji">{group.emoji}</span>
            {group.label}
          </button>
        ))}
      </div>

      <div className="lessons-grid">
        {kidsLessons.map((lesson) => {
          const content = lesson.ageContent[ageGroup];
          const stepCount = content.steps.length;
          const quizCount = content.quiz.length;

          return (
            <Link
              key={lesson.id}
              to={`/advice/kids/${lesson.id}?age=${ageGroup}`}
              className="lesson-card"
              style={{ "--lesson-color": lesson.color }}
            >
              <div className="lesson-card-image">
                <img src={lesson.coverImage} alt={lesson.title} />
                <span className="lesson-card-icon">{lesson.icon}</span>
              </div>
              <div className="lesson-card-body">
                <h3 className="lesson-card-title">{lesson.title}</h3>
                <p className="lesson-card-subtitle">{lesson.subtitle}</p>
                <div className="lesson-card-meta">
                  <span>{stepCount} steps</span>
                  <span className="lesson-card-dot">&middot;</span>
                  <span>{quizCount} quiz questions</span>
                </div>
              </div>
              <div
                className="lesson-card-accent"
                style={{ background: lesson.color }}
              />
            </Link>
          );
        })}
      </div>

      <div className="kids-zone-back">
        <Link to="/advice" className="kids-zone-back-link">
          &larr; Back to Advice
        </Link>
      </div>
    </div>
  );
}

export default KidsZone;
