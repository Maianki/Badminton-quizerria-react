import React from "react";
import { useGlobal } from "context/global-context";

export default function Answer({ option, answer }) {
  const { globalDisptacher } = useGlobal();
  //   const correctAnswerClass = answer === option ? `correct-answer` : ``;
  //   const inCorrectAnswerClass = answer !== option ? `incorrect-answer` : ``;
  const handleAnswer = (option) => {
    globalDisptacher({ type: "SET_ANSWERS", payload: option });
  };
  return (
    <li
      className={`list-unstyled question-option text-center `}
      role='button'
      onClick={() => handleAnswer(option)}
    >
      {option}
    </li>
  );
}
