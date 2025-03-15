import React from "react";
import "./Squaredquestions.css";

function Sqauredquestions({ question, options, action }) {
  return (
    <div id="mainbox">
      <div id="responsecolumn">
        {options.map((item,index) => (
          <p>{item}</p>
        ))}
      </div>
      <div id="questioncolumn">
        <div>
          <p>{question}</p>
        </div>
        <button onClick={action}>Next</button>
      </div>
    </div>
  );
}

export default Sqauredquestions;
