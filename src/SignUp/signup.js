import { useState } from "react";
import "./signup.css";

export default function SignupScreen() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="mainboard">
      <div className="top"></div>
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
            <button
              className="my-button"
              onClick={()=>{}}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
}
