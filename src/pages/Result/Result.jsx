import React from "react";
import { resultsImg } from "assets";
import { Link } from "react-router-dom";
import { QuestionCard } from "components";
import { v4 as uuid } from "uuid";
import "./result.css";
import { useGlobal } from "context/global-context";

export function Result() {
  const {
    globalState: { score, quizData },
  } = useGlobal();

  const questions = quizData[0]?.questions;
  console.log(questions);
  return (
    <div>
      <main className='result-main flex-column'>
        <h1 className='result-heading md-btm-2'>Quiz Result </h1>
        <img className='img-result' src={resultsImg} alt='winning poster' />

        <h2 className='quiz-score-heading'>
          Your Score: <span className='quiz-score text-xl'>{score} / 25</span>
        </h2>

        <section className='quiz-answers flex-row'>
          {questions.map((question) => {
            return (
              <QuestionCard
                key={uuid()}
                question={question}
                answer={quizData[0].answer}
              />
            );
          })}
        </section>
        <Link to='/' className='btn btn-primary text-center' role='button'>
          Back to Quizzes
        </Link>
      </main>
    </div>
  );
}
