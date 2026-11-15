
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Members from "./pages/Members/Members";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import Trainer from "./pages/Trainer/Trainers";

import PageTitle from "./components/ui/PageTitle";



function Plans() {
  return (
    <PageTitle
      title="Membership Plans"
      description="Manage gym membership plans."
    />
  );
}

function Attendance() {
  return (
    <PageTitle
      title="Attendance"
      description="Manage gym attendance."
    />
  );
}

function Payments() {
  return (
    <PageTitle
      title="Payments"
      description="Manage gym payments."
    />
  );
}

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/members"
            element={<Members />}
          />

          <Route
            path="/trainers"
            element={<Trainer />}
          />

          <Route
            path="/plans"
            element={<Plans />}
          />

          <Route
            path="/attendance"
            element={<Attendance />}
          />

          <Route
            path="/payments"
            element={<Payments />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="/login"
            element={<Login />}
          />
          <Route
          path="/register"
          element={<Register />}
          />

        </Route>

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;