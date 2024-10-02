import React, { useState } from "react";
import axios from "axios";
import Typewriter from "react-typewriter";
import "./Main.css";
import { assets } from "../assets/assets";

const Main = () => {
  const [moodValue, setMoodValue] = useState(0);
  const [userMessage, setUserMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleMoodChange = (e) => {
    const newValue = parseInt(e.target.value);
    setMoodValue(newValue);
  };

  const handleMessageChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    if (!userMessage.trim()) return;

    setIsLoading(true);
    try {
      // Add user message to chat history
      setChatHistory(prevHistory => [...prevHistory, { type: 'user', content: userMessage }]);

      const response = await axios.post('https://nirvana-ai.onrender.com/', { // Update this to your backend URL
        moodValue: moodValue,
        userMessage: userMessage
      });

      // Add AI response to chat history
      setChatHistory(prevHistory => [
        ...prevHistory,
        { type: 'ai', content: response.data.response }
      ]);

      setUserMessage(""); // Clear input after sending
    } catch (error) {
      console.error("Error sending message:", error);
      setChatHistory(prevHistory => [
        ...prevHistory,
        { type: 'error', content: "Sorry, there was an error processing your message. Please try again." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="Main">
      <div className="main-container">
        <div className="greet">
          <p><span>Hello</span></p>
          <p>How are you feeling Today?</p>
        </div>

        <div className="slider-wrapper">
          <h4>How would you rate your current mental state?</h4>
          <div className="slider-container">
            <input
              type="range"
              min="-50"
              max="50"
              value={moodValue}
              onChange={handleMoodChange}
              className="slider"
            />
            <div className="value-display">{moodValue}</div>
          </div>
          <p>
            You have selected <strong>{Math.abs(moodValue)}</strong> {moodValue >= 0 ? "positive" : "negative"} units.
          </p>
        </div>

        {/* Chat history display */}
        <div className="chat-history">
          {chatHistory.map((message, index) => (
            <div key={index} className={`message ${message.type}`}>
              {message.type === 'ai' ? (
                <Typewriter typing={1.9}>
                  {message.content}
                </Typewriter>
              ) : (
                <p>{message.content}</p>
              )}
            </div> 
          ))}
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Enter your message here"
              value={userMessage}
              onChange={handleMessageChange}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} // Use onKeyDown for better reliability
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img 
                src={assets.send_icon} 
                alt="Send" 
                onClick={handleSendMessage}
                style={{ cursor: isLoading ? 'wait' : 'pointer' }}
              />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate information including about people so please double check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
