import React, { useState } from "react";
import Header from "./module/Header";
import SlidBar from "./module/SlideBar";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="home" onClick={() => setSidebarOpen(false)}>
      <Header />
      <h1>home</h1>
      <SlidBar sidebarOpen={sidebarOpen} onToggleSidebar={toggleSidebar} />
    </div>
  );
}
