import React from "react";
import "./Dashboard.css"
import Navigation from "./naviagation";

export default function Dashboard() {
  return (
    <div className="mainboard">
      <div className="navi">
        <p>Overview</p>
        <p>Chatbot Screen</p>
        <p>Symptoms Checker</p>
      </div>
      <div className="info">
        <Navigation></Navigation>
      </div>
    </div>
  );
}
