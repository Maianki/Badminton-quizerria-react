import React from "react";

export default function List({ description, RulesIcon }) {
  return (
    <li className='list-unstyled quiz-rules text-bold-500'>
      <span className='pd-ht-1'>
        <RulesIcon />
      </span>
      {description}
    </li>
  );
}
