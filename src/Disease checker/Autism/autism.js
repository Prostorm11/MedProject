import React, { useState } from "react";
import Sqauredquestions from "../../Reusables/Sqauredquestions";
import "./autism.css";
import { QA } from "./QuestionsAndAnswers";

export default function Autism() {
  const [index, setIndex] = useState(0);
  function handlenextQuestion() {
    if (index<QA.length-1) {
      setIndex(index + 1);
    }else{
      setIndex(index);
    }
  }
  function handleprevQuestion() {
    if (index>0) {
      setIndex(index - 1);
    }else{
      setIndex(index);
    }
  }
  console.log(index)
  return (
    <div id="autismmain">
      <Sqauredquestions
        question={QA[index].Question}
        options={QA[index].Options}
        nextQuestion={handleprevQuestion}
        prevQuestion={handlenextQuestion}

      ></Sqauredquestions>
    </div>
  );
}
