
import React from 'react';
import featuresImage from './features.jpeg'; 

function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="features-section1">
      <h3 className="title">Empowerment Through Empathetic Interaction</h3>
      <p className="description">
        At Nirvana, we merge advanced AI with emotional intelligence to create a unique experience for students. Our chatbot is here to listen, understand, and guide you through challenges, ensuring you have a brighter tomorrow.
      </p>
      </div>
      <div className="features">
      <img 
        src={featuresImage} 
        alt="Features of MindMate" 
        className="features-image" 
      />
      </div>
    </section>
  );
}

export default FeaturesSection;



