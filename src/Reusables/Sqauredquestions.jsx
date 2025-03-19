import React, { useState } from "react";
import "./Squaredquestions.css";
import SquaredPressable from "./squaredPressable";
import Pressable from "./pressable";

function Sqauredquestions({ question, options, nextQuestion, prevQuestion }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div id="mainbox">
      <div id="responsecolumn">
        {options.map((item, index) => (
          
          <div className="radio_text">
            <input
              type="radio"
              style={{ transform: "scale(1.5)", width: "16px", height: "16px" }}
              name="options"
              value={item}
              checked={selectedOption === item}
              onChange={handleChange}
            />
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div id="questioncolumn">
        <div id="ask">
          <p>{question}</p>
        </div>
        <div className="questionChange">
          <Pressable
            padd={"15px"}
            height={"10px"}
            width={"70px"}
            radius={"10px"}
            onPress={nextQuestion}
          >
            Prev
          </Pressable>
          <Pressable
            padd={"15px"}
            height={"10px"}
            width={"70px"}
            radius={"10px"}
            onPress={prevQuestion}
          >
            Next
          </Pressable>
        </div>
      </div>
    </div>
  );
}

export default Sqauredquestions;
