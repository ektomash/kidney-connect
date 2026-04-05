import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="footer-logo">&#9829; Kidney Connect</span>
          <p className="footer-tagline">
            Connecting patients, donors, and communities for a healthier future.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Platform</h4>
            <a href="/blog">Patient Stories</a>
            <a href="/funds">Fundraising</a>
            <a href="/advice">Education</a>
          </div>
          <div className="footer-col">
            <h4>About</h4>
            <a href="#">ADER Foundation</a>
            <a href="#">Our Mission</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>In collaboration with ADER Foundation | SDG Challenge 2025-2026 | La Salle - Universitat Ramon Llull</p>
      </div>
    </footer>
  );
}

export default Footer;
