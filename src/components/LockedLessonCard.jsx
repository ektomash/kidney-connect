import "./LockedLessonCard.css";

function LockedLessonCard({ lesson, sectionColor, onClick }) {
  return (
    <button className="locked-card" onClick={onClick}>
      <div className="locked-card-icon-row">
        <span className="locked-card-emoji">{lesson.icon}</span>
        <span className="locked-card-lock">&#128274;</span>
      </div>
      <div className="locked-card-body">
        <h4 className="locked-card-title">{lesson.title}</h4>
        <p className="locked-card-subtitle">{lesson.subtitle}</p>
      </div>
      <div
        className="locked-card-accent"
        style={{ background: sectionColor }}
      />
    </button>
  );
}

export default LockedLessonCard;
