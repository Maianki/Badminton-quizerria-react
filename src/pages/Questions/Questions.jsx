import React, { useState, useEffect } from "react";
import { QuestionCard } from "components";
import { useGlobal } from "context/global-context";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";
import "./question.css";

export function Questions() {
  const {
    globalState: { quizData, currentQuiz, score },
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
          payload: allQuizzes,
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoader(false);
      }
    })();
  }, [globalDisptacher, currentQuiz]);

  const questions = quizData[0]?.questions;

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleCurrentQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
    if (currentQuestion < quizData[0]?.questions.length - 1) {
      navigate(`/questions/${quizId}/${parseInt(questionNumber) + 1}`);
    } else {
      navigate("/result");
    }
  };

  return (
    <div className='question-main-container'>
      {loader ? (
        <h1>Loading.......</h1>
      ) : (
        questions &&
        questions.length > 0 &&
        questions.length !== currentQuestion && (
          <>
            <div className='question-stats'>
              <p>
                Question:{" "}
                <span>
                  {Number(questionNumber) + 1} / {questions.length}
                </span>
              </p>
              <p>
                Score : <span>{score}</span>
              </p>
            </div>

            <QuestionCard
              question={questions[parseInt(questionNumber)]}
              answer={quizData[0].answer}
              handleCurrentQuestion={handleCurrentQuestion}
              questionNumber={Number(questionNumber)}
            />
          </>
        )
      )}
    </div>
  );
}
