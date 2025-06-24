
import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={{ width: "200px", background: "#1b1f2b", color: "#fff", height: "100vh", padding: "1rem" }}>
      <h2>VesselTrack AI</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link style={{ color: "white" }} to="/">Dashboard</Link></li>
        <li><Link style={{ color: "white" }} to="/vessel-map">Vessel Map</Link></li>
        <li><Link style={{ color: "white" }} to="/search">Search</Link></li>
        <li><Link style={{ color: "white" }} to="/cargo">Cargo</Link></li>
        <li><Link style={{ color: "white" }} to="/uploads">Uploads</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
