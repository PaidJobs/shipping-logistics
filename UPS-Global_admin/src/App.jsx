import "./index.css";
import LoginAdmin from "./pages/login/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/admin/dashboard";
import Tracking from "./pages/admin/Tracking";
import Update from "./pages/admin/Update";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginAdmin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/update" element={<Update/>} />
      </Routes>
    </Router>
  );
}

export default App;
