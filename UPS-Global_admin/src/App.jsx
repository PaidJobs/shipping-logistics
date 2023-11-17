import "./index.css";
import LoginAdmin from "./pages/login/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/admin/dashboard";
import Tracking from "./pages/admin/Tracking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginAdmin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tracking" element={<Tracking />} />
      </Routes>
    </Router>
  );
}

export default App;
