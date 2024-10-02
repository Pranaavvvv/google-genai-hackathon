import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './HeroSection.css';

const HeroSection = ({ openModal }) => {
  const navigate = useNavigate();  // Initialize navigate

  const handleGetStarted = () => {
    navigate('/main');  // Navigate to the Main.js component (chatbot)
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>Support Your Mental Health Today</h2>
        <p>
          Discover Nirvana, your AI-powered virtual assistant for mental health. Experience compassionate conversations tailored to your needs, helping students navigate emotional challenges with care and understanding.
        </p>
        <button onClick={handleGetStarted}>Get Started</button>  {/* Redirect to /main */}
      </div>

      <div className="hero-image">
        <img src="hero-image.jpg" alt="Support your mental health" />
      </div>
    </section>
  );
};

export default HeroSection;