import { useState } from "react";
import "./index.css";

function Sidebar({ onToggle }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev); // Toggle state
    if (onToggle) onToggle(); // Call parent function if provided
  };

  return (
    <div>
      <button className="menu-btn" onClick={handleToggle}>
        ☰
      </button>
    </div>
  );
}

export default Sidebar;
