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
import { useState } from "react";
import { useLayoutEffect } from "react";

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  const [userValue, setUserValue] = useState("");

  const handleUserValueChange = (newValue) => {
    setUserValue(newValue);
  };

  return (
      <Routes>
        <Route
          exact
          path="/"
          element={<Home onValueChange={handleUserValueChange} />}
        />
        <Route
          path="/tracking/:userValue"
          element={<Tracking userValue={userValue} />}
        />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
  );
}

export default App;
