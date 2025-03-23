import React, { useState } from "react";
import "./landing.css";
import himage1 from "./images/himage1.jpg";
import himage2 from "./images/himage2.jpg";
import himage5 from "./images/himage5.jpg";
import himage7 from "./images/himage7.jpg";
import himage4 from "./images/himage4.jpg";
import himage3 from "./images/himage3.jpg";
import himage6 from "./images/himage6.jpg";
import community from "./images/Community.jpg";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function handleContact() {
    setIsModalOpen(true);
  }
  return (
    <div className="mainboard2">
      <div className="title">
        <h1>MedAssist</h1>
      </div>
      <div className="information">
        <div className="p1">
          <div className="p1sub1">
            <p className="p1text">
              From <span className="highlight1">symptoms-{">"}</span> medical
              reports, we guide you
            </p>
            <p className="p1text">
              to Better<span className="highlight2"> Health</span>
            </p>
          </div>
          <div className="p1sub2">
            <p>
              Your Ai-powered health companion! MedAssist helps you understand
              symptoms, analyze
            </p>
            <p>
              medical reports, and provide doctors with key insights for better
              healthcare decisions
            </p>
          </div>
          <div>
            <button className="my-button" onClick={handleContact}>
              Try MedAssist
            </button>
          </div>
        </div>
        <div className="p2">
          <div className="col1">
            <div className="imagecontainer">
              <img src={himage1}></img>
            </div>
          </div>
          <div className="col2">
            <div className="imagecontainer">
              <img src={himage2}></img>
            </div>
            <div className="imagecontainer">
              <img src={himage3}></img>
            </div>
          </div>
          <div className="col3">
            <div className="imagecontainer">
              <img src={himage4}></img>
            </div>
          </div>
          <div className="col4">
            <div className="imagecontainer">
              <img src={himage5}></img>
            </div>
            <div className="imagecontainer">
              <img src={himage6}></img>
            </div>
          </div>
          <div className="col5">
            <div className="imagecontainer">
              <img src={himage7}></img>
            </div>
          </div>
        </div>
        <div className="p3">
          <div className="bot">
            <img src="/bot.jpg" className="botimage"></img>
            <div className="bar">
              <img src="/barAI.jpg"></img>
            </div>
            <div className="accuracy">
              <img src="/accuracy.jpg"></img>
            </div>
          </div>
          <div className="simplified">
            <div className="text">
              <div>
                <p id="healthtext">Healthcare Simplified!</p>
              </div>
              <div>
                <p>Get Instant AI-Powered</p>
                <p>Assistance</p>
              </div>
              <div>
                <p id="textsub">
                  MedAssist - Get instant AI-Powered healthcare assistance. With
                  advanced AI and expert insights, we provide accurate health
                  assessments, personalized recommendations, and seamless access
                  to medical resources worldwide. Let our AI-driven system
                  handle the complexities so you can focus on your well-being
                  with confidence.
                </p>
              </div>
            </div>
            <div className="numbers">
              <div className="num">
                <p>95%</p>
                <p className="words">Accuracy In Health Insights</p>
              </div>
              <div className="num">
                <p>100+</p>
                <p className="words">Accuracy In Health Insights</p>
              </div>
              <div className="num">
                <p>24/7</p>
                <p className="words">Accuracy In Health Insights</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p4">
          <h2 style={{ fontSize: 25 }}>features/products</h2>
          <div className="p4box">
            <div className="box">
              <p style={{ fontWeight: 500 }}>AI Chatbot</p>
              <p style={{ fontSize: 10 }}>
                Answers basic health questions, symproms, and first-aid tips.For
                Health assistamt for general users.
              </p>
            </div>
            <div className="box">
              <p style={{ fontWeight: 500 }}>Symptom & Medication Checker</p>
              <p style={{ fontSize: 10 }}>
                Explains medical reports, drug dosages, side effects, and
                interactions using NLP-based responses.
              </p>
            </div>
            <div className="box">
              <p style={{ fontWeight: 500 }}>Medical Document Analyzer</p>
              <p style={{ fontSize: 10 }}>
                Explains medical reports, drug dosages, side effects, and
                interactions using NLP-based responses.
              </p>
            </div>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <img src={community}></img>
          {isModalOpen && (
  <div className="modal-overlay">
    <div className="modal">
      <span className="close" onClick={() => setIsModalOpen(false)}>
        &times;
      </span>
      <h2>Sign Up</h2>

      {/* Input Fields */}
      <div className="modal-input">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="modal-input">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="modal-input">
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      {/* Sign Up Button */}
      <div className="modal-buttons">
        <button className="signup-btn">Sign Up</button>
      </div>

      {/* Continue with Google */}
      <div className="google-auth">
        <button className="google-btn">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            alt="Google Logo"
            className="google-logo"
          />
          Continue with Google
        </button>
      </div>
    </div>
  </div>
)}

        </div>
      </div>
    </div>
  );
}
