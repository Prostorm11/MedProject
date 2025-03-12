import React, { useState } from "react";
import "./Dashboard.css";
import { TbBrandWindowsFilled, TbMessageChatbot } from "react-icons/tb";
import { RiFirstAidKitFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdBrush } from "react-icons/md";
import SquaredPressable from "../Reusables/squaredPressable";
import Overview from "../Overview/overview";
import Disease from "../Disease checker/Disease";
import Medication from "../MedicationInfo/medication";
import Chatbot from "../Chatbot/Chatbot";
import Profile from "../Profile/Profile";

export default function Dashboard() {
  const [selectedScreen, setSelectedScreen] = useState("Overview"); // Default screen

  // Function to render the selected screen
  const renderScreen = () => {
    switch (selectedScreen) {
      case "Overview":
        return <Overview />;
      case "Chatbot":
        return <Chatbot />;
      case "Symptoms Checker":
        return <Disease />;
      case "Medication Info":
        return <Medication />;
      case "Profile":
        return <Profile />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="mainboard">
      <div className="navi">
        <p>MedAssist</p>
        <div className="navigators">
          <SquaredPressable info="Overview" icon={<TbBrandWindowsFilled />} onClick={() => setSelectedScreen("Overview")} />
          <SquaredPressable info="Chatbot" icon={<TbMessageChatbot />} onClick={() => setSelectedScreen("Chatbot")} />
          <SquaredPressable info="Symptoms Checker" icon={<RiFirstAidKitFill />} onClick={() => setSelectedScreen("Symptoms Checker")} />
          <SquaredPressable info="Medication Info" icon={<MdBrush />} onClick={() => setSelectedScreen("Medication Info")} />
          <SquaredPressable info="Profile" icon={<CgProfile />} onClick={() => setSelectedScreen("Profile")} />
        </div>
      </div>
      <div className="info">
        {renderScreen()}
      </div>
    </div>
  );
}
