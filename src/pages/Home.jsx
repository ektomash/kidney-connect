import { Link } from "react-router-dom";
import { stats } from "../data/mockData";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>
            Every Story Matters.
            <br />
            Every Donation <span className="highlight">Saves a Life.</span>
          </h1>
          <p className="hero-subtitle">
            Kidney Connect brings together patients, donors, and communities to
            raise awareness about kidney disease and encourage organ donation.
          </p>
          <div className="hero-actions">
            <Link to="/blog" className="btn btn-primary">
              Read Patient Stories
            </Link>
            <Link to="/funds" className="btn btn-secondary">
              Support a Cause
            </Link>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-number">
              {stats.patientsHelped.toLocaleString()}
            </span>
            <span className="stat-label">Patients Helped</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">
              ${stats.totalDonations.toLocaleString()}
            </span>
            <span className="stat-label">Donations Raised</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">
              {stats.organDonorsRegistered.toLocaleString()}
            </span>
            <span className="stat-label">Donors Registered</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">
              {stats.storiesShared.toLocaleString()}
            </span>
            <span className="stat-label">Stories Shared</span>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">How Kidney Connect Works</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">&#128221;</div>
            <h3>Share Your Story</h3>
            <p>
              Patients and families share their personal experiences to raise
              awareness and find support from the community.
            </p>
            <Link to="/blog" className="feature-link">
              Visit Blog &rarr;
            </Link>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#128176;</div>
            <h3>Fund Treatment</h3>
            <p>
              Support patients financially through transparent fundraising
              campaigns for medical treatment and care.
            </p>
            <Link to="/funds" className="feature-link">
              View Campaigns &rarr;
            </Link>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#127891;</div>
            <h3>Learn & Educate</h3>
            <p>
              Access educational content about kidney health, organ donation,
              and how young people can make a difference.
            </p>
            <Link to="/advice" className="feature-link">
              Read Articles &rarr;
            </Link>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#129309;</div>
            <h3>Connect & Support</h3>
            <p>
              Join a community of patients, donors, and healthcare
              professionals working together for kidney health.
            </p>
            <Link to="/profile" className="feature-link">
              Join Us &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Become an Organ Donor Today</h2>
          <p>
            One donor can save up to 8 lives. Register as an organ donor and
            give the gift of life to those in need.
          </p>
          <a href="#" className="btn btn-primary btn-large">
            Register as a Donor
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
