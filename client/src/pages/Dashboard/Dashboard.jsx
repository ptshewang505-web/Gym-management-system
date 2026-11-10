
import Card from "../../components/common/Card";

function Dashboard() {
  return (
    <section className="page-content">
      <p className="eyebrow">OVERVIEW</p>

      <h1>Dashboard</h1>

      <p className="page-description">
        Monitor your gym's daily activities.
      </p>

      <div className="dashboard-grid">
        <Card title="Total Members">
          <h2>120</h2>
          <p>Registered gym members</p>
        </Card>

        <Card title="Active Trainers">
          <h2>08</h2>
          <p>Available fitness trainers</p>
        </Card>

        <Card title="Membership Plans">
          <h2>05</h2>
          <p>Available membership plans</p>
        </Card>

        <Card title="Attendance">
          <h2>32</h2>
          <p>Today's attendance records</p>
        </Card>
      </div>
    </section>
  );
}

export default Dashboard;
