import { useGlobal } from "context/global-context";
import React from "react";
import { createPortal } from "react-dom";
import "./modal.css";

export function Modal({ children }:{children:React.ReactNode}) {
  const { handleModal } = useGlobal();
  return createPortal(
    <div>
      <div className='overlay' onClick={() => handleModal(false)}></div>
      <span></span>
      <div className={"modal-body"}>{children}</div>
    </div>,
    document.getElementById("modal-root")!
  );
}
