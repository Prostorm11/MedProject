import React, { useState } from "react";
import "./diabetes.css";
import Pressable from "../../Reusables/pressable";

function Diabetes(props) {
  const questions = [
    "Polyuria", "Polydipsia", "Vision burning", "Irritability", "Partial paresis", "Alopecia"
  ];
  const questions2 = [
    "Sudden weight loss", "Weakness", "Polyphagia", "Genital thrush", "Itching", "Delayed healing", "Muscle stiffness", "Obesity"
  ];

  // Separate state arrays for each question set
  const [selectedOptions1, setSelectedOptions1] = useState(Array(questions.length).fill("yes"));
  const [selectedOptions2, setSelectedOptions2] = useState(Array(questions2.length).fill("yes"));
  



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
       
  );
}

export default Diabetes;
