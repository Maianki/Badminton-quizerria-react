import React from "react";

type ListProps = {
  description: string,
  RulesIcon: React.ComponentType
}

export default function List({ description, RulesIcon }: ListProps) {
  return (
    <li className='list-unstyled quiz-rules text-bold-500'>
      <span className='pd-ht-1'>
        <RulesIcon />
      </span>
      {description}
    </li>
  );
}
