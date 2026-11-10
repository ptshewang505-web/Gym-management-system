
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar glass-panel">
      <p className="sidebar-label">WORKSPACE</p>

      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `sidebar-item ${isActive ? "active" : ""}`
        }
      >
        Dashboard
      </NavLink>

      <div className="sidebar-item">
        Members
      </div>

      <div className="sidebar-item">
        Trainers
      </div>

      <div className="sidebar-item">
        Membership Plans
      </div>

      <div className="sidebar-item">
        Attendance
      </div>

      <div className="sidebar-item">
        Payments
      </div>
    </aside>
  );
}

export default Sidebar;
