import React from "react";
import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DashBoard from "./Pages/Dashboard";
import Tracking from "./Pages/Dashboard/tracking";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  );
}

export default App;
