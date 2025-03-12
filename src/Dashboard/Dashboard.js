import React from "react";
import "./Dashboard.css";
import Navigation from "../Disease checker/Diabetes/naviagation";
import { TbBrandWindowsFilled, TbMessageChatbot } from "react-icons/tb";
import { RiFirstAidKitFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdBrush } from "react-icons/md";

export default function Dashboard() {
  return (
    <div className="mainboard">
      <div className="navi">
        <p>MedAssit</p>
        <div className="navigators">
          <div className="icon-text">
            <TbBrandWindowsFilled />
            <p>Overview</p>
          </div>
          <div className="icon-text">
            <TbMessageChatbot />
            <p>Chatbot Screen</p>
          </div>
          <div className="icon-text">
            <RiFirstAidKitFill />
            <p>Symptoms Checker</p>
          </div>
          <div div className="icon-text">
            <MdBrush/>
            <p>Medication Info</p>
          </div>
          <div div className="icon-text">
            <CgProfile/>
            <p>Profile</p>
          </div>
        </div>
      </div>
      <div className="info">
        <Navigation></Navigation>
      </div>
    </div>
  );
}
