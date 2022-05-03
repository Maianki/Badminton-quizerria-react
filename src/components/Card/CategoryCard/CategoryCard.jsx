import React from "react";
import "./categorycard.css";
import { Link } from "react-router-dom";

export function CategoryCard() {
  return (
    <div className='card align-items-center'>
      <div className='card-header'>
        <img
          className='card-img'
          src='https://res.cloudinary.com/dj5aind8q/image/upload/v1651520398/Badminton%20Quizzeria/badminton-player_xfpljt.png'
          alt='guess badminton player'
          loading='lazy'
        />
      </div>
      <div className='card-body card-overlay-text btn btn-primary'>
        Guess the Legend
      </div>
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
