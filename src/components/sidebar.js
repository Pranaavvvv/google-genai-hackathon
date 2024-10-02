import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../assets/assets";

const Sidebar = () => {  // Change 'sidebar' to 'Sidebar'
  const [extended, setExtended] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          src={assets.menu_icon}
          alt="menu"
          className="menu"
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="add" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>What is react ...</p>
            </div>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>What is Happiness? ....</p>
            </div>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>Never Gonna give you up ....</p>
            </div>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>Never gonna let you down ...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;  // Make sure the export matches the component name
