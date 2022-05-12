import React from "react";
import List from "./List/List";
import { quizRules } from "utils";
import { CgClose } from "assets";
import "./rules-card.css";
import { Modal } from "components";
import { useGlobal } from "context/global-context";

export function RulesCard() {
  const { isOpenModal, handleModal } = useGlobal();
  return (
    <>
      {isOpenModal && (
        <Modal>
          <div className='card-rules card-shadow-alternate'>
            <div className='card-header'>
              <h1 className='text-center  rules-heading'>Rules</h1>
              <span className='card-dismiss'>
                <CgClose onClick={handleModal} role='button' />
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
              <a className='btn btn-outline-primary' href='/'>
                Go back
              </a>
              <a className='btn btn-primary' role='button' href='/'>
                Start Quiz
              </a>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
