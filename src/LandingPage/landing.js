import React from "react";
import "./landing.css";
import himage1 from "./images/himage1.jpg";
import himage2 from "./images/himage2.jpg";
import himage5 from "./images/himage5.jpg";
import himage7 from "./images/himage7.jpg";
import himage4 from "./images/himage4.jpg";
import himage3 from "./images/himage3.jpg";
import himage6 from "./images/himage6.jpg";

export default function LandingPage() {
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
            <button className="my-button" onClick={() => {}}>
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
            <img src="/bot.jpg"></img>
            <div className="bar">
              <img src="/barAI.jpg"></img>
            </div>
            <div className="accuracy">
              <img src="/accuracy.jpg"></img>
            </div>
          </div>
          <div className="simplified"></div>
        </div>
      </div>
    </div>
  );
}
