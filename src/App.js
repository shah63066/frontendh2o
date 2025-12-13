import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/navbar/navbar';

// Pages
import Home from './pages/home';
import AdminDashboard from './pages/AdminDashboard'; // ✅ ADD THIS


function App() {
  const [isAppLoading, setIsAppLoading] = useState(true);

  const allImages = [
    "/images/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero3.jpg",
    "/images/hero4.jpg",

    "/images/service-card/mskincare.jpg",
    "/images/service-card/polishing.jpg",
    "/images/service-card/mhaircare.jpg",
    "/images/service-card/massage.jpg",
    "/images/service-card/mmakeup.jpg",
    "/images/service-card/mwedding.jpg",
    "/images/service-card/skincare.jpg",
    "/images/service-card/haircare.jpg",
    "/images/service-card/bodyspa.jpg",
    "/images/service-card/nailsalon.jpg",
    "/images/service-card/makeup.jpg",
    "/images/service-card/wedding.jpg",

    "/images/form.jpg",
    "/images/about.jpg",
  ];

  useEffect(() => {
    allImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isAppLoading) {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "28px",
        fontWeight: "bold"
      }}>
        <h2>H<sub>2</sub>O The Men's Salon</h2>
      </div>
    );
  }

  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* ✅ ADMIN ROUTE */}
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
