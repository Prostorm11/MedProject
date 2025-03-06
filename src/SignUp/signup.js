import { useState } from "react";
import "./signup.css";
import cross from "./images/cross.jpg";
import med_logo from "./images/med_logo.png";
import google from "./images/google.jpg"

export default function SignupScreen() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="mainboard">
      <div className="top">
        <div className="cross">
          <img src={med_logo}></img>
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
            <button className="my-button" onClick={() => {}}>
              Sign Up
            </button>
          </div>
          <p style={{ fontSize: 12, fontStyle: "italic", color: "blue" }}>
            Continue with
          </p>
          <a>
            <div className="google_box">
              <img src={google}></img>
            </div>
          </a>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
}
