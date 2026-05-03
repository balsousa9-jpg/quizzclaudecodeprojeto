"use client";

import { useReducer, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import type { QuizState, UserAnswer } from "@/types/quiz";
import { allQuestions } from "@/data/questions";
import { selectSessionQuestions, SESSION_TOTAL } from "@/lib/quiz";
import { ProgressBar } from "@/components/ProgressBar";
import { QuizCard } from "@/components/QuizCard";
import { ResultScreen } from "@/components/ResultScreen";

type Action =
  | { type: "START" }
  | { type: "ANSWER"; selected: boolean }
  | { type: "NEXT_QUESTION" }
  | { type: "RESTART" };

const TOTAL = SESSION_TOTAL;

function initialState(): QuizState {
  return {
    status: "idle",
    currentIndex: 0,
    answers: [],
    score: 0,
    sessionQuestions: [],
  };
}

function reducer(state: QuizState, action: Action): QuizState {
  switch (action.type) {
    case "START":
    case "RESTART":
      return {
        ...initialState(),
        status: "in_progress",
        sessionQuestions: selectSessionQuestions(allQuestions),
      };
    case "ANSWER": {
      if (state.answers[state.currentIndex]) return state;
      const question = state.sessionQuestions[state.currentIndex];
      const isCorrect = action.selected === question.answer;
      const newAnswer: UserAnswer = {
        questionId: question.id,
        selected: action.selected,
        isCorrect,
      };
      return {
        ...state,
        answers: [...state.answers, newAnswer],
        score: state.score + (isCorrect ? 1 : 0),
      };
    }
    case "NEXT_QUESTION": {
      const nextIndex = state.currentIndex + 1;
      if (nextIndex >= TOTAL) {
        return { ...state, status: "completed" };
      }
      return { ...state, currentIndex: nextIndex };
    }
    default:
      return state;
  }
}

export default function QuizPage() {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, undefined, () => ({
    ...initialState(),
    status: "in_progress" as const,
    sessionQuestions: selectSessionQuestions(allQuestions),
  }));

  const currentQuestion = state.sessionQuestions[state.currentIndex];
  const currentAnswer = state.answers[state.currentIndex];
  const isAnswered = currentAnswer !== undefined;

  const handleAnswer = useCallback(
    (selected: boolean) => dispatch({ type: "ANSWER", selected }),
    []
  );
  const handleNext = useCallback(() => dispatch({ type: "NEXT_QUESTION" }), []);
  const handleRestart = useCallback(() => dispatch({ type: "RESTART" }), []);

  if (state.status === "completed") {
    return (
      <main className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-lg w-full">
          <ResultScreen
            score={state.score}
            total={TOTAL}
            onRestart={handleRestart}
          />
        </div>
      </main>
    );
  }

  if (!currentQuestion) return null;

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full space-y-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/")}
            className="text-muted hover:text-txt text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral rounded"
            aria-label="Voltar para o início"
          >
            ← Início
          </button>
        </div>

        <ProgressBar
          current={state.currentIndex + 1}
          total={TOTAL}
          difficulty={currentQuestion.difficulty}
        />

        <AnimatePresence mode="wait">
          <QuizCard
            key={currentQuestion.id}
            question={currentQuestion}
            onAnswer={handleAnswer}
            answered={isAnswered}
            selectedAnswer={currentAnswer?.selected}
          />
        </AnimatePresence>

        {isAnswered && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              onClick={handleNext}
              className="w-full min-h-[52px] rounded-xl bg-coral text-white font-semibold text-sm tracking-wide hover:bg-coral/80 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
            >
              {state.currentIndex + 1 === TOTAL
                ? "Ver Resultado"
                : "Próxima Pergunta"}
            </button>
          </motion.div>
        )}
      </div>
    </main>
  );
}
