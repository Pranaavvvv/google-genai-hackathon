import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Importing Link for navigation
import "./App.css";
import HeroSection from "./components/HeroSection";
import Main from "./components/Main"; // Import Main.js
import LoginModal from "./components/LoginModal"; // Import LoginModal
import Section3 from "./components/Section3"; // Assuming you have this section
import FeaturesSection from "./components/FeaturesSection"; // Assuming you have this section
import Working from "./components/Working"; // Assuming you have this section
import MentalWellnessForm from "./components/MentalWellnessForm"; // Assuming you have this section
// import SliderButton from './components/SliderButton'; // Import the slider button
// import './global.css'

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
        {" "}
        {/* Toggle dark mode class */}
        <header className="App-header">
          <h1>NIRVANA AI</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/main">Nirvana</Link>
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
                <Section3 id="section3" />
                <FeaturesSection />
                <Working />
                <MentalWellnessForm />
              </>
            }
          />
          {/* Main Page Route (Chatbot) */}
          <Route path="/main" element={<Main />} />{" "}
          {/* Chatbot only renders here */}
        </Routes>
        {isModalOpen && (
          <LoginModal
            onClose={closeModal}
            onLoginSuccess={handleLoginSuccess}
          />
        )}{" "}
        {/* Render LoginModal only if isModalOpen is true */}
      </div>
    </Router>
  );
}

export default App;
