import React, { useState } from "react";
import "./Chatbot.css";

const Header = () => {
  return (
    <div className="header">
      <div className="title">ChatBot Screen</div>
      <div className="user-section">
        <div className="notification-container">
          <div className="notification-icon">
            <img
              src="https://dashboard.codeparrot.ai/api/image/Z9ISTCppvFKitUBV/vuesax-l-6.png"
              alt="notification"
            />
          </div>
          <div className="notification-badge">3</div>
        </div>
        <div className="user-info">
          <div className="user-avatar">
            <img
              src="https://dashboard.codeparrot.ai/api/image/Z9ISTCppvFKitUBV/frame-4.png"
              alt="user"
            />
          </div>
          <div className="user-details">
            <div className="user-name">Jake Peterson</div>
            <div className="user-role">Plumber</div>
          </div>
          <div className="dropdown-icon">
            <img
              src="https://dashboard.codeparrot.ai/api/image/Z9ISTCppvFKitUBV/frame-19.png"
              alt="dropdown"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ChatArea = () => {
  return (
    <div className="chat-area">
      <div className="welcome-section">
        <div className="welcome-text">
          <div className="title">Welcome User!.</div>
          <div className="subtitle">
            AI-generated insights based on input data, feel free to chat with our AI-assistant...
          </div>
        </div>
      </div>

      <div className="chat-message">
        <div className="message-content">
          Hi! I'm MedAssist, your AI healthcare chatbot. How may I help you?
        </div>
      </div>
    </div>
  );
};

const InputSection = ({ onSendMessage, inputText, setInputText }) => {
  return (
    <div className="input-section">
      <div className="avatar">
        <div className="avatar-circle"></div>
        <img
          src="https://dashboard.codeparrot.ai/api/image/Z9ISTCppvFKitUBV/group-35.png"
          alt="Avatar"
          className="avatar-image"
        />
      </div>

      <div className="input-field">
        <input
          type="text"
          placeholder="Please input your prompt here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className="send-button" onClick={onSendMessage}>
          <img
            src="https://dashboard.codeparrot.ai/api/image/Z9ISTCppvFKitUBV/arrows-d.png"
            alt="Send"
            className="send-icon"
          />
        </button>
      </div>
    </div>
  );
};

const ChatBot = () => {
  const [inputText, setInputText] = useState("");

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      console.log("User Message:", inputText);
      setInputText(""); // Clear input field after sending
    }
  };

  return (
    <div className="container">
      <div className="main-content">
        
        <ChatArea />
        <InputSection
          onSendMessage={handleSendMessage}
          inputText={inputText}
          setInputText={setInputText}
        />
      </div>
    </div>
  );
};

export default ChatBot;