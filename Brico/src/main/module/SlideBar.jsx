import React from "react";
import "./index.css";
import logo from "../../assets/manue.png";

import { Link } from "react-router-dom";

export default function SlidBar({ sidebarOpen, onToggleSidebar }) {
  // Ab state parent se aa raha hai
  return (
    <div className="app-container">
      <img
        src={logo}
        alt="menu"
        className="toggle-btn"
        onClick={(e) => {
          e.stopPropagation(); // Parent div ka click event rokne ke liye
          onToggleSidebar();
        }}
      />

      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/br">Bricks</Link>
          </li>
          <li>
            <Link to="/sr">Slab</Link>
          </li>
          <li>
            <Link to="/cr">Cement plaster</Link>
          </li>
          <li>
            <Link to="/tc">Tiles calculation</Link>
          </li>
          <li>
            <Link to="/mc">Marble calculation</Link>
          </li>
          <li>
            <Link to="/pc">Paint calculation</Link>
          </li>
          <li>
            <Link to="/cc">Ceiling calculation</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
