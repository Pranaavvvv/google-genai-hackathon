import React, { useState } from 'react';
import LoginModal from './LoginModal';  

import './HeroSection.css';  

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>Support Your Mental Health Today</h2>
        <p>
          Discover Nirvana, your AI-powered virtual assistant for mental health. Experience compassionate conversations tailored to your needs, helping students navigate emotional challenges with care and understanding.
        </p>
        <button onClick={openModal}>Get Started</button> 
      </div>

      <div className="hero-image">
        <img src="hero-image.jpg" alt="Support your mental health" />
      </div>

      {showModal && (
        <LoginModal onClose={closeModal} onLoginSuccess={closeModal} />
      )}
    </section>
  );
}

export default HeroSection;
