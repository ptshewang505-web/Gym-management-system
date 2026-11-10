
import "./Welcome.css";

function Welcome({
  name,
  role,
}) {
  return (
    <div className="welcome-card">
      <div>
        <h2>Welcome, {name}!</h2>
        <p>Your role: {role}</p>
      </div>
    </div>
  );
}

export default Welcome;
