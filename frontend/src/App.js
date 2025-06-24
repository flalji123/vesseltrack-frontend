
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import VesselMap from "./pages/VesselMap";
import Search from "./pages/Search";
import Cargo from "./pages/Cargo";
import Uploads from "./pages/Uploads";

function App() {
  return (
    <Router>
      <div className="app" style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ padding: "2rem", flex: 1 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/vessel-map" element={<VesselMap />} />
            <Route path="/search" element={<Search />} />
            <Route path="/cargo" element={<Cargo />} />
            <Route path="/uploads" element={<Uploads />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
