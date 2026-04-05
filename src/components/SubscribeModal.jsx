import { useState } from "react";
import "./SubscribeModal.css";

function SubscribeModal({ open, onClose }) {
  const [formData, setFormData] = useState({
    schoolName: "",
    contactName: "",
    email: "",
    students: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="subscribe-overlay" onClick={onClose}>
      <div className="subscribe-modal" onClick={(e) => e.stopPropagation()}>
        <button className="subscribe-modal-close" onClick={onClose}>
          &times;
        </button>

        {submitted ? (
          <div className="subscribe-success">
            <span className="subscribe-success-icon">&#9989;</span>
            <h2>Thank You!</h2>
            <p>
              We've received your request. Our team will contact you within 24
              hours to set up your school's subscription.
            </p>
            <button className="subscribe-done-btn" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="subscribe-modal-header">
              <span className="subscribe-modal-badge">FOR SCHOOLS</span>
              <h2>Unlock the Full Kids Zone</h2>
              <p>
                Get access to 48 interactive lessons, quizzes, and labs for your
                students. Designed for ages 7-16.
              </p>
            </div>

            <div className="subscribe-features">
              <div className="subscribe-feature">
                <span>&#128218;</span>
                <span>48 Interactive Lessons</span>
              </div>
              <div className="subscribe-feature">
                <span>&#9989;</span>
                <span>Quizzes & Assessments</span>
              </div>
              <div className="subscribe-feature">
                <span>&#128202;</span>
                <span>Student Progress Tracking</span>
              </div>
              <div className="subscribe-feature">
                <span>&#127942;</span>
                <span>Completion Certificates</span>
              </div>
            </div>

            <form className="subscribe-form" onSubmit={handleSubmit}>
              <div className="subscribe-field">
                <label>School / Institution Name</label>
                <input
                  type="text"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleChange}
                  placeholder="e.g. La Salle School Barcelona"
                  required
                />
              </div>
              <div className="subscribe-field">
                <label>Contact Person</label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="Full name"
                  required
                />
              </div>
              <div className="subscribe-field">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="contact@school.edu"
                  required
                />
              </div>
              <div className="subscribe-field">
                <label>Number of Students</label>
                <select
                  name="students"
                  value={formData.students}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select range</option>
                  <option value="1-50">1 - 50 students</option>
                  <option value="51-200">51 - 200 students</option>
                  <option value="201-500">201 - 500 students</option>
                  <option value="500+">500+ students</option>
                </select>
              </div>
              <button type="submit" className="subscribe-submit-btn">
                Request Access
              </button>
              <p className="subscribe-note">
                Free 30-day trial included. No credit card required.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default SubscribeModal;
