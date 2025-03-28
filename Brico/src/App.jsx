import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import Sidebar from "./assets/Manue";
import Bricks_calculation from "./tools/Bricks-calculation";
import Home from "./assets/Home";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Sidebar toggle function
  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar when a link is clicked
  const handleLinkClick = () => {
    setSidebarOpen(false);
  };

  return (
    <Router>
      <main className="container">
        {/* Header */}
        <header>
          <Sidebar onToggle={handleSidebarToggle} />
          <h1>
            <NavLink className={"name"} to="/" onClick={handleLinkClick}>
              Brico
            </NavLink>
          </h1>
        </header>

        {/* Sidebar */}
        {isSidebarOpen && (
          <div className="side_bar">
            <h1 className="close-btn" onClick={handleSidebarToggle}>
              ❌
            </h1>
            <br />
            <h1 align="center">Tools</h1>
            <br />
            <nav>
              <ul>
                <li>
                  <NavLink
                    className="links"
                    to="/bricks"
                    onClick={handleLinkClick}
                  >
                    Bricks Calculation 🧱
                  </NavLink>
                </li>
                <br />
              </ul>
            </nav>
          </div>
        )}

        {/* Dynamic Page Content */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bricks" element={<Bricks_calculation />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
