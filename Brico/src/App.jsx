import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./main/Home";
import BricksCalculation from "./main/tools/BricksCalculation";
import SlabCalculation from "./main/tools/SlabCalculation";
import CementPlaster from "./main/tools/CementPlaster";
import TileCalculation from "./main/tools/TileCalculation";
import MarbleCalculation from "./main/tools/MarbleCalculation";
import PaintCalculation from "./main/tools/PaintCalculation";
import CeilingCalculation from "./main/tools/CeilingCalculation";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/br" element={<BricksCalculation />} />
        <Route path="/sr" element={<SlabCalculation />} />
        <Route path="/cr" element={<CementPlaster />} />
        <Route path="/tc" element={<TileCalculation />} />
        <Route path="/mc" element={<MarbleCalculation />} />
        <Route path="/pc" element={<PaintCalculation />} />
        <Route path="/cc" element={<CeilingCalculation />} />
      </Routes>
    </>
  );
}

export default App;
