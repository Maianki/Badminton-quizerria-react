export const globalStateInitialValue = {
  quizData: [],
  currentQuiz: "Guess the Legend",
  answers: {},
  score: 0,
};

export const globalReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_QUIZ_DATA":
      return { ...state, quizData: payload };
    case "SET_CURRENT_QUIZ":
      return { ...state, currentQuiz: payload };
    case "SET_ANSWERS":
      const { key, value } = payload;
      return { ...state, answers: { ...state.answers, [key]: value } };
    case "SET_SCORE":
      return { ...state, score: state.score + payload };
    case "SET_INITIAL_STATE":
      return globalStateInitialValue;
    default:
      new Error("Invalid option");
  }
};
