import React from "react";
import "./Squaredquestions.css";
import SquaredPressable from "./squaredPressable";
import Pressable from "./pressable";

function Sqauredquestions({ question, options, action }) {
  return (
    <div id="mainbox">
      <div id="responsecolumn">
        {options.map((item, index) => (
          <p>{item}</p>
        ))}
      </div>
      <div id="questioncolumn">
        <div id="ask">
          <p>{question}</p>
        </div>
        <div className="questionChange">
          <Pressable padd={"15px"} height={"10px"} width={"70px"} radius={"10px"}>Prev</Pressable>
          <Pressable padd={"15px"} height={"10px"} width={"70px"} radius={"10px"}>Next</Pressable>
          
        </div>
      </div>
    </div>
  );
}

export default Sqauredquestions;
