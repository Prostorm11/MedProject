import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
/* import Dashboard from "./Dashboard/Dashboard"; */
// import { Navigate } from "react-router-dom";
/* import SignupScreen from "./SignUp/signup"; */
/* import LandingPage from "./LandingPage/landing"; */
import ChatBott from "./Chatbott/Chatbott";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChatBott/>
    {/* <Dashboard /> */}
    {/* <LandingPage/> */}
   {/*  <SignupScreen/> */}
  </React.StrictMode>
);

reportWebVitals();
