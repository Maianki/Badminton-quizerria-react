import React from "react";
import "./home.css";
import { heroImg } from "assets";
import { CategoryCard } from "components";

export function Home() {
  return (
    <div>
      <header>
        <div className='hero'>
          <img className='hero-img responsive-img' src={heroImg} alt='hero' />
          <div className='hero-text'>
            <h1 className='hero-heading'>
              Test your
              <span className='hero-inverted-text'> badminton knowledge </span>
              and prove yourself a badminton
              <span className='hero-inverted-text'> ninja</span>
              <i className='fas fa-user-ninja'></i>
            </h1>
            <a
              href='#categories'
              className='text-center btn btn-primary btn-hero-cta text-xl'
            >
              Take me to quizzes
            </a>
          </div>
        </div>
      </header>
      <main>
        <h1 className='text-center category-heading' id='categories'>
          Categories
        </h1>
        <section className='quiz-category flex-row'>
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </section>
      </main>
    </div>
  );
}
