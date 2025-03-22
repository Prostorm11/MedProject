import React from "react";
import "./Squaredquestions.css";
import Pressable from "./pressable";

function Sqauredquestions({ question, options, nextQuestion, prevQuestion, action, setSelectedOption, selectedOption }) {
  
  const handleChange = (event) => {
    const newValue = event.target.value;
    setSelectedOption(newValue); // Update selected option

    // Ensure updated value is passed
    action(newValue);
  };

  return (
    <div id="mainbox">
      <div id="responsecolumn">
        {options.map((item, index) => (
          <div className="radio_text" key={index}>
            <input
              type="radio"
              style={{ transform: "scale(1.5)", width: "16px", height: "16px" }}
              name="options"
              value={item}
              checked={selectedOption === item}
              onChange={handleChange} // Call function on change
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
          <Pressable padd={"15px"} height={"10px"} width={"70px"} radius={"10px"} onPress={prevQuestion}>
            Prev
          </Pressable>
          <Pressable padd={"15px"} height={"10px"} width={"70px"} radius={"10px"} onPress={nextQuestion}>
            Next
          </Pressable>
        </div>
      </div>
    </div>
  );
}

export default Sqauredquestions;
