import React, { useEffect } from "react";
import List from "./List/List";
import { quizRules } from "utils";
import { CgClose } from "assets";
import "./rules-card.css";
import { Modal } from "components";
import { useGlobal } from "context/global-context";
import { useNavigate, Link, useParams } from "react-router-dom";

export function RulesCard() {
  const { isOpenModal, handleModal } = useGlobal();
  const navigate = useNavigate();
  const { quizId } = useParams();

  useEffect(() => {
    handleModal(true);
  }, [handleModal]);

  const btnCloseHandler = () => {
    handleModal(false);
    navigate("/");
  };
  return (
    <>
      {isOpenModal && (
        <Modal>
          <div className='card-rules card-shadow-alternate'>
            <div className='card-header'>
              <h1 className='text-center  rules-heading'>Rules</h1>
              <span className='card-dismiss'>
                <CgClose onClick={btnCloseHandler} role='button' />
              </span>
            </div>
            <div className='card-body align-items-center'>
              <ul>
                {quizRules.map(({ id, description, icon }) => {
                  return (
                    <List key={id} description={description} RulesIcon={icon} />
                  );
                })}
              </ul>
            </div>
            <div className='card-footer flex-row'>
              <button
                className='btn btn-outline-primary'
                onClick={btnCloseHandler}
              >
                Go back
              </button>
              <Link className='btn btn-primary' role='button' to={`/questions/${quizId}/${0}`}>
                Start Quiz
              </Link>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
