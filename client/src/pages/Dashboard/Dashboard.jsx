
import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">
      <PageTitle
        title="Dashboard"
        subtitle="Manage your gym activities"
      />

      <div className="dashboard-cards">
        <Card
          title="Total Members"
          description="Registered gym members"
        >
          <h2>120</h2>
          <Button onClick={() => alert("Members clicked")}>
            View Members
          </Button>
        </Card>

        <Card
          title="Active Trainers"
          description="Available gym trainers"
        >
          <h2>8</h2>
          <Button onClick={() => alert("Trainers clicked")}>
            View Trainers
          </Button>
        </Card>

        <Card
          title="Membership Plans"
          description="Available membership options"
        >
          <h2>5</h2>
          <Button onClick={() => alert("Plans clicked")}>
            View Plans
          </Button>
        </Card>

        <Card
          title="Attendance"
          description="Manage daily gym attendance"
        >
          <h2>85%</h2>
          <Button onClick={() => alert("Attendance clicked")}>
            View Attendance
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
