import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Breakout from "./components/games/breakout";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breakout" element={<Breakout />} />
      </Routes>
    </div>
  );
};

export default App;
