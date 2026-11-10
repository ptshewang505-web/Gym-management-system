
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";
import Dashboard from "../pages/Dashboard/Dashboard";

function MainLayout() {
  return (
    <div className="main-layout">
      <Navbar />

      <div className="app-body">
        <Sidebar />
        

        <main className="content-area glass-panel">
          <Dashboard />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default MainLayout;
