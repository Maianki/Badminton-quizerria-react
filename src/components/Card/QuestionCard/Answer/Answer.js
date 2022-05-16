import React from "react";
import { useGlobal } from "context/global-context";
import { useLocation } from "react-router-dom";

export default function Answer({ option, answer, questionNumber }) {
  const { pathname } = useLocation();

  const {
    globalDisptacher,
    globalState: { answers },
  } = useGlobal();

  const handleAnswer = (option) => {
    let points = 0;

    globalDisptacher({
      type: "SET_ANSWERS",
      payload: { key: questionNumber, value: option },
    });

    option === answer ? (points = 5) : (points = -1);

    globalDisptacher({
      type: "SET_SCORE",
      payload: points,
    });
  };

  // for results page

  const isResultPage = pathname === "/result";

  let selectedClass;
  let errorClass;
  if (isResultPage) {
    errorClass =
      option === answers[questionNumber] && answers[questionNumber] !== answer
        ? `incorrect-answer`
        : ``;
    selectedClass = answer === option ? `correct-answer` : ``;
  } else {
    selectedClass = option === answers[questionNumber] ? `correct-answer` : ``;
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
