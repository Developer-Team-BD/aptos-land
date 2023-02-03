import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Foxysend from "./Pages/Foxysend/Foxysend";
import Home from "./Pages/Home/Home";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foxysend" element={<Foxysend />} />
      </Routes>
    </>
  );
};

export default App;
