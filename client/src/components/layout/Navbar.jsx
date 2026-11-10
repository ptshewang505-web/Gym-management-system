
import { useState } from "react";
import { Menu, X, UserRound } from "lucide-react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      {/* Hamburger: tablet/mobile only */}
      <button
        className="hamburger-btn"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? (
          <X size={24} />
        ) : (
          <Menu size={24} />
        )}
      </button>

      {/* Logo */}
      <NavLink
        to="/"
        className="navbar-brand"
        onClick={closeMenu}
      >
        GYMFLOW
      </NavLink>

      {/* Navigation links */}
      <nav
        className={`navbar-links ${
          menuOpen ? "navbar-open" : ""
        }`}
      >

        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/dashboard" onClick={closeMenu}>
          Dashboard
        </NavLink>

        <NavLink to="/members" onClick={closeMenu}>
          Members
        </NavLink>

        <NavLink to="/trainers" onClick={closeMenu}>
          Trainers
        </NavLink>

        <NavLink to="/plans" onClick={closeMenu}>
          Plans
        </NavLink>

        <NavLink to="/attendance" onClick={closeMenu}>
          Attendance
        </NavLink>

        <NavLink to="/payments" onClick={closeMenu}>
          Payments
        </NavLink>

        <NavLink to="/login" onClick={closeMenu}>
          Login
        </NavLink>

        <NavLink
          to="/profile"
          className="profile-link"
          onClick={closeMenu}
        >
          <UserRound size={18} />
          Profile
        </NavLink>

      </nav>

    </header>
  );
}

export default Navbar;
