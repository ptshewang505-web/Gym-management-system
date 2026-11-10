
import { Link } from "react-router-dom";

import PageTitle from "../../components/ui/PageTitle";
import Welcome from "../../components/ui/Welcome";
import Button from "../../components/ui/Button";

function Home() {
  return (
    <div className="home-page">

      <PageTitle
        title="GYMFLOW"
        description="Your complete gym management solution."
      />

      <Welcome
        name="Admin"
        role="Administrator"
      />

      <p>
        Manage gym members, trainers, attendance,
        membership plans, and payments from one place.
      </p>

      <Link to="/dashboard">
        <Button>
          Go to Dashboard
        </Button>
      </Link>

    </div>
  );
}

export default Home;
