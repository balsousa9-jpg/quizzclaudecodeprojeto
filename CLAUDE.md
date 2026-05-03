# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Quiz web interativo de Verdadeiro ou Falso sobre Claude Code, em português brasileiro (pt-BR). Público misto: gestores curiosos e desenvolvedores.

## Stack

- **Next.js 14+** com App Router e exportação estática (`output: 'export'`)
- **TypeScript** estrito
- **Tailwind CSS** para estilização
- **Framer Motion** para animações
- Deploy: **Vercel**

## Commands

```bash
npm run dev       # servidor de desenvolvimento
npm run build     # build de produção
npm run lint      # ESLint
npm run type-check  # tsc --noEmit
```

## Architecture

O quiz é 100% client-side — sem backend, sem autenticação, sem variáveis de ambiente.

**Fluxo de estados:** `idle → in_progress → completed` (gerenciado via `useState`/`useReducer` no componente da página do quiz).

**Dados:** as 10 perguntas vivem em `data/questions.ts` como array tipado. A lógica de score e classificação fica em `lib/quiz.ts`, separada dos componentes.

**Tipos centrais** (`types/quiz.ts`):
- `Question` — enunciado, resposta booleana, explicação, dificuldade, categoria
- `UserAnswer` — questionId, selected, isCorrect
- `QuizState` — status, currentIndex, answers, score

**Níveis de dificuldade:** perguntas 1–3 são `beginner` (negócio), 4–6 são `intermediate`, 7–10 são `advanced` (técnico/CLI/SDK/MCP).

## Design Tokens (Tailwind config)

```
--bg-primary:    #0D0D0D   (fundo)
--bg-card:       #1A1A1A   (cards)
--accent-coral:  #E8673A   (destaque, botão primário)
--accent-orange: #F5A623   (progresso)
--text-primary:  #F5F5F0
--text-muted:    #8A8A85
--success:       #4CAF6E   (resposta correta)
--error:         #E05252   (resposta incorreta)
```

Fonte: `Inter` (Google Fonts), dark mode único.

## UX Rules

- Após selecionar V ou F: feedback imediato (cor + ícone), exibe explicação com fade-in, bloqueia nova seleção
- Botão "Próxima Pergunta" só aparece após responder
- Botões de resposta: mínimo 48px de altura (touch-friendly)
- Barra de progresso exibe `Pergunta X de 10` e badge de nível atual
