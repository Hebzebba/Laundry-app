import React from "react";
import Home from "./pages/Home/Home";
import Header from "./components/header/Header";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Laundry from "./pages/Laundry/Laundry";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
function App() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/laundry" element={<Laundry />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
