import React, { useState } from "react";
import Sqauredquestions from "../../Reusables/Sqauredquestions";
import "./autism.css";
import { QA } from "./QuestionsAndAnswers";

export default function Autism({ autismray, setAutismray }) {
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  function handleMap(answer) {
    let updatedArray = [...autismray];
    updatedArray[index] = answer; // Store the answer at the correct index
    setAutismray(updatedArray);
  }

  function handleNextQuestion() {
    if (index < QA.length - 1) {
      setIndex(index + 1);
      setSelectedOption(autismray[index + 1] || ""); // Load next answer or reset if not answered
    }
  }

  function handlePrevQuestion() {
    if (index > 0) {
      setIndex(index - 1);
      setSelectedOption(autismray[index - 1] || ""); // Load previous answer or reset
    }
  }

  return (
    <div id="autismmain">
      <Sqauredquestions
        question={QA[index].Question}
        options={QA[index].Options}
        nextQuestion={handleNextQuestion}
        prevQuestion={handlePrevQuestion}
        action={handleMap}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </div>
  );
}
