"use client";

import { motion } from "framer-motion";
import type { Question } from "@/types/quiz";
import { FeedbackPanel } from "./FeedbackPanel";

interface Props {
  question: Question;
  onAnswer: (selected: boolean) => void;
  answered: boolean;
  selectedAnswer?: boolean;
}

export function QuizCard({ question, onAnswer, answered, selectedAnswer }: Props) {
  const getButtonClass = (value: boolean) => {
    const base =
      "flex-1 min-h-[56px] rounded-xl font-semibold text-sm tracking-wide transition-all duration-200 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-bg-card";

    if (!answered) {
      return `${base} bg-white/5 border-white/10 text-txt hover:bg-coral/20 hover:border-coral/40 active:scale-95 cursor-pointer`;
    }

    const isSelected = selectedAnswer === value;
    const isCorrect = value === question.answer;

    if (isSelected && isCorrect)
      return `${base} bg-success/20 border-success text-success cursor-default`;
    if (isSelected && !isCorrect)
      return `${base} bg-error/20 border-error text-error cursor-default`;
    if (!isSelected && isCorrect)
      return `${base} bg-success/10 border-success/40 text-success/60 cursor-default`;
    return `${base} bg-white/5 border-white/10 text-muted cursor-default`;
  };

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-bg-card rounded-2xl p-6 md:p-8 border border-white/8"
    >
      <p className="text-txt text-lg md:text-xl font-medium leading-snug mb-6">
        &ldquo;{question.statement}&rdquo;
      </p>

      <div className="flex gap-3">
        <button
          className={getButtonClass(true)}
          onClick={() => onAnswer(true)}
          disabled={answered}
          aria-label="Responder Verdadeiro"
        >
          VERDADEIRO
        </button>
        <button
          className={getButtonClass(false)}
          onClick={() => onAnswer(false)}
          disabled={answered}
          aria-label="Responder Falso"
        >
          FALSO
        </button>
      </div>

      {answered && selectedAnswer !== undefined && (
        <FeedbackPanel
          isCorrect={selectedAnswer === question.answer}
          explanation={question.explanation}
        />
      )}
    </motion.div>
  );
}
