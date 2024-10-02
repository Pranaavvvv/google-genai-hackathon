import React, { useState } from 'react';
import './Modal.css';

function LoginModal({ onClose, onLoginSuccess }) {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const switchToSignup = () => setIsLoginMode(false);
  const switchToLogin = () => setIsLoginMode(true);

  const handleGoogleLogin = () => {
    window.open('http://localhost:5555/auth/google', '_self'); // Redirect to Google login
  };

  const handleLogin = () => {
    console.log("Login successful");
    onLoginSuccess();
  };

  return (
    <div className="modal-overlay">
      <div className="form_container show"> 
        <i className="uil uil-times form_close" onClick={onClose}></i>
        
        {isLoginMode ? (
          <div className="form login_form">
            <h2>Login</h2>
            <div className="input_box">
              <input type="email" placeholder="Enter your email" required />
              <i className="uil uil-envelope-alt email"></i>
            </div>
            <div className="input_box">
              <input type="password" placeholder="Enter your password" required />
              <i className="uil uil-lock password"></i>
            </div>
            <button className="button10" onClick={handleLogin}>Login Now</button>
            <button className="button-google" onClick={handleGoogleLogin}>
              Login with Google
            </button>
            <div className="login_signup">
              Don't have an account? <button onClick={switchToSignup} className="link-button1">Signup</button>
            </div>
          </div>
        ) : (
          <div className="form signup_form show"> 
            <h2>Signup</h2>
            <div className="input_box">
              <input type="text" placeholder="Enter your name" required />
              <i className="uil uil-user"></i>
            </div>
            <div className="input_box">
              <input type="email" placeholder="Enter your email" required />
              <i className="uil uil-envelope-alt email"></i>
            </div>
            <div className="input_box">
              <input type="password" placeholder="Create password" required />
              <i className="uil uil-lock password"></i>
            </div>
            <button className="button20" onClick={handleLogin}>Signup Now</button>
            <div className="login_signup">
              Already have an account? <button onClick={switchToLogin} className="link-button2">Login</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginModal;
