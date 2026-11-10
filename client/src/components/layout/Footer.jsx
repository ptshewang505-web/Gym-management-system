
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} GymFlow.
        All rights reserved.
      </p>

      <p>Gym Management System</p>
    </footer>
  );
}

export default Footer;
