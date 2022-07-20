import { FcRules } from "assets";
import React from "react";
import { v4 as uuid } from "uuid";

type QuizRulesType = {
  id: string,
  description: string,
  icon : React.ComponentType
}[]

export const quizRules : QuizRulesType = [
  {
    id: uuid(),
    description: "There will be 5 quesitons.",
    icon: FcRules,
  },
  {
    id: uuid(),
    description: "Each question will have one correct answer.",
    icon: FcRules,
  },
  {
    id: uuid(),
    description: "Correct answer will, provide 5 points.",
    icon: FcRules,
  },
  {
    id: uuid(),
    description: "Incorrect answer will deduct 1 point.",
    icon: FcRules,
  },
];
