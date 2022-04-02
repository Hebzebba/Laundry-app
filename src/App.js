import React from "react";
import Home from "./pages/Home/Home";
import Header from "./components/header/Header";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Laundry from "./pages/Laundry/Laundry";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import SignUp from "./pages/CreacteAccount/SignUp";
import DetailsPage from "./pages/Details/Details";
import RequireAuth from "./components/auth/RequireAuth";
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
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/details"
            element={
              <RequireAuth>
                <DetailsPage />
              </RequireAuth>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
