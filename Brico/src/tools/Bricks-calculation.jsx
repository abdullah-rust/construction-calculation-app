import { useState } from "react";
import "./index.css";

export default function BricksCalculation() {
  const [height, setHeight] = useState(12);
  const [length, setLength] = useState(30);
  const [thickness, setThickness] = useState(9);
  const brickSize = { length: 9, width: 4, thickness: 3 }; // Brick dimensions in inches

  const calculateBricks = () => {
    const wallVolume = height * 12 * length * 12 * thickness;
    const brickVolume =
      brickSize.length * brickSize.width * brickSize.thickness;
    return Math.floor(wallVolume / brickVolume);
  };

  return (
    <div className="bricks">
      <h1 align="center">Bricks Calculation 🧱</h1>

      <div className="inputs">
        <h2 align="center"> Wall Height (feet) </h2>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <br />
        <h2 align="center">Wall Length (feet) </h2>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <br />
        <h2 align="center"> Wall Thickness (inches) </h2>
        <input
          type="number"
          value={thickness}
          onChange={(e) => setThickness(e.target.value)}
        />
        <br />
        <br />
        <button onClick={calculateBricks}>Calculate</button>
        <br />
        <h2>Total Bricks Required </h2>
        <br />
        <h1>{calculateBricks()}</h1>
      </div>
    </div>
  );
}
