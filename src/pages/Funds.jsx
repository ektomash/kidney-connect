import { useState } from "react";
import { fundraisers } from "../data/mockData";
import "./Funds.css";

function Funds() {
  const [donateModalId, setDonateModalId] = useState(null);
  const [donationAmount, setDonationAmount] = useState("");

  const handleDonate = (e) => {
    e.preventDefault();
    alert(
      `Thank you for your donation of $${donationAmount}! (This is a demo — no real transaction was made.)`
    );
    setDonateModalId(null);
    setDonationAmount("");
  };

  return (
    <div className="funds-page">
      <div className="page-header">
        <h1>Fundraising Campaigns</h1>
        <p>
          Support patients and healthcare initiatives. Every contribution makes
          a difference.
        </p>
      </div>

      <div className="funds-grid">
        {fundraisers.map((fund) => {
          const progress = Math.round((fund.raised / fund.goal) * 100);
          return (
            <div key={fund.id} className="fund-card">
              <div className="fund-card-header">
                <img
                  src={fund.avatar}
                  alt={fund.patient}
                  className="fund-avatar"
                />
                <div className="fund-badge">{fund.daysLeft} days left</div>
              </div>

              <div className="fund-card-body">
                <h3 className="fund-title">{fund.title}</h3>
                <p className="fund-patient">by {fund.patient}</p>
                <p className="fund-description">{fund.description}</p>

                <div className="fund-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${Math.min(progress, 100)}%` }}
                    ></div>
                  </div>
                  <div className="progress-info">
                    <span className="progress-raised">
                      ${fund.raised.toLocaleString()}
                    </span>
                    <span className="progress-goal">
                      of ${fund.goal.toLocaleString()}
                    </span>
                  </div>
                  <div className="progress-meta">
                    <span>{progress}% funded</span>
                    <span>{fund.donors} donors</span>
                  </div>
                </div>
              </div>

              <div className="fund-card-footer">
                <button
                  className="donate-btn"
                  onClick={() => setDonateModalId(fund.id)}
                >
                  Donate Now
                </button>
                <button className="share-btn">Share</button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Donation Modal */}
      {donateModalId && (
        <div className="modal-overlay" onClick={() => setDonateModalId(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setDonateModalId(null)}
            >
              &times;
            </button>
            <h2>Make a Donation</h2>
            <p className="modal-subtitle">
              to{" "}
              {fundraisers.find((f) => f.id === donateModalId)?.title}
            </p>
            <form onSubmit={handleDonate}>
              <div className="amount-presets">
                {[10, 25, 50, 100].map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    className={`preset-btn ${donationAmount === String(amount) ? "active" : ""}`}
                    onClick={() => setDonationAmount(String(amount))}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <div className="custom-amount">
                <span className="currency">$</span>
                <input
                  type="number"
                  min="1"
                  placeholder="Custom amount"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="donate-submit-btn">
                Donate ${donationAmount || "0"}
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="funds-info">
        <h2>Why Donate Through Kidney Connect?</h2>
        <div className="info-cards">
          <div className="info-card">
            <div className="info-icon">&#128274;</div>
            <h4>Transparent</h4>
            <p>Track exactly how your donation is being used.</p>
          </div>
          <div className="info-card">
            <div className="info-icon">&#9989;</div>
            <h4>Verified</h4>
            <p>All campaigns are verified by healthcare partners.</p>
          </div>
          <div className="info-card">
            <div className="info-icon">&#128153;</div>
            <h4>Direct Impact</h4>
            <p>100% of your donation goes to the patient or cause.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Funds;
