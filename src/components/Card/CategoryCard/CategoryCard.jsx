import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useGlobal } from "context/global-context";
import { toast } from "react-toastify";
import { useAuth } from "context";

export function CategoryCard({ category: { name, img, id: quizId } }) {
  const { globalDisptacher } = useGlobal();
  const { user } = useAuth();

  const navigate = useNavigate();

  const btnPlayHandler = () => {
    globalDisptacher({ type: "SET_CURRENT_QUIZ", payload: name });
    if (!user) {
      toast.error("Log in to play quiz");
    }
    navigate("/rules");
  };

  return (
    <div className='card align-items-center'>
      <div className='card-header'>
        <img className='card-img' src={img} alt={name} loading='lazy' />
      </div>
      <div className='card-body card-overlay-text btn btn-primary'>{name}</div>
      <div className='card-footer align-items-center'>
        <Link
          className='btn btn-primary'
          onClick={btnPlayHandler}
          to={`/rules/${quizId}`}
        >
          Play Now
        </Link>
      </div>
    </div>
  );
}
