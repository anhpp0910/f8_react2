import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../App.css";
import Home from "../pages/Home";
import News from "../pages/News";
import Contact from "../pages/Contact";

export default function App18() {
  return (
    <div className="App">
      <nav>
        <ul style={{ listStyle: "none" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}
