import { FcRules } from "assets";
import { v4 as uuid } from "uuid";

export const quizRules = [
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
    description: "Correct answer will ,provide 5 points..",
    icon: FcRules,
  },
  {
    id: uuid(),
    description: "Incorrect answer will deduct 1 point.",
    icon: FcRules,
  },
  {
    id: uuid(),
    description: "To unlock new level you have to score 75%.",
    icon: FcRules,
  },
];
