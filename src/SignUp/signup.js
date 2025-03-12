import { useState } from "react";
import "./signup.css";
import med_logo from "./images/med_logo.png";
import google from "./images/google.jpg";
import signUp from "./signupbackend";

export default function SignupScreen() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(email, password);
  };

  return (
    <div className="mainboard">
      <div className="top">
        <div className="cross">
          <img src={med_logo} alt="Logo"></img>
        </div>
      </div>
      <div className="middle">
        <div className="slanted-div"></div>
        <div className="information">
          <div className="doc_image"></div>
          <p>Sign Up</p>
          <div className="email">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button-container">
            <button className="my-button" onClick={handleSubmit}>
              Sign Up
            </button>
          </div>
          <p style={{ fontSize: 12, fontStyle: "italic", color: "blue" }}>
            Continue with
          </p>
          <a>
            <div className="google_box">
              <img src={google} alt="Google"></img>
            </div>
          </a>
          <a href="www.google.com" className="already">
            <p style={{ fontSize: 10, fontStyle: "italic", color: "blue" }}>already have account?</p>
          </a>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
}
