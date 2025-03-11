import React, { useState } from "react";
import "./diabetes.css";
import Pressable from "./pressable";

function Diabetes(props) {
  const questions = [
    "Polyuria", "Polydipsia", "Vision burning", "Irritability", "Partial paresis", "Alopecia"
  ];
  const questions2 = [
    "Sudden weight loss", "Weakness", "Polyphagia", "Genital thrush", "Itching", "Delayed healing", "Muscle stiffness", "Obesity"
  ];

  // Separate state arrays for each question set
  const [selectedOptions1, setSelectedOptions1] = useState(Array(questions.length).fill(null));
  const [selectedOptions2, setSelectedOptions2] = useState(Array(questions2.length).fill(null));

  const handlePress1 = (index, choice) => {
    setSelectedOptions1((prev) => {
      const updatedSelections = [...prev];
      updatedSelections[index] = choice;
      return updatedSelections;
    });
  };

  const handlePress2 = (index, choice) => {
    setSelectedOptions2((prev) => {
      const updatedSelections = [...prev];
      updatedSelections[index] = choice;
      return updatedSelections;
    });
  };

  return (
    <div className="mainboard">
      <div className="navi"></div>
      <div className="content">
        <div id="row1">
          <p id="welcome">Welcome User!</p>
          <p className="text1">AI generated insights based on input data</p>
          <div id="selectD">
            <p className="text1">
              Please select one of the diseases below to get insights
              <br />
              analysis based on your input
            </p>
          </div>
        </div>
        <div id="row2">
          <div id="diseaseSelect">
            <Pressable onPress={null} padd={10} width={150} selector={false} pressed={false}>
              Diabetes
            </Pressable>
            <Pressable onPress={null} padd={10} width={150} selector={false}>
              Breast Cancer
            </Pressable>
            <Pressable onPress={null} padd={10} width={150} selector={false}>
              Autism
            </Pressable>
          </div>
          <div id="actions">
            <div className="col">
              <div>
                <p>Age</p>
                <div className="fieldbox">
                  <input type="text" />
                  <div style={{ background: "rgba(7,142,255,1)", width: "20%", height: "100%" }}></div>
                </div>
                <p>Gender</p>
                <div className="fieldbox">
                  <input type="text" />
                  <div style={{ background: "rgba(7,142,255,1)", width: "20%", height: "100%" }}></div>
                </div>
              </div>
              {questions.map((value, index) => (
                <div key={index}>
                  <p style={{ marginLeft: 5, marginBottom: 2 }}>{value}</p>
                  <div className="grouping">
                    <Pressable
                      onPress={() => handlePress1(index, "yes")}
                      padd={10}
                      width={80}
                      selector={true}
                      pressed={selectedOptions1[index] === "yes"}
                    >
                      Yes
                    </Pressable>
                    <Pressable
                      onPress={() => handlePress1(index, "no")}
                      padd={10}
                      width={80}
                      selector={true}
                      pressed={selectedOptions1[index] === "no"}
                    >
                      No
                    </Pressable>
                  </div>
                </div>
              ))}
            </div>
            <div className="col">
              {questions2.map((value, index) => (
                <div key={index}>
                  <p style={{ marginLeft: 5, marginBottom: 2 }}>{value}</p>
                  <div className="grouping">
                    <Pressable
                      onPress={() => handlePress2(index, "yes")}
                      padd={10}
                      width={80}
                      selector={true}
                      pressed={selectedOptions2[index] === "yes"}
                    >
                      Yes
                    </Pressable>
                    <Pressable
                      onPress={() => handlePress2(index, "no")}
                      padd={10}
                      width={80}
                      selector={true}
                      pressed={selectedOptions2[index] === "no"}
                    >
                      No
                    </Pressable>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div id="row3"></div>
      </div>
    </div>
  );
}

export default Diabetes;
