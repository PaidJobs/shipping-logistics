import "./index.css";
import LoginAdmin from "./pages/login/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/admin/dashboard";
import Tracking from "./pages/admin/Tracking";
import Update from "./pages/admin/Update";
import Summary from "./pages/admin/user_summary";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginAdmin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/update" element={<Update/>} />
        <Route path="/summary/:documentId" element={<Summary/>} />
      </Routes>
    </Router>
  );
}

export default App;
