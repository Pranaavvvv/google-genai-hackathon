import React from "react";
import "./FeaturesSection.css"; // Assume external CSS for styling
import featuresImage from "./image1.png"; // Replace with your image path
import image1 from "./image.png"; // This is the top image you want to add

function FeaturesSection() {
  return (
    <section className="features-section">
      {/* Top Image */}
      <div className="top-image-container">
        <img src={image1} alt="Top Section Image" className="top-image" />
      </div>

      {/* Main Features Content */}
      <div className="features-container">
        {/* Left side: Image */}
        <div className="features-image-container">
          <img
            src={featuresImage}
            alt="App Screenshot"
            className="features-image"
          />
        </div>

        {/* Right side: Text content */}
        <div className="features-text-container">
          <h2 className="features-heading">
            Your privacy is <span className="key-highlight">key</span>
          </h2>
          <p className="features-description">
            No registration is required to use our app. This means that we have
            no personal data whatsoever about you. Your data belongs to you and
            only to you.
          </p>
          <p className="features-description">
            We are not exposing it to third parties. Your data serves to support
            you and is used to build better tools for everyone who wants to
            manage anxiety in the future.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
