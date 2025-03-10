import React from "react";
import "./diabetes.css";
import Pressable from "./pressable";

function Diabetes(props) {
  const questions = ["helo", "me", "bb", "weare"];
  return (
    <div className="mainboard">
      <div className="navi"></div>
      <div className="content">
        <div id="row1">
          <p id="welcome">Welcome User!</p>
          <p className="text1">AI generated insights based on input data</p>
          <div id="selectD">
            <p className="text1">
              Please select one of the disease below to get insights
              <br />
              analysis based on you input
            </p>
          </div>
        </div>
        <div id="row2">
          <div id="diseaseSelect">
            <Pressable onPress={null} padd={10} width={150} selector={true}>
              Click Me
            </Pressable>
            <Pressable onPress={null} padd={10} width={150} selector={true}>
              Click Me
            </Pressable>
            <Pressable onPress={null} padd={10} width={150} selector={true}>
              Click Me
            </Pressable>
          </div>
          <div id="actions">
            <div className="col">
              {questions.map((value, index) => (
                <div>
                  <p>{value}</p>
                  <div className="grouping">
                    <Pressable
                      onPress={null}
                      padd={10}
                      width={80}
                      selector={true}
                    >
                      Yes
                    </Pressable>
                    <Pressable
                      onPress={null}
                      padd={10}
                      width={80}
                      selector={true}
                    >
                      No
                    </Pressable>
                  </div>
                </div>
              ))}
            </div>
            <div className="col"></div>
          </div>
        </div>
        <div id="row3"></div>
      </div>
    </div>
  );
}

export default Diabetes;
