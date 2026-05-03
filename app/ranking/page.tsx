"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { getLeaderboard, type QuizResult } from "@/lib/supabase";

const medals = ["🥇", "🥈", "🥉"];

export default function RankingPage() {
  const [leaderboard, setLeaderboard] = useState<QuizResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getLeaderboard()
      .then((data) => setLeaderboard(data ?? []))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full space-y-6">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-muted hover:text-txt text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral rounded"
          >
            ← Início
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-bg-card rounded-2xl p-8 border border-white/8 space-y-6"
        >
          <div className="text-center space-y-1">
            <h1 className="text-2xl font-bold text-txt">🏆 Ranking</h1>
            <p className="text-muted text-sm">Top 10 melhores resultados</p>
          </div>

          {loading && (
            <p className="text-center text-muted text-sm">Carregando...</p>
          )}

          {error && (
            <p className="text-center text-red-400 text-sm">Erro ao carregar o ranking.</p>
          )}

          {!loading && !error && leaderboard.length === 0 && (
            <p className="text-center text-muted text-sm">Nenhum resultado ainda. Seja o primeiro!</p>
          )}

          {!loading && !error && leaderboard.length > 0 && (
            <div className="space-y-2">
              {leaderboard.map((entry, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 border border-white/5"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-lg w-6 text-center">
                      {medals[i] ?? <span className="text-muted text-sm">{i + 1}.</span>}
                    </span>
                    <span className="text-txt font-medium truncate max-w-[200px]">
                      {entry.nickname}
                    </span>
                  </span>
                  <span className="font-bold text-coral">{entry.score}/10</span>
                </motion.div>
              ))}
            </div>
          )}

          <Link
            href="/quiz"
            className="block text-center w-full min-h-[52px] leading-[52px] rounded-xl bg-coral text-white font-semibold text-sm tracking-wide hover:bg-coral/80 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
          >
            Fazer o Quiz
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
