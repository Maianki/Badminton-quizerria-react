import React from "react";
import "./home.css";
import { heroImg } from "assets";
import { CategoryCard, Navbar, Footer } from "components";
import { db } from "firebase-config";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { ThreeDots } from "react-loader-spinner";
import { useGlobal } from "context/global-context";

type CategoryType = {
  id:string,
  img:string,
  name: "Guess the Legend" | "Olympics Special" | "Badminton Trivia"
}
export function Home() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const { globalDisptacher } = useGlobal();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const categoriesCollectionRef = collection(db, "categories");
    (async () => {
      try {
        const data = await getDocs(categoriesCollectionRef);
        const allCategories = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setLoader(false);
        setCategories(allCategories as unknown as CategoryType[]);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  useEffect(() => {
    globalDisptacher({ type: "SET_INITIAL_STATE" });
  }, [globalDisptacher]);

  return (
    <div>
      <Navbar />
      <header>
        <div className='hero'>
          <img className='hero-img responsive-img' src={heroImg} alt='hero' />
          <div className='hero-text'>
            <h1 className='hero-heading'>
              Test your
              <span className='hero-inverted-text'> badminton knowledge </span>
              and prove yourself a badminton
              <span className='hero-inverted-text'> ninja </span>
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
          {!loader ? (
            categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))
          ) : (
            <ThreeDots color='#00BFFF' height={100} width={100} />
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
