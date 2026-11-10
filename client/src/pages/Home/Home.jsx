
import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <PageTitle
        title="Gym Management System"
        subtitle="Manage members, trainers, attendance, and payments."
      />

      <Card
        title="Welcome to GymFlow"
        description="A centralized platform for managing gym operations."
      >
        <Button onClick={() => navigate("/dashboard")}>
          Go to Dashboard
        </Button>
      </Card>
    </div>
  );
}

export default Home;
