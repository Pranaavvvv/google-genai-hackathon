import React from 'react';
import './MentalWellnessForm.css'; 

const MentalWellnessForm = () => {
  return (
    <div className="form-container4">
      <h1 className="title4">Your Mental Wellness Starts Here</h1>
      <p className="description4">
        Join a community of students dedicated to emotional well-being with the help of AI support. 
        Let's build your resilience together!
      </p>

      <form className="wellness-form4">
        <label className="form-label4" htmlFor="name">Full name</label>
        <input type="text" id="name" placeholder="First Name" className="form-input4" />

        <label className="form-label4" htmlFor="email">Email address</label>
        <input type="email" id="email" placeholder="email@example.com" className="form-input4" />
        
        {/* Corrected type */}
        <button type="submit" className="submit-button6">Submit Button</button>
      </form>
    </div>
  );
};

export default MentalWellnessForm;
