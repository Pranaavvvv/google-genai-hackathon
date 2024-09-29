import React, { useState } from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Section3 from './components/Section3';
import Working from './components/Working';
import LoginModal from './components/LoginModal';
import MentalWellnessForm from './components/MentalWellnessForm';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLoginSuccess = () => {
    // Logic for what happens after a successful login
    console.log('Login successful');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>NIRVANA AI</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#section3">Features</a></li>
            <li><a href="#working">Working</a></li>
            <li><a href="#contact">Contact us</a></li>
          </ul>
        </nav>
      </header>

      <HeroSection openModal={openModal} />
      <Section3 id="section3" />
      <FeaturesSection />
      <Working id="working" />
      <MentalWellnessForm /> 

      {isModalOpen && <LoginModal onClose={closeModal} onLoginSuccess={handleLoginSuccess} />}
    </div>
  );
}

export default App;
