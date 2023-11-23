import React from "react";
import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import DashBoard from "./Pages/Dashboard";
import Tracking from "./Pages/Dashboard/tracking";
import { useLayoutEffect } from "react"
import Email from "./components/email";

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/tracking/:documentId" element={<Tracking />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/email" element={<Email/>} />
    </Routes>
  );
}

export default App;
