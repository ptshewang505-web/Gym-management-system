
import Button from "../../components/common/Button";

function Home() {
  return (
    <section className="page-content">
      <p className="eyebrow">FITNESS MANAGEMENT</p>

      <h1>
        Build a stronger
        <span className="lime-text"> community.</span>
      </h1>

      <p className="page-description">
        Manage gym members, trainers, membership plans,
        attendance and payments in one place.
      </p>

      <Button>Get Started</Button>
    </section>
  );
}

export default Home;
