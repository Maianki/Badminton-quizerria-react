
export type QuestionType = {
    answer: string,
    image: string,
    options: string[],
    question: string
}

export type QuizType = {
    answer?: string
    difficulty: "easy" | "medium" | "hard",
    id: string,
    name: "Olympics Special" | "Guess the Legend" | "Badminton Trivia",
    questions : QuestionType[]
}

export type PointsType = {
    [0]?: 5 | -1,
    [1]?: 5 | -1,
    [2]?: 5 | -1,
    [3]?: 5 | -1,
    [4]?: 5 | -1
}

export type AnswerType = {
    [0] ?: string,
    [1] ?: string,
    [2] ?: string,
    [3] ?: string,
    [4] ?: string
}

export type GlobalStateType = {
    quizData: QuizType[],
    currentQuiz: string,
    answers : AnswerType,
    points : PointsType,
    score : number
}

export type SetAnswerPayloadType = { 
    key: number,
    value: string 
  }
  
export type SetPointsPayloadType = {
    questionNumber :number,
    points : number
  }
  
export type ActionTypes =
      { type: 'SET_QUIZ_DATA', payload: QuizType[] }
    | { type: "SET_CURRENT_QUIZ", payload: string} 
    | { type: "SET_ANSWERS" , payload : SetAnswerPayloadType } 
    | { type: "SET_POINTS", payload : SetPointsPayloadType}
    | { type: "SET_SCORE", payload? : string}
    | { type: "SET_INITIAL_STATE", payload? : string}