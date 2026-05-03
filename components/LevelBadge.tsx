import { getLevelLabel } from "@/lib/quiz";
import type { Difficulty } from "@/types/quiz";

const styles: Record<Difficulty, string> = {
  beginner: "bg-emerald-900/40 text-emerald-400 border-emerald-700/50",
  intermediate: "bg-orange-900/40 text-orange-400 border-orange-700/50",
  advanced: "bg-purple-900/40 text-purple-400 border-purple-700/50",
};

export function LevelBadge({ difficulty }: { difficulty: Difficulty }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[difficulty]}`}
    >
      {getLevelLabel(difficulty)}
    </span>
  );
}
