"use client";

import { motion } from "framer-motion";

interface Props {
  isCorrect: boolean;
  explanation: string;
}

export function FeedbackPanel({ isCorrect, explanation }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`mt-4 p-4 rounded-xl border text-sm leading-relaxed ${
        isCorrect
          ? "bg-success/10 border-success/30 text-success"
          : "bg-error/10 border-error/30 text-error"
      }`}
    >
      <div className="flex items-start gap-2.5">
        <span className="mt-0.5 text-base flex-shrink-0">
          {isCorrect ? "✓" : "✗"}
        </span>
        <p className="text-txt/80">{explanation}</p>
      </div>
    </motion.div>
  );
}
