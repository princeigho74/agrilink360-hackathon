import { useState } from "react";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {!started ? <Landing onStart={() => setStarted(true)} /> : <Dashboard />}
    </div>
  );
}
