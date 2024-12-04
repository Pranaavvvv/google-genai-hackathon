import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Importing Link for navigation
import "./App.css";
import HeroSection from "./components/HeroSection";
import Main from "./components/Main"; // Import Main.js
import LoginModal from "./components/LoginModal"; // Import LoginModal
import FeaturesSection from "./components/FeaturesSection"; // Assuming you have this section
import Working from "./components/Working"; // Assuming you have this section
import MentalWellnessForm from "./components/MentalWellnessForm"; // Assuming you have this section
import { assets } from "./assets/assets"

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLoginSuccess = () => {
    console.log("Login successful");
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <div className={isDarkMode ? "dark-mode" : ""}>
        {/* Toggle dark mode class */}
        <header className="App-header">
          <div className="logo-container">
            <img 
              src={assets.nirvana_logo} // Use the logo from assets
              alt="Nirvana Logo" 
              style={{ width: '40px', marginRight: '8px' }} // Adjust size and margin as needed
            />
            <h1>NIRVANA AI</h1>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/main">Nirvana</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
          {/* <SliderButton isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} /> */}
        </header>
        <Routes>
          {/* Home Page Route */}
          <Route
            path="/"
            element={
              <>
                <HeroSection openModal={openModal} />
                <FeaturesSection />
                <Working />
                <MentalWellnessForm />
              </>
            }
          />
          {/* Main Page Route (Chatbot) */}
          <Route path="/main" element={<Main />} /> {/* Chatbot only renders here */}
        </Routes>
        {isModalOpen && (
          <LoginModal
            onClose={closeModal}
            onLoginSuccess={handleLoginSuccess}
          />
        )} {/* Render LoginModal only if isModalOpen is true */}
      </div>
    </Router>
  );
}

export default App;
