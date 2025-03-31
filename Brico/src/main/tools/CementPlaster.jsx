import React, { useState } from "react";
import Header from "../module/Header";
import SlidBar from "../module/SlideBar";

export default function CementPlaster() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="home" onClick={() => setSidebarOpen(false)}>
      <Header />
      <h1>cement plaster</h1>
      <SlidBar sidebarOpen={sidebarOpen} onToggleSidebar={toggleSidebar} />
    </div>
  );
}
