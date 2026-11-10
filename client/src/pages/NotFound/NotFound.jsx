
import { Link, useNavigate } from "react-router-dom";
import { Home, ArrowLeft, SearchX } from "lucide-react";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-page">
      <div className="notfound-card">
        <div className="notfound-icon">
          <SearchX size={42} />
        </div>

        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          Oops! The page you're looking for doesn't exist
          or may have been moved.
        </p>

        <div className="notfound-actions">
          <Link to="/dashboard" className="notfound-home-btn">
            <Home size={18} />
            Go to Dashboard
          </Link>

          <button
            className="notfound-back-btn"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        <div className="notfound-footer">
          <span>GYMFLOW</span>
          <p>Fitness Management System</p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
