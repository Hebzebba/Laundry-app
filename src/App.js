import React from "react";
import Home from "./pages/Home/Home";
import Header from "./components/header/Header";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Laundry from "./pages/Laundry/Laundry";
import About from "./pages/About/About";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/laundry" element={<Laundry />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
