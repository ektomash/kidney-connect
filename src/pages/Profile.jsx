import { userProfile } from "../data/mockData";
import "./Profile.css";

function Profile() {
  const { name, age, email, role, avatar, joinDate, donorStatus, bio, stats, badges } =
    userProfile;

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-cover"></div>
        <div className="profile-info">
          <img src={avatar} alt={name} className="profile-avatar" />
          <div className="profile-details">
            <h1 className="profile-name">{name}</h1>
            <span className="profile-role">{role}</span>
            <p className="profile-bio">{bio}</p>
            <div className="profile-meta">
              <span>Age: {age}</span>
              <span>&middot;</span>
              <span>{email}</span>
              <span>&middot;</span>
              <span>
                Joined{" "}
                {new Date(joinDate).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
          <div className="donor-status">
            <span className="donor-badge">
              &#9989; Organ Donor: {donorStatus}
            </span>
          </div>
        </div>
      </div>

      <div className="profile-content">
        <section className="profile-stats">
          <h2>Your Impact</h2>
          <div className="stats-row">
            <div className="stat-item">
              <span className="stat-value">{stats.storiesRead}</span>
              <span className="stat-name">Stories Read</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{stats.donations}</span>
              <span className="stat-name">Donations Made</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">${stats.totalDonated}</span>
              <span className="stat-name">Total Donated</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{stats.eventsAttended}</span>
              <span className="stat-name">Events Attended</span>
            </div>
          </div>
        </section>

        <section className="profile-badges">
          <h2>Badges Earned</h2>
          <div className="badges-grid">
            {badges.map((badge, index) => (
              <div key={index} className="badge-card">
                <div className="badge-icon">&#127942;</div>
                <h4>{badge.name}</h4>
                <p>{badge.description}</p>
              </div>
            ))}
            <div className="badge-card badge-locked">
              <div className="badge-icon">&#128274;</div>
              <h4>Community Leader</h4>
              <p>Share 5+ stories to unlock</p>
            </div>
            <div className="badge-card badge-locked">
              <div className="badge-icon">&#128274;</div>
              <h4>Super Supporter</h4>
              <p>Donate to 10+ campaigns</p>
            </div>
          </div>
        </section>

        <section className="profile-settings">
          <h2>Account Settings</h2>
          <div className="settings-form">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" defaultValue={name} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" defaultValue={email} />
            </div>
            <div className="form-group">
              <label>Bio</label>
              <textarea defaultValue={bio} rows={3} />
            </div>
            <div className="form-group">
              <label>Organ Donor Status</label>
              <select defaultValue={donorStatus}>
                <option value="Registered">Registered</option>
                <option value="Interested">Interested</option>
                <option value="Not registered">Not registered</option>
              </select>
            </div>
            <div className="form-actions">
              <button className="save-btn">Save Changes</button>
              <button className="cancel-btn">Cancel</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Profile;
