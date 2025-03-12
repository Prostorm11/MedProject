import React, { useState } from "react";
import "./navigation.css";
import Pressable from "../../Reusables/pressable";
import Diabetes from "./diabetes";
import Breastcancer from "../BreastCancer/breastcancer";
import Autism from "../Autism/autism";

function Navigation(props) {
  const [diseaseSelect, setDiseaseSelect] = useState([true, false, false]);

  function handleDisease(value) {
    if (value == "Diabetes") {
      setDiseaseSelect([true, false, false]);
    } else if (value == "Breast Cancer") {
      setDiseaseSelect([false, true, false]);
    } else {
      setDiseaseSelect([false, false, true]);
    }
  }

  return (
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
          <Pressable
            onPress={() => handleDisease("Diabetes")}
            padd={10}
            width={150}
            selector={false}
            pressed={diseaseSelect[0]}
          >
            Diabetes
          </Pressable>
          <Pressable
            onPress={() => handleDisease("Breast Cancer")}
            padd={10}
            width={150}
            selector={false}
            pressed={diseaseSelect[1]}
          >
            Breast Cancer
          </Pressable>
          <Pressable
            onPress={() => handleDisease("Autism")}
            padd={10}
            width={150}
            selector={false}
            pressed={diseaseSelect[2]}
          >
            Autism
          </Pressable>
        </div>
        {diseaseSelect[0] && <Diabetes></Diabetes>}
        {diseaseSelect[1] && <Breastcancer></Breastcancer>}
        {diseaseSelect[2] && <Autism></Autism>}
      </div>
      <div id="row3">
        <Pressable
          onPress={() => null}
          padd={10}
          width={200}
          background={"rgba(0,40,104,1)"}
        >
          Predict Outcome
        </Pressable>
      </div>
    </div>
  );
}

export default Navigation;
