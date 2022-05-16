import React from "react";
import "./page-not-found.css";
import notFoundImg from "../../assets/images/404.svg";

export function PageNotFound() {
  return (
    <div className='show-404'>
      <h1>You took a wrong turn</h1>
      <img
        className='show-not-found responsive-img'
        src={notFoundImg}
        alt='page not found'
      ></img>
    </div>
  );
}
