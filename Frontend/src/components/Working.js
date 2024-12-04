import React from 'react';
import './Working.css';

const Working = () => {
  return (
    <div className="container1">
      <h2 className="title1">How Nirvana Works</h2>
      <div className="steps-container">
        <div className="step">
          <div className="step-number">01</div>
          <h3 className="step-title">Start Your Journey with Us</h3>
          <p className="step-description"></p>
        </div>
        <div className="step">
          <div className="step-number">02</div>
          <h3 className="step-title">Engage in Friendly Chats</h3>
          <p className="step-description">Discover tips and resources.</p>
        </div>
        <div className="step">
          <div className="step-number">03</div>
          <h3 className="step-title">Your Mental Health Partner</h3>
          <p className="step-description">Nirvana is here, providing the support and guidance you need.</p>
        </div>
      </div>
    </div>
  );
};

export default Working;
