import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="navbar-logo">
          <span className="logo-icon">&#9829;</span>
          <span className="logo-text">Kidney Connect</span>
        </NavLink>
      </div>
      <div className="navbar-links">
        <NavLink to="/blog" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Blog
        </NavLink>
        <NavLink to="/funds" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Funds
        </NavLink>
        <NavLink to="/advice" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Advice
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Profile
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
