"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { getClassificationInfo } from "@/lib/quiz";
import { saveQuizResult, getLeaderboard, type QuizResult } from "@/lib/supabase";

interface Props {
  score: number;
  total: number;
  onRestart: () => void;
}

type SaveStatus = "idle" | "saving" | "saved" | "error";

export function ResultScreen({ score, total, onRestart }: Props) {
  const [displayScore, setDisplayScore] = useState(0);
  const [nickname, setNickname] = useState("");
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("idle");
  const [leaderboard, setLeaderboard] = useState<QuizResult[]>([]);
  const frameRef = useRef<number | null>(null);
  const info = getClassificationInfo(score);
  const pct = Math.round((score / total) * 100);

  useEffect(() => {
    const duration = 800;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setDisplayScore(Math.round(progress * score));
      if (progress < 1) frameRef.current = requestAnimationFrame(step);
    };
    frameRef.current = requestAnimationFrame(step);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [score]);

  async function handleSave() {
    if (!nickname.trim()) return;
    setSaveStatus("saving");
    try {
      await saveQuizResult(nickname.trim(), score);
      const data = await getLeaderboard();
      setLeaderboard(data ?? []);
      setSaveStatus("saved");
    } catch {
      setSaveStatus("error");
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-bg-card rounded-2xl p-8 md:p-12 border border-white/8 text-center space-y-6"
    >
      <div className="text-5xl">{info.emoji}</div>

      <div>
        <div className="text-6xl font-bold text-coral mb-1">
          {displayScore}
          <span className="text-2xl text-muted font-normal">/{total}</span>
        </div>
        <p className="text-muted text-sm">acertos</p>
      </div>

      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-coral rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        />
      </div>

      <div className="space-y-2">
        <p className="text-xl font-semibold text-txt">{info.label}</p>
        <p className="text-muted text-sm">{info.message}</p>
      </div>

      <AnimatePresence mode="wait">
        {saveStatus === "idle" || saveStatus === "saving" || saveStatus === "error" ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="space-y-3"
          >
            <p className="text-sm text-muted">Salve seu resultado no ranking</p>
            <input
              type="text"
              placeholder="Seu nome ou apelido"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSave()}
              maxLength={30}
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-txt placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-coral"
            />
            {saveStatus === "error" && (
              <p className="text-xs text-red-400">Erro ao salvar. Tente novamente.</p>
            )}
            <button
              onClick={handleSave}
              disabled={!nickname.trim() || saveStatus === "saving"}
              className="w-full min-h-[52px] rounded-xl bg-coral text-white font-semibold text-sm tracking-wide hover:bg-coral/80 active:scale-95 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-bg-card"
            >
              {saveStatus === "saving" ? "Salvando..." : "Salvar no ranking"}
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="leaderboard"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <p className="text-sm text-green-400 font-medium">✓ Resultado salvo!</p>

            {leaderboard.length > 0 && (
              <div className="text-left space-y-2">
                <p className="text-xs text-muted uppercase tracking-wider">Top 10</p>
                {leaderboard.map((entry, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm ${
                      entry.nickname === nickname.trim()
                        ? "bg-coral/20 border border-coral/30"
                        : "bg-white/5"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-muted w-5">{i + 1}.</span>
                      <span className="text-txt truncate max-w-[160px]">{entry.nickname}</span>
                    </span>
                    <span className="font-semibold text-coral">{entry.score}/10</span>
                  </div>
                ))}
              </div>
            )}

            <Link
              href="/ranking"
              className="block text-center text-sm text-coral hover:text-coral/80 transition-colors"
            >
              Ver ranking completo →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={onRestart}
        className="w-full min-h-[52px] rounded-xl border border-white/10 text-muted font-semibold text-sm tracking-wide hover:text-txt hover:border-white/20 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
      >
        Tentar Novamente
      </button>
    </motion.div>
  );
}
