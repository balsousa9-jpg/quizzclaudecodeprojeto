import type { Difficulty } from "@/types/quiz";
import { LevelBadge } from "./LevelBadge";

interface Props {
  current: number;
  total: number;
  difficulty: Difficulty;
}

export function ProgressBar({ current, total, difficulty }: Props) {
  const pct = Math.round((current / total) * 100);

  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted">
          Pergunta <span className="text-txt font-semibold">{current}</span> de{" "}
          <span className="text-txt font-semibold">{total}</span>
        </span>
        <LevelBadge difficulty={difficulty} />
      </div>
      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-coral rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-label="Progresso do quiz"
          aria-valuenow={current}
          aria-valuemin={0}
          aria-valuemax={total}
        />
      </div>
    </div>
  );
}
