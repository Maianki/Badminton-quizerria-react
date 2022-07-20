import React from "react";
import { useGlobal } from "context/global-context";
import { useLocation } from "react-router-dom";

type AnswerProps = {
  option:string,
  answer:string,
  questionNumber:number
}

export default function Answer({ option, answer, questionNumber }:AnswerProps) {
  const { pathname } = useLocation();
   
  const {
    globalDisptacher,
    globalState: { answers },
  } = useGlobal();

  const handleAnswer = (option:string) => {
   
    let points = 0;
    option === answer ? (points = 5) : (points = -1);

    globalDisptacher({
      type: "SET_ANSWERS",
      payload: { key: questionNumber, value: option },
    });


    globalDisptacher({
      type: "SET_POINTS",
      payload: { questionNumber, points },
    });

    globalDisptacher({
      type: "SET_SCORE",
    });
  };

  // for results page

  const isResultPage:boolean = pathname === "/result";

  let selectedClass : string | undefined;
  let errorClass : string | undefined;

  if (isResultPage) {
    errorClass =
      option === answers[questionNumber as keyof typeof answers] && answers[questionNumber as keyof typeof answers] !== answer
        ? `incorrect-answer`
        : ``;
    selectedClass = answer === option ? `correct-answer` : ``;
  } else {
    selectedClass = option === answers[questionNumber as keyof typeof answers] ? `correct-answer` : ``;
  }

  return (
    <li
      className={`list-unstyled question-option text-center ${selectedClass} ${
        isResultPage && `pointer-event-none`
      } ${errorClass}`}
      role='button'
      onClick={() => handleAnswer(option)}
    >
      {option}
    </li>
  );
}
