import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Abt from "./components/Abt";
import Servicess from "./components/Servicess";
import Testimonials from "./components/Testimonials";
import Career from "./components/Career";
import ContactUs from "./components/ContactUs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/abt" element={<Abt />} />
        <Route path="/servicess" element={<Servicess />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
