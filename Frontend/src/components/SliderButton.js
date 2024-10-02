import React from 'react';
import './SliderButton.css'; // Create a CSS file for styling

const SliderButton = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="slider-container" onClick={toggleDarkMode}>
      <span className="label">Light</span>
      <div className="slider">
        <div className={`slider-thumb ${isDarkMode ? 'dark' : ''}`}></div>
      </div>
      <span className="label">Dark</span>
    </div>
  );
};

export default SliderButton;
