
import { useState } from "react";

import PageTitle from "../../components/ui/PageTitle";
import Welcome from "../../components/ui/Welcome";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

import "./Dashboard.css";

function Dashboard() {
  const [members, setMembers] = useState(120);
  const [trainers, setTrainers] = useState(8);
  const [attendance, setAttendance] = useState(0);
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="dashboard-page">

      <PageTitle
        title="Dashboard"
        description="Manage your gym activities."
      />

      <Welcome
        name="Admin"
        role="Administrator"
      />

      {/* Dashboard statistics */}
      <div className="dashboard-grid">

        <Card
          title="Total Members"
          value={members}
          description="Registered gym members"
        >
          <Button
            onClick={() => setMembers((prev) => prev + 1)}
          >
            Add Member
          </Button>
        </Card>

        <Card
          title="Total Trainers"
          value={trainers}
          description="Available gym trainers"
        >
          <Button
            variant="secondary"
            onClick={() => setTrainers((prev) => prev + 1)}
          >
            Add Trainer
          </Button>
        </Card>

        <Card
          title="Today's Attendance"
          value={attendance}
          description="Members checked in today"
        >
          <Button
            onClick={() => setAttendance((prev) => prev + 1)}
          >
            Mark Attendance
          </Button>

          <Button
            variant="secondary"
            onClick={() => setAttendance(0)}
          >
            Reset
          </Button>
        </Card>

      </div>

      {/* Conditional rendering */}
      <div className="dashboard-status">

        <h3>
          {loggedIn
            ? "Welcome, Admin!"
            : "Please Login"}
        </h3>

        <Button
          variant="secondary"
          onClick={() => setLoggedIn((prev) => !prev)}
        >
          {loggedIn ? "Logout" : "Login"}
        </Button>

      </div>

    </div>
  );
}

export default Dashboard;
