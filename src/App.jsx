import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ModernFooter from "./components/ModernFooter";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* This ensures top scroll on every page */}

      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <ModernFooter />
    </Router>
  );
};

export default App;
