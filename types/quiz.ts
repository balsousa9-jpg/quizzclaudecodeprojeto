export type Difficulty = "beginner" | "intermediate" | "advanced";

export interface Question {
  id: number;
  statement: string;
  answer: boolean;
  explanation: string;
  difficulty: Difficulty;
  category: string;
}

export interface UserAnswer {
  questionId: number;
  selected: boolean;
  isCorrect: boolean;
}

export type QuizStatus = "idle" | "in_progress" | "completed";

export interface QuizState {
  status: QuizStatus;
  currentIndex: number;
  answers: UserAnswer[];
  score: number;
  sessionQuestions: Question[];
}
