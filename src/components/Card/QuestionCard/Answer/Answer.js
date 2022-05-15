import React from "react";
import { useGlobal } from "context/global-context";

export default function Answer({ option, answer, questionNumber }) {
  const {
    globalDisptacher,
    globalState: { answers },
  } = useGlobal();

  const selectedClass =
    option === answers[questionNumber] ? `correct-answer` : ``;

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

  return (
    <li
      className={`list-unstyled question-option text-center ${selectedClass}`}
      role='button'
      onClick={() => handleAnswer(option)}
    >
      {option}
    </li>
  );
}
