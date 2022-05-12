import React from "react";
import { Link } from "react-router-dom";
import { useGlobal } from "context/global-context";

export function CategoryCard({ category: { name, img } }) {
  const { handleModal } = useGlobal();
  return (
    <div className='card align-items-center'>
      <div className='card-header'>
        <img className='card-img' src={img} alt={name} loading='lazy' />
      </div>
      <div className='card-body card-overlay-text btn btn-primary'>{name}</div>
      <div className='card-footer align-items-center'>
        <Link
          className='btn btn-primary'
          to='/rules'
          role='button'
          onClick={handleModal}
        >
          Play Now
        </Link>
      </div>
    </div>
  );
}
