import React, { useState, useEffect } from "react";
import { QuestionCard, Navbar, Footer } from "components";
import { useGlobal } from "context/global-context";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { ThreeDots } from "react-loader-spinner";
import { QuizType } from "types";
import "./question.css";

export function Questions() {
  const {
    globalState: { quizData, currentQuiz },
    globalDisptacher,
  } = useGlobal();
  const [loader, setLoader] = useState(true);

  const navigate = useNavigate();
  const { quizId, questionNumber } = useParams();
  useEffect(() => {
    const quizzesCollectionRef = collection(db, "quizzes");
    const myQuery = query(
      quizzesCollectionRef,
      where("name", "==", currentQuiz)
    );

    (async () => {
      try {
        const data = await getDocs(myQuery);

        const allQuizzes = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        globalDisptacher({
          type: "SET_QUIZ_DATA",
          payload: allQuizzes as unknown as QuizType[],
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoader(false);
      }
    })();
  }, [globalDisptacher, currentQuiz]);

  const questions = quizData[0]?.questions;

  const handleCurrentQuestion = () => {
    if (Number(questionNumber) < quizData[0]?.questions.length - 1) {
      navigate(`/questions/${quizId}/${parseInt(questionNumber as string) + 1}`);
    } else {
      navigate("/result");
    }
  };

  return (
    <>
      <Navbar />
      <div className='question-main-container'>
        {loader ? (
          <h1>
            <ThreeDots color='#00BFFF' height={100} width={100} />
          </h1>
        ) : (
          questions &&
          questions.length > 0 &&
          questions.length !== Number(questionNumber) && (
            <>
              <div className='question-stats'>
                <p>
                  Question:
                  <span>
                    {Number(questionNumber) + 1} / {questions.length}
                  </span>
                </p>
              </div>

              <QuestionCard
                question={questions[parseInt(questionNumber as string)]}
                handleCurrentQuestion={handleCurrentQuestion}
                questionNumber={Number(questionNumber)}
              />
            </>
          )
        )}
      </div>
      <Footer />
    </>
  );
}
