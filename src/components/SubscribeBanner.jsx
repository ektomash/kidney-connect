import "./SubscribeBanner.css";

function SubscribeBanner({ onSubscribe }) {
  return (
    <section className="subscribe-banner">
      <div className="subscribe-banner-content">
        <span className="subscribe-banner-badge">FOR SCHOOLS & EDUCATORS</span>
        <h2>Unlock the Complete Kids Zone</h2>
        <p>
          Give your students access to 48 interactive lessons, quizzes, and
          hands-on labs about kidney health, the human body, nutrition, and
          more. Built for classrooms ages 7-16.
        </p>
        <div className="subscribe-banner-stats">
          <div className="subscribe-stat">
            <span className="subscribe-stat-value">48</span>
            <span className="subscribe-stat-label">Lessons</span>
          </div>
          <div className="subscribe-stat">
            <span className="subscribe-stat-value">7</span>
            <span className="subscribe-stat-label">Topic Areas</span>
          </div>
          <div className="subscribe-stat">
            <span className="subscribe-stat-value">100+</span>
            <span className="subscribe-stat-label">Quiz Questions</span>
          </div>
          <div className="subscribe-stat">
            <span className="subscribe-stat-value">2</span>
            <span className="subscribe-stat-label">Age Groups</span>
          </div>
        </div>
        <button className="subscribe-banner-btn" onClick={onSubscribe}>
          Subscribe for Your School
        </button>
        <p className="subscribe-banner-note">
          Free 30-day trial &middot; No credit card required &middot; Cancel
          anytime
        </p>
      </div>
    </section>
  );
}

export default SubscribeBanner;
