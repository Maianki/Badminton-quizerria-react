import React from "react";
import "./categorycard.css";
import { Link } from "react-router-dom";

export function CategoryCard({ category: { name, img } }) {
  return (
    <div className='card align-items-center'>
      <div className='card-header'>
        <img className='card-img' src={img} alt={name} loading='lazy' />
      </div>
      <div className='card-body card-overlay-text btn btn-primary'>{name}</div>
      <div className='card-footer align-items-center'>
        <Link
          className='btn btn-primary'
          to='/'
          href='./quiz-pages/guessplayer-quiz/rules.html'
          role='button'
        >
          Play Now
        </Link>
      </div>
    </div>
  );
}
