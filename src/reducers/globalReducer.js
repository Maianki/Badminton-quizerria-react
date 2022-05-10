export const globalStateInitialValue = {
  category: [],
  questions: [],
};

export const globalReducer = (state, action) => {
  switch (action.type) {
    case 1:
      return;
    case 2:
      return;
    default:
      new Error("Invalid option");
  }
};
