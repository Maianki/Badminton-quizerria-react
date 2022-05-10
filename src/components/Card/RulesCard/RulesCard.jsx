import React from "react";
import List from "./List/List";
import { quizRules } from "utils";
import "./rules-card.css";

export function RulesCard() {
  return (
    <div className='card-rules card-shadow-alternate'>
      <div className='card-header'>
        <h1 className='text-center  rules-heading'>Rules</h1>
      </div>
      <div className='card-body align-items-center'>
        <ul>
          {quizRules.map(({ id, description, icon }) => {
            return <List key={id} description={description} RulesIcon={icon} />;
          })}
        </ul>
      </div>
      <div className='card-footer flex-row'>
        <a
          className='btn btn-outline-primary'
          href='../../index.html#categories'
        >
          Go back
        </a>
        <a
          className='btn btn-primary'
          role='button'
          href='../badminton-trivia-quiz/question-1.html'
        >
          Start Quiz
        </a>
      </div>
    </div>
  );
}
