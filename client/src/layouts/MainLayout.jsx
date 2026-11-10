
import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";

function MainLayout() {
  return (
    <div className="main-layout">
      <Navbar />

      <div className="app-body">
        <Sidebar />

        <main className="content-area glass-panel">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default MainLayout;
