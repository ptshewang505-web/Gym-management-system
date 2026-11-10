
function Sidebar() {
  return (
    <aside className="sidebar glass-panel">
      <p className="sidebar-label">WORKSPACE</p>

      <div className="sidebar-item active">
        Dashboard
      </div>

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
