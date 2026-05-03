import type { Difficulty, Question } from "@/types/quiz";

export type Classification =
  | "Descobrindo o Claude Code"
  | "Conhecedor em Progresso"
  | "Usuário Avançado"
  | "Mestre Claude Code";

export interface ClassificationInfo {
  label: Classification;
  message: string;
  emoji: string;
}

export function getClassificationInfo(score: number): ClassificationInfo {
  if (score <= 3)
    return {
      label: "Descobrindo o Claude Code",
      message: "Ainda há muito para explorar — boa hora de começar!",
      emoji: "🌱",
    };
  if (score <= 6)
    return {
      label: "Conhecedor em Progresso",
      message: "Você já sabe bastante! Continue aprofundando.",
      emoji: "📚",
    };
  if (score <= 9)
    return {
      label: "Usuário Avançado",
      message: "Impressionante! Você domina o Claude Code.",
      emoji: "⚡",
    };
  return {
    label: "Mestre Claude Code",
    message: "Perfeito! Você conhece cada detalhe da ferramenta.",
    emoji: "🏆",
  };
}

export function getLevelLabel(difficulty: Difficulty): string {
  const labels: Record<Difficulty, string> = {
    beginner: "Iniciante",
    intermediate: "Intermediário",
    advanced: "Avançado",
  };
  return labels[difficulty];
}

function shuffle<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export const SESSION_TOTAL = 10;

// Sorteia 3 beginner + 3 intermediate + 4 advanced = 10 questões por sessão
export function selectSessionQuestions(allQuestions: Question[]): Question[] {
  const pick = (level: Difficulty, n: number) => {
    const pool = shuffle(allQuestions.filter((q) => q.difficulty === level));
    if (process.env.NODE_ENV !== "production" && pool.length < n) {
      console.warn(`Not enough ${level} questions: need ${n}, have ${pool.length}`);
    }
    return pool.slice(0, n);
  };
  return [...pick("beginner", 3), ...pick("intermediate", 3), ...pick("advanced", 4)];
}
