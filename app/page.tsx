import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full text-center space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral/15 border border-coral/30 text-coral text-xs font-medium">
            10 perguntas · Verdadeiro ou Falso
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-txt leading-tight">
            Claude Code Quiz
          </h1>
          <p className="text-muted text-base md:text-lg leading-relaxed">
            Teste seus conhecimentos sobre o Claude Code — do conceito básico às
            funcionalidades avançadas como hooks, MCP e Agent SDK.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center">
          {[
            { label: "Iniciante", desc: "Conceitos e proposta de valor" },
            { label: "Intermediário", desc: "Funcionalidades e integrações" },
            { label: "Avançado", desc: "Hooks, MCP e Agent SDK" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-bg-card rounded-xl p-3 border border-white/8 space-y-1"
            >
              <p className="text-txt text-xs font-semibold">{item.label}</p>
              <p className="text-muted text-xs leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>

        <Link
          href="/quiz"
          className="flex items-center justify-center w-full min-h-[52px] rounded-xl bg-coral text-white font-semibold text-base tracking-wide hover:bg-coral/80 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
        >
          Iniciar Quiz
        </Link>

        <p className="text-muted text-xs">
          Banco de 30 perguntas · 10 sorteadas por sessão
        </p>
      </div>
    </main>
  );
}
