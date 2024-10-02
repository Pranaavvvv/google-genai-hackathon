import React, { useState } from "react";
import "./Main.css";
import { assets } from "../assets/assets";

const Main = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="Main">
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Mihir.</span>
          </p>
          <p>How are you feeling Today?</p>
        </div>

        <div className="slider-wrapper">
          <h4>How would you rate your current mental state?</h4>
          <div className="slider-container">
            <input
              type="range"
              min="-50"
              max="50"
              value={value}
              onChange={handleChange}
              className="slider"
            />
            <div className="value-display">{value}</div>
          </div>
          <p>
            You have selected <strong>{Math.abs(value)}</strong>{" "}
            {value >= 0 ? "positive" : "negative"} units.
          </p>
        </div>
        {/* <div className="cards">
                      <div className="card">
                          <p>Suggest some good places to go on a trip</p>
                          <img src={assets.compass_icon} alt="" />
                      </div>
  
                      <div className="card">
                          <p>Briefly Summarize the topic : GEN AI</p>
                          <img src={assets.bulb_icon} alt="" />
                      </div>
  
                        <div className="card">
                          <p>Brainstorm ideas for team building</p>
                          <img src={assets.message_icon} alt="" />
                      </div>
  
                      <div className="card">
                          <p>Improve the readability of the following code</p>
                          <img src={assets.code_icon} alt="" />
                      </div> 
                  </div> */}

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate information including about people so
            please double check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
