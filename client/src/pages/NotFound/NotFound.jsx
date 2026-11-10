
import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/ui/Button";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-page">

      <h1>404</h1>

      <h2>Page Not Found</h2>

      <p>
        The page you are looking for does not exist.
      </p>

      <Link to="/dashboard">
        <Button>
          Go to Dashboard
        </Button>
      </Link>

      <Button
        variant="secondary"
        onClick={() => navigate(-1)}
      >
        Go Back
      </Button>

    </div>
  );
}

export default NotFound;
