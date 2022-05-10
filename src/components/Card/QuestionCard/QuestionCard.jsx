import React from "react";
import "./question-card.css";

export function QuestionCard() {
  return (
    <div className='card card-question'>
      <div className='card-header'>
        <img
          className='card-img card-horizontal-img responsive-img'
          src='../../assets/olympics-logo.jpg'
          alt='olympic logo'
        />
      </div>
      <div className='card-body'>
        <h2 className='quiz-question'>
          Which Indian player won the first Olympic Medal in badminton?
        </h2>
        <ul className='question-options'>
          <li className='list-unstyled question-option text-center'>
            Saina Nehwal
          </li>
          <li className='list-unstyled question-option question-active text-center'>
            PV Sindhu
          </li>
          <li className='list-unstyled question-option text-center'>
            Jwala Gutta
          </li>
          <li className='list-unstyled question-option text-center'>
            Sania Mirza
          </li>
        </ul>
      </div>
      <div className='card-footer flex-row'>
        <a
          className='card-btn btn text-center'
          href='./question-2.html'
          role='button'
        >
          <span className='md-ht-1'>
            NEXT QUESTION <i className='fas fa-angle-double-right'></i>
          </span>
        </a>
      </div>
    </div>
  );
}
