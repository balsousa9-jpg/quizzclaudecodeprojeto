# PRD — Claude Code Quiz
**Product Requirements Document**
Versão 1.0 | 2026-04-27

---

## 1. Visão Geral

### 1.1 Problema
Muitos profissionais — tanto de negócio quanto técnicos — ainda têm percepções imprecisas sobre o que o Claude Code é, o que ele faz e como ele se diferencia de outras ferramentas de IA. Isso cria barreiras de adoção e expectativas mal calibradas.

### 1.2 Solução
Um quiz web interativo de perguntas **Verdadeiro ou Falso** sobre Claude Code. O quiz cobre desde conceitos de negócio (para gestores e PMs) até funcionalidades avançadas (para desenvolvedores), proporcionando aprendizado ativo com feedback imediato em cada resposta.

### 1.3 Objetivos de Negócio
- **Educar** o público misto (negócio + técnico) sobre Claude Code de forma leve e engajante
- **Corrigir mitos** comuns sobre a ferramenta com explicações embasadas
- **Gerar engajamento** e potencial de viralização via compartilhamento de score
- **Posicionar** o projeto como referência de conteúdo de qualidade sobre Claude Code em português

### 1.4 Métricas de Sucesso
| Métrica | Meta |
|---|---|
| Taxa de conclusão do quiz | ≥ 70% |
| Tempo médio na página | ≥ 3 min |
| Score médio dos usuários | 6–8/10 (indica calibração adequada da dificuldade) |
| Bounced antes de iniciar | ≤ 20% |

---

## 2. Público-Alvo

### 2.1 Personas

**Persona 1 — O Gestor Curioso**
- Cargo: PM, Head de Produto, CTO, Diretor de Engenharia
- Dor: Ouviu falar de Claude Code em reuniões, mas não sabe exatamente o que é
- Objetivo no quiz: Entender se vale adotar, sem precisar de detalhes técnicos profundos
- Nível esperado: Acertar as 4–5 primeiras perguntas (nível iniciante/negócio)

**Persona 2 — O Dev Interessado**
- Cargo: Desenvolvedor, Engenheiro de Software, DevOps, Arquiteto
- Dor: Usa ou considerou usar Claude Code, quer validar seu conhecimento
- Objetivo no quiz: Confirmar o que sabe e descobrir funcionalidades que desconhecia
- Nível esperado: Acertar 7–10 perguntas

### 2.2 Idioma
Português Brasileiro (pt-BR) — interface, perguntas e explicações.

---

## 3. Funcionalidades

### 3.1 Escopo do MVP

| Feature | Incluído no MVP |
|---|---|
| 10 perguntas V/F por nível crescente | Sim |
| Explicação após cada resposta | Sim |
| Tela de resultado com score e classificação | Sim |
| Identidade visual Anthropic/Claude | Sim |
| Responsivo (mobile + desktop) | Sim |
| Timer por pergunta | Não |
| Compartilhamento de resultado | Não (pós-MVP) |
| Banco rotativo de perguntas | Não (pós-MVP) |

### 3.2 Fluxo da Aplicação

```
[Landing Page] → [Tela Inicial do Quiz] → [Pergunta 1..10] → [Tela de Resultado]
                                              ↑____________________|  (reiniciar)
```

**Estados de cada pergunta:**
1. Exibe enunciado + botões VERDADEIRO / FALSO
2. Usuário seleciona resposta → feedback imediato (verde = acerto, vermelho = erro)
3. Exibe explicação curta (2–3 linhas)
4. Botão "Próxima Pergunta" libera navegação

### 3.3 Tela de Resultado

Exibe ao finalizar as 10 perguntas:
- Score numérico: `X / 10`
- Barra de progresso visual
- Classificação por faixa de acerto:

| Score | Classificação | Mensagem |
|---|---|---|
| 0–3 | Descobrindo o Claude Code | "Ainda há muito para explorar — boa hora de começar!" |
| 4–6 | Conhecedor em Progresso | "Você já sabe bastante! Continue aprofundando." |
| 7–9 | Usuário Avançado | "Impressionante! Você domina o Claude Code." |
| 10 | Mestre Claude Code | "Perfeito! Você conhece cada detalhe da ferramenta." |

- Botão **Tentar Novamente** (reinicia o quiz)

---

## 4. Conteúdo — Banco de Perguntas

### 4.1 Estrutura e Níveis

O quiz apresenta 10 perguntas em ordem crescente de dificuldade:

| Posição | Nível | Foco |
|---|---|---|
| 1–3 | Iniciante / Negócio | O que é, para quem é, proposta de valor |
| 4–6 | Intermediário | Funcionalidades principais, como usar |
| 7–10 | Avançado / Técnico | Features avançadas, CLI, SDK, hooks, MCP |

### 4.2 Exemplos de Perguntas (referência para implementação)

> As perguntas abaixo são exemplos. O desenvolvedor deve expandir e revisar o banco com base na documentação oficial do Claude Code (https://docs.anthropic.com/en/docs/claude-code).

**Nível Iniciante (Negócio)**

1. **"Claude Code é uma ferramenta de IA que roda diretamente no terminal do desenvolvedor."**
   - Resposta: VERDADEIRO
   - Explicação: Claude Code é um agente de IA de linha de comando (CLI) que opera no ambiente de desenvolvimento local, sem necessidade de uma IDE ou extensão.

2. **"Claude Code só funciona com projetos escritos em Python."**
   - Resposta: FALSO
   - Explicação: Claude Code é agnóstico de linguagem. Ele lê, edita e raciocina sobre código em qualquer linguagem — Python, TypeScript, Go, Rust, etc.

3. **"Claude Code pode ler arquivos do seu projeto, executar comandos e fazer commits no Git."**
   - Resposta: VERDADEIRO
   - Explicação: Claude Code tem acesso ao sistema de arquivos e ao terminal com aprovação do usuário, podendo executar ações reais no repositório.

**Nível Intermediário**

4. **"No Claude Code, o usuário precisa aprovar toda ação antes que ela seja executada."**
   - Resposta: FALSO
   - Explicação: Por padrão, ações de leitura são automáticas. Ações destrutivas (escrita, execução) pedem aprovação, mas o nível de permissão é configurável pelo usuário.

5. **"É possível usar Claude Code sem conexão com a internet."**
   - Resposta: FALSO
   - Explicação: Claude Code requer conexão com a API da Anthropic para processar as requisições. Funciona localmente no terminal, mas depende da API na nuvem.

6. **"Claude Code suporta integração com IDEs como VS Code e JetBrains."**
   - Resposta: VERDADEIRO
   - Explicação: Além do CLI, Claude Code possui extensões para VS Code e JetBrains, permitindo uso diretamente no editor.

**Nível Avançado (Técnico)**

7. **"O arquivo CLAUDE.md serve como memória persistente de instruções do projeto para o Claude Code."**
   - Resposta: VERDADEIRO
   - Explicação: O CLAUDE.md é lido automaticamente ao iniciar o Claude Code no diretório. É o lugar para definir padrões do projeto, comandos frequentes e contexto.

8. **"Hooks no Claude Code permitem executar scripts automáticos em resposta a eventos como antes ou depois de uma ferramenta ser chamada."**
   - Resposta: VERDADEIRO
   - Explicação: Os hooks são comandos shell configurados no settings.json que disparam em eventos específicos (pre-tool, post-tool, etc.), permitindo automações avançadas.

9. **"MCP (Model Context Protocol) no Claude Code é exclusivo para conexões com bancos de dados."**
   - Resposta: FALSO
   - Explicação: MCP é um protocolo aberto que conecta Claude Code a qualquer servidor externo — APIs, bancos de dados, ferramentas de busca, serviços web e muito mais.

10. **"O Claude Agent SDK permite construir agentes customizados que orquestram múltiplos sub-agentes usando Claude como base."**
    - Resposta: VERDADEIRO
    - Explicação: O Agent SDK é uma camada programática sobre a API da Anthropic que permite criar fluxos de agentes complexos com paralelismo, memória e ferramentas customizadas.

---

## 5. Design e UX

### 5.1 Identidade Visual

**Paleta de Cores (Anthropic/Claude Branding)**

| Token | Valor | Uso |
|---|---|---|
| `--bg-primary` | `#0D0D0D` | Fundo principal |
| `--bg-card` | `#1A1A1A` | Cards e painéis |
| `--accent-coral` | `#E8673A` | Destaques, botão primário, acertos em hover |
| `--accent-orange` | `#F5A623` | Elementos secundários, progresso |
| `--text-primary` | `#F5F5F0` | Texto principal |
| `--text-muted` | `#8A8A85` | Texto secundário, labels |
| `--success` | `#4CAF6E` | Feedback de resposta correta |
| `--error` | `#E05252` | Feedback de resposta incorreta |

**Tipografia**
- Fonte principal: `Inter` (Google Fonts)
- Headings: `700` weight
- Body: `400` weight
- Tamanho base: `16px`

### 5.2 Componentes de UI

**Barra de Progresso**
- Exibe `Pergunta X de 10` no topo
- Barra visual preenchendo conforme o avanço
- Indicador de nível atual (Iniciante / Intermediário / Avançado)

**Card de Pergunta**
- Enunciado centralizado, tipografia clara
- Dois botões grandes: `VERDADEIRO` e `FALSO`
- Após resposta: cor de fundo muda (verde ou vermelho), ícone de check/x
- Área de explicação aparece com animação suave (fade-in)

**Tela de Resultado**
- Score em destaque com animação de contagem
- Barra de progresso circular ou linear
- Badge de classificação
- Botão "Tentar Novamente"

### 5.3 Responsividade
- Mobile-first (min-width 320px)
- Breakpoints: `sm: 640px`, `md: 768px`, `lg: 1024px`
- Touch-friendly: botões mínimo de 48px de altura

### 5.4 Acessibilidade
- Contraste mínimo AA (WCAG 2.1)
- Suporte a navegação por teclado
- `aria-label` nos botões de resposta
- Estados de foco visíveis

---

## 6. Arquitetura Técnica

### 6.1 Stack

| Camada | Tecnologia | Justificativa |
|---|---|---|
| Framework | Next.js 14+ (App Router) | SSG nativo, SEO, deploy Vercel otimizado |
| Linguagem | TypeScript | Type safety, melhor DX |
| Estilização | Tailwind CSS | Utility-first, alinha com design system |
| Animações | Framer Motion | Transições suaves entre perguntas e feedback |
| Gerenciamento de estado | React `useState` / `useReducer` | Quiz é client-side, não precisa de solução externa |
| Deploy | Vercel | Integração nativa Next.js, CI/CD automático |

### 6.2 Estrutura de Pastas

```
quizz-claude-code/
├── app/
│   ├── layout.tsx          # Layout raiz (fontes, metadata)
│   ├── page.tsx            # Landing / tela inicial
│   └── quiz/
│       └── page.tsx        # Página principal do quiz
├── components/
│   ├── QuizCard.tsx        # Card de pergunta com botões V/F
│   ├── ProgressBar.tsx     # Barra de progresso
│   ├── FeedbackPanel.tsx   # Explicação pós-resposta
│   ├── ResultScreen.tsx    # Tela de resultado final
│   └── LevelBadge.tsx      # Badge de nível (Iniciante/Avançado)
├── data/
│   └── questions.ts        # Banco de perguntas tipado
├── types/
│   └── quiz.ts             # Types: Question, Answer, QuizState
├── lib/
│   └── quiz.ts             # Lógica: calcular score, classificação
├── public/
│   └── og-image.png        # Open Graph para compartilhamento
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

### 6.3 Modelo de Dados

```typescript
// types/quiz.ts

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface Question {
  id: number;
  statement: string;        // Enunciado da pergunta
  answer: boolean;          // true = Verdadeiro, false = Falso
  explanation: string;      // Explicação exibida após resposta
  difficulty: Difficulty;
  category: string;         // Ex: 'CLI', 'Integração', 'SDK', 'Conceitos'
}

export interface UserAnswer {
  questionId: number;
  selected: boolean;
  isCorrect: boolean;
}

export type QuizStatus = 'idle' | 'in_progress' | 'completed';

export interface QuizState {
  status: QuizStatus;
  currentIndex: number;
  answers: UserAnswer[];
  score: number;
}
```

### 6.4 Lógica de Negócio

```typescript
// lib/quiz.ts

export type Classification =
  | 'Descobrindo o Claude Code'
  | 'Conhecedor em Progresso'
  | 'Usuário Avançado'
  | 'Mestre Claude Code';

export function getClassification(score: number): Classification {
  if (score <= 3) return 'Descobrindo o Claude Code';
  if (score <= 6) return 'Conhecedor em Progresso';
  if (score <= 9) return 'Usuário Avançado';
  return 'Mestre Claude Code';
}
```

### 6.5 SEO e Metadata

```typescript
// app/layout.tsx — metadata base
export const metadata = {
  title: 'Claude Code Quiz — Teste seu Conhecimento',
  description: 'Quiz de Verdadeiro ou Falso sobre Claude Code. Do iniciante ao avançado. Descubra o quanto você sabe sobre a ferramenta de IA da Anthropic.',
  openGraph: {
    title: 'Claude Code Quiz',
    description: 'Teste seus conhecimentos sobre o Claude Code!',
    images: ['/og-image.png'],
  },
};
```

---

## 7. Deploy e Infraestrutura

### 7.1 Vercel

- Conectar repositório GitHub ao Vercel
- Deploy automático em push para `main`
- Preview Deployments para branches de feature
- Variáveis de ambiente: nenhuma necessária no MVP (aplicação 100% estática)

### 7.2 Configuração Next.js para Exportação Estática (opcional)

O quiz não requer servidor — pode ser exportado como site estático:

```typescript
// next.config.ts
const config = {
  output: 'export',   // Gera HTML/CSS/JS estáticos
};
export default config;
```

### 7.3 Domínio (pós-MVP)
- Configurar domínio customizado via Vercel DNS após validação do MVP

---

## 8. Roadmap

### MVP (v1.0)
- [ ] Setup Next.js + Tailwind + TypeScript
- [ ] Banco de 10 perguntas categorizadas
- [ ] Componente QuizCard com feedback V/F
- [ ] Barra de progresso com indicador de nível
- [ ] Tela de resultado com classificação
- [ ] Identidade visual Anthropic/Claude dark mode
- [ ] Responsividade mobile
- [ ] Deploy na Vercel

### Pós-MVP (v1.1+)
- [ ] Banco rotativo com 30+ perguntas (sorteio aleatório)
- [ ] Timer por pergunta (15 segundos)
- [ ] Compartilhamento de resultado (LinkedIn, Twitter/X, link)
- [ ] Modo difícil (apenas perguntas avançadas)
- [ ] Versão em inglês (i18n)
- [ ] Analytics de resposta (quais perguntas mais erram)

---

## 9. Critérios de Aceite

### Quiz
- [ ] Exibe exatamente 10 perguntas em ordem crescente de dificuldade
- [ ] Após selecionar V ou F, mostra feedback visual imediato (cor + ícone)
- [ ] Exibe explicação abaixo de cada resposta antes de avançar
- [ ] Não permite alterar resposta após seleção
- [ ] Botão "Próxima Pergunta" só aparece após responder

### Resultado
- [ ] Score calculado corretamente (respostas certas / 10)
- [ ] Classificação correspondente ao score exibida corretamente
- [ ] Botão "Tentar Novamente" reinicia o quiz do zero

### UX / Performance
- [ ] Lighthouse Score ≥ 90 (Performance, Acessibilidade, SEO)
- [ ] Carrega em menos de 2s em conexão 4G
- [ ] Sem erros de console em produção
- [ ] Funciona corretamente em Chrome, Firefox, Safari e Edge

---

## 10. Fora do Escopo (MVP)

- Autenticação ou perfis de usuário
- Backend ou persistência de dados
- Ranking global / leaderboard
- Modo multiplayer
- Geração dinâmica de perguntas via IA
- Versão mobile nativa (iOS/Android)

---

*Documento gerado via brainstorm colaborativo em 2026-04-27. Revisão necessária antes do início do desenvolvimento para validar o banco de perguntas com a documentação oficial do Claude Code.*
