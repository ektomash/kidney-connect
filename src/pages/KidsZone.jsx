import { useState } from "react";
import { Link } from "react-router-dom";
import { kidsLessons } from "../data/kidsLessons";
import { kidsLockedSections } from "../data/kidsLockedSections";
import heroFallback from "../assets/hero.png";
import Mascot from "../components/Mascot";
import LockedLessonCard from "../components/LockedLessonCard";
import SubscribeBanner from "../components/SubscribeBanner";
import SubscribeModal from "../components/SubscribeModal";
import "./KidsZone.css";

const AGE_GROUPS = [
  { key: "younger", label: "Ages 7-10", emoji: "\uD83C\uDF1F" },
  { key: "older", label: "Ages 11-16", emoji: "\uD83D\uDE80" },
];

function KidsZone() {
  const [ageGroup, setAgeGroup] = useState("younger");
  const [showSubscribe, setShowSubscribe] = useState(false);

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

      <section className="kz-section">
        <div className="kz-section-header">
          <h2>&#9989; Start Here — Free Lessons</h2>
          <span className="kz-section-count">
            {kidsLessons.length} lessons available
          </span>
        </div>
        <div className="lessons-grid">
          {kidsLessons.map((lesson) => {
            const content = lesson.ageContent[ageGroup];
            const stepCount = content.steps.length;
            const quizCount = content.quiz.length;

            return (
              <Link
                key={lesson.id}
                to={`/advice/kids/${lesson.slug || lesson.id}?age=${ageGroup}&page=1&view=lesson`}
                className="lesson-card"
              >
                <div className="lesson-card-image">
                  <img
                    src={lesson.coverImage}
                    alt={lesson.title}
                    onError={(e) => {
                      e.currentTarget.src = heroFallback;
                    }}
                  />
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
      </section>

      <SubscribeBanner onSubscribe={() => setShowSubscribe(true)} />

      {kidsLockedSections.map((section) => (
        <section key={section.id} className="kz-section kz-section-locked">
          <div className="kz-section-header">
            <h2>
              <span className="kz-section-icon">{section.icon}</span>{" "}
              {section.title}
            </h2>
            <span className="kz-section-badge">
              &#128274; {section.lessons.length} lessons &middot; Premium
            </span>
          </div>
          <div className="locked-lessons-grid">
            {section.lessons.map((lesson) => (
              <LockedLessonCard
                key={lesson.id}
                lesson={lesson}
                sectionColor={section.color}
                onClick={() => setShowSubscribe(true)}
              />
            ))}
          </div>
        </section>
      ))}

      <div className="kids-zone-back">
        <Link to="/advice" className="kids-zone-back-link">
          &larr; Back to Advice
        </Link>
      </div>

      <SubscribeModal
        open={showSubscribe}
        onClose={() => setShowSubscribe(false)}
      />
    </div>
  );
}

export default KidsZone;
