
import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";

import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="main-layout">

      <Navbar />

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="main-footer">
        <p>
          © 2026 GYMFLOW. Fitness Management System.
        </p>
      </footer>

    </div>
  );
}

export default MainLayout;
