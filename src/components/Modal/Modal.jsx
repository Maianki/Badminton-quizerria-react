import { useGlobal } from "context/global-context";
import React from "react";
import { createPortal } from "react-dom";
import "./modal.css";

export function Modal({ children }) {
  const { isOpenModal, handleModal } = useGlobal();
  return createPortal(
    <div>
      <div className='overlay' onClick={handleModal}></div>
      <span></span>
      <div className={"modal-body"}>{children}</div>
    </div>,
    document.getElementById("modal-root")
  );
}
