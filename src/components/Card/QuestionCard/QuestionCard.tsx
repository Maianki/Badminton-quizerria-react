import React from "react";
import { MdOutlineDoubleArrow } from "assets";
import Answer from "./Answer/Answer";
import "./question-card.css";
import { useLocation } from "react-router-dom";

type QuestionCardProps = {
  question:{
    question:string,
    options:string[],
    image:string,
    answer:string
  },
  answer?:string,
  questionNumber:number,
  handleCurrentQuestion ? : () => void
}
export function QuestionCard({
  question: { question, options, image, answer },
  handleCurrentQuestion,
  questionNumber,
} : QuestionCardProps) {

  const { pathname } = useLocation();
  
  return (
    <div className='card card-question'>
      <div className='card-header'>
        <img
          className='card-img card-horizontal-img responsive-img'
          src={image}
          alt={question}
        />
      </div>
      <div className='card-body'>
        <h2 className='quiz-question'>{question}</h2>
        <ul className='question-options'>
          {options.map((option:string) => {
            return (
              <Answer
                key={option}
                option={option}
                answer={answer}
                questionNumber={questionNumber}
              />
            );
          })}
        </ul>
      </div>
      {pathname !== "/result" && (
        <div className='card-footer flex-row'>
          <button
            className='card-btn btn text-center'
            onClick={handleCurrentQuestion}
          >
            <span className='md-ht-1 flex-row btn-next'>
              NEXT QUESTION <MdOutlineDoubleArrow />
            </span>
          </button>
        </div>
      )}
       </div>
  );
}

