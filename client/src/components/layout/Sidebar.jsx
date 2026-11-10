
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Dumbbell,
  CreditCard,
  CalendarCheck,
  User,
  X,
} from "lucide-react";

import "./Sidebar.css";

function Sidebar({ isOpen, onClose }) {
  const links = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Members", path: "/members", icon: Users },
    { name: "Trainers", path: "/trainers", icon: Dumbbell },
    { name: "Plans", path: "/plans", icon: CreditCard },
    { name: "Attendance", path: "/attendance", icon: CalendarCheck },
    { name: "Profile", path: "/profile", icon: User },
  ];

  return (
    <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
      <div className="sidebar-header">
        <h2>GYMFLOW</h2>

        <button
          className="sidebar-close"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          <X size={22} />
        </button>
      </div>

      <nav className="sidebar-nav">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={onClose}
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
            >
              <Icon size={20} />
              <span>{link.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
