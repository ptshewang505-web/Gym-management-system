
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("Connecting...");

  useEffect(() => {
    axios.get("/api/health")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch(() => {
        setMessage("Backend connection failed");
      });
  }, []);

  return (
    <div>
      <h1>Gym Management System</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
