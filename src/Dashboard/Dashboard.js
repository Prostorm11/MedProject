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
  const [pressed,setPressed]=useState([true,false,false,false,false])
  // Function to render the selected screen

  const handleSelection = (index, screen) => {
    setPressed(prev => prev.map((_, i) => i === index)); // Update pressed states
    setSelectedScreen(screen); // Update selected screen
  };
  const renderScreen = (index) => {
    switch (selectedScreen) {
      case "Overview":
        return <Overview />;
      case "Chatbot":
        return <Chatbot />;
      case "Symptoms Checker":
        return <Disease />;
      case "Medication Info":
        return (
          <iframe src="/medication_info.html" className="full-screen-iframe"/>
        );
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
        <SquaredPressable
            info="Overview"
            icon={<TbBrandWindowsFilled />}
            onClick={() => handleSelection(0, "Overview")}
            background={pressed[0] ? "white" : null}
            border={pressed[0] ? "2px dashed blue" : null}
          />
          <SquaredPressable
            info="Chatbot"
            icon={<TbMessageChatbot />}
            onClick={() => handleSelection(1, "Chatbot")}
            background={pressed[1] ? "white" : null}
            border={pressed[1] ? "2px dashed blue" : null}
          />
          <SquaredPressable
            info="Symptoms Checker"
            icon={<RiFirstAidKitFill />}
            onClick={() => handleSelection(2, "Symptoms Checker")}
            background={pressed[2] ? "white" : null}
            border={pressed[2] ? "2px dashed blue" : null}
          />
          <SquaredPressable
            info="Medication Info"
            icon={<MdBrush />}
            onClick={() => handleSelection(3, "Medication Info")}
            background={pressed[3] ? "white" : null}
            border={pressed[3] ? "2px dashed blue" : null}
          />
          <SquaredPressable
            info="Profile"
            icon={<CgProfile />}
            onClick={() => handleSelection(4, "Profile")}
            background={pressed[4] ? "white" : null}
            border={pressed[4] ? "2px dashed blue" : null}
          />
        </div>
      </div>
      <div className="info">
        {renderScreen()}
      </div>
    </div>
  );
}
