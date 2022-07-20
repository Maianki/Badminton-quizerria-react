import { GlobalStateType ,ActionTypes} from "types";

export const globalStateInitialValue:GlobalStateType = {
  quizData: [],
  currentQuiz: "Guess the Legend",
  answers: {},
  points: {},
  score: 0,
};

export const globalReducer = (state : GlobalStateType, action: ActionTypes) : GlobalStateType => {
  const { type, payload } = action;
  switch (type) {
    case "SET_QUIZ_DATA":
      return { ...state, quizData: payload };
    case "SET_CURRENT_QUIZ":
      return { ...state, currentQuiz: payload };
    case "SET_ANSWERS":
      const { key, value } = payload;
      return { ...state, answers: { ...state.answers, [key]: value } };
    case "SET_POINTS":
      const { questionNumber, points } = payload;
      return {
        ...state,
        points: { ...state.points, [questionNumber]: points },
      };
    case "SET_SCORE":
      return {
        ...state,
        score: Object.values(state.points).reduce(
          (acc, curr) => (acc += curr),
          0
        ),
      };
    case "SET_INITIAL_STATE":
      return globalStateInitialValue;
    default:
      return state;
  }
};
