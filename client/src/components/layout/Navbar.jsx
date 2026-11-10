
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar glass-panel">
      <NavLink
        to="/"
        className="brand"
      >
        <span className="brand-mark">G</span>

        <span>
          GYM<span className="lime-text">FLOW</span>
        </span>
      </NavLink>

      <div className="navbar-links">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/dashboard">
          Dashboard
        </NavLink>

        <NavLink to="/profile">
          Profile
        </NavLink>

        <NavLink to="/login">
          Login
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
