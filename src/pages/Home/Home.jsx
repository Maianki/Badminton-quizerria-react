import React from "react";
import "./home.css";
import { heroImg } from "assets";
import { CategoryCard } from "components";
import { db } from "firebase-config";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

export function Home() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const categoriesCollectionRef = collection(db, "categories");
    (async () => {
      try {
        const data = await getDocs(categoriesCollectionRef);
        const allCategories = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setCategories(allCategories);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

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
              <span className='hero-inverted-text'> ninja </span>
              <i className='fas fa-user-ninja'></i>
            </h1>
            <Link
              to='/'
              className='text-center btn btn-primary btn-hero-cta text-xl'
            >
              Take me to quizzes
            </Link>
          </div>
        </div>
      </header>
      <main>
        <h1 className='text-center category-heading' id='categories'>
          Categories
        </h1>
        <section className='quiz-category flex-row'>
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </section>
      </main>
    </div>
  );
}
