import type { Question } from "@/types/quiz";

export const allQuestions: Question[] = [
  // ── BEGINNER (1–10) ──────────────────────────────────────────────────────
  {
    id: 1,
    statement:
      "Claude Code é uma ferramenta de IA que roda diretamente no terminal do desenvolvedor.",
    answer: true,
    explanation:
      "Claude Code é um agente de IA de linha de comando (CLI) que opera no ambiente de desenvolvimento local, sem necessidade de uma IDE ou extensão.",
    difficulty: "beginner",
    category: "Conceitos",
  },
  {
    id: 2,
    statement: "Claude Code só funciona com projetos escritos em Python.",
    answer: false,
    explanation:
      "Claude Code é agnóstico de linguagem. Ele lê, edita e raciocina sobre código em qualquer linguagem — Python, TypeScript, Go, Rust, e muito mais.",
    difficulty: "beginner",
    category: "Conceitos",
  },
  {
    id: 3,
    statement:
      "Claude Code pode ler arquivos do seu projeto, executar comandos e fazer commits no Git.",
    answer: true,
    explanation:
      "Claude Code tem acesso ao sistema de arquivos e ao terminal com aprovação do usuário, podendo executar ações reais no repositório.",
    difficulty: "beginner",
    category: "Funcionalidades",
  },
  {
    id: 4,
    statement: "Claude Code é desenvolvido pela OpenAI.",
    answer: false,
    explanation:
      "Claude Code é desenvolvido pela Anthropic, a mesma empresa por trás do modelo de linguagem Claude.",
    difficulty: "beginner",
    category: "Conceitos",
  },
  {
    id: 5,
    statement:
      "Claude Code pode ser usado tanto por desenvolvedores quanto por profissionais de negócio.",
    answer: true,
    explanation:
      "Claude Code foi projetado para ser útil a diferentes perfis. Gestores e PMs podem usá-lo para entender código e gerar relatórios, enquanto devs o usam para tarefas técnicas avançadas.",
    difficulty: "beginner",
    category: "Público-alvo",
  },
  {
    id: 6,
    statement:
      "Claude Code substitui completamente o uso de um editor de código como VS Code.",
    answer: false,
    explanation:
      "Claude Code é um assistente de IA que complementa o editor de código — ele pode operar via CLI ou como extensão dentro do VS Code, mas não o substitui.",
    difficulty: "beginner",
    category: "Conceitos",
  },
  {
    id: 7,
    statement:
      "Claude Code só funciona em sistemas operacionais Windows.",
    answer: false,
    explanation:
      "Claude Code funciona em macOS, Linux e Windows, sendo especialmente popular em ambientes Unix.",
    difficulty: "beginner",
    category: "Conceitos",
  },
  {
    id: 8,
    statement:
      "Claude Code consegue entender e trabalhar com repositórios Git existentes.",
    answer: true,
    explanation:
      "Claude Code lê o histórico do Git, entende a estrutura do projeto e pode criar branches, commits e pull requests diretamente.",
    difficulty: "beginner",
    category: "Funcionalidades",
  },
  {
    id: 9,
    statement:
      "É necessário instalar plugins separados para cada linguagem de programação no Claude Code.",
    answer: false,
    explanation:
      "Claude Code funciona nativamente com qualquer linguagem. Não há plugins de linguagem — ele entende o código pelo contexto e pela estrutura dos arquivos.",
    difficulty: "beginner",
    category: "Conceitos",
  },
  {
    id: 10,
    statement:
      "Claude Code é uma ferramenta exclusiva para uso individual e não suporta colaboração em equipe.",
    answer: false,
    explanation:
      "Claude Code pode ser usado em contextos de equipe, compartilhando instruções via CLAUDE.md no repositório e integrando-se a fluxos de CI/CD.",
    difficulty: "beginner",
    category: "Conceitos",
  },

  // ── INTERMEDIATE (11–20) ──────────────────────────────────────────────────
  {
    id: 11,
    statement:
      "No Claude Code, o usuário precisa aprovar toda ação antes que ela seja executada.",
    answer: false,
    explanation:
      "Por padrão, ações de leitura são automáticas. Ações destrutivas (escrita, execução de comandos) pedem aprovação, mas o nível de permissão é configurável pelo usuário.",
    difficulty: "intermediate",
    category: "Permissões",
  },
  {
    id: 12,
    statement: "É possível usar Claude Code sem conexão com a internet.",
    answer: false,
    explanation:
      "Claude Code requer conexão com a API da Anthropic para processar as requisições. Funciona localmente no terminal, mas depende da API na nuvem.",
    difficulty: "intermediate",
    category: "Infraestrutura",
  },
  {
    id: 13,
    statement:
      "Claude Code suporta integração com IDEs como VS Code e JetBrains.",
    answer: true,
    explanation:
      "Além do CLI, Claude Code possui extensões para VS Code e JetBrains, permitindo uso diretamente no editor com acesso ao contexto do projeto.",
    difficulty: "intermediate",
    category: "Integrações",
  },
  {
    id: 14,
    statement:
      "O comando /clear no Claude Code apaga o histórico da conversa atual.",
    answer: true,
    explanation:
      "O /clear é um slash command que limpa o contexto da sessão atual, útil para iniciar uma nova tarefa sem o ruído de conversas anteriores.",
    difficulty: "intermediate",
    category: "CLI",
  },
  {
    id: 15,
    statement:
      "Claude Code pode executar testes automatizados do projeto durante uma sessão.",
    answer: true,
    explanation:
      "Claude Code pode rodar qualquer comando de terminal — incluindo suítes de teste — e interpretar os resultados para corrigir falhas automaticamente.",
    difficulty: "intermediate",
    category: "Funcionalidades",
  },
  {
    id: 16,
    statement:
      "O arquivo de configuração do Claude Code se chama settings.json.",
    answer: true,
    explanation:
      "O settings.json (localizado em .claude/) é onde se configuram permissões, hooks, variáveis de ambiente e outros comportamentos do Claude Code.",
    difficulty: "intermediate",
    category: "Configuração",
  },
  {
    id: 17,
    statement:
      "Claude Code não consegue trabalhar com múltiplos arquivos ao mesmo tempo.",
    answer: false,
    explanation:
      "Claude Code pode ler, editar e correlacionar múltiplos arquivos em uma única sessão, entendendo dependências entre módulos e componentes.",
    difficulty: "intermediate",
    category: "Funcionalidades",
  },
  {
    id: 18,
    statement:
      "É possível interromper uma ação do Claude Code pressionando Escape.",
    answer: true,
    explanation:
      "A tecla Escape interrompe a execução atual do Claude Code, retornando o controle ao usuário sem necessidade de fechar o terminal.",
    difficulty: "intermediate",
    category: "CLI",
  },
  {
    id: 19,
    statement:
      "Claude Code requer que o código-fonte esteja hospedado no GitHub.",
    answer: false,
    explanation:
      "Claude Code trabalha com qualquer repositório Git local, independentemente de onde o código esteja hospedado (GitHub, GitLab, Bitbucket ou sem remote).",
    difficulty: "intermediate",
    category: "Infraestrutura",
  },
  {
    id: 20,
    statement:
      "O modo de permissão bypass-permissions executa todas as ações sem pedir confirmação.",
    answer: true,
    explanation:
      "O modo bypass-permissions desativa as confirmações interativas, útil em ambientes automatizados como CI/CD onde não há usuário presente para aprovar ações.",
    difficulty: "intermediate",
    category: "Permissões",
  },

  // ── ADVANCED (21–30) ──────────────────────────────────────────────────────
  {
    id: 21,
    statement:
      "O arquivo CLAUDE.md serve como memória persistente de instruções do projeto para o Claude Code.",
    answer: true,
    explanation:
      "O CLAUDE.md é lido automaticamente ao iniciar o Claude Code no diretório. É o lugar para definir padrões do projeto, comandos frequentes e contexto permanente.",
    difficulty: "advanced",
    category: "CLAUDE.md",
  },
  {
    id: 22,
    statement:
      "Hooks no Claude Code permitem executar scripts automáticos em resposta a eventos como antes ou depois de uma ferramenta ser chamada.",
    answer: true,
    explanation:
      "Os hooks são comandos shell configurados no settings.json que disparam em eventos específicos (PreToolUse, PostToolUse, etc.), permitindo automações avançadas.",
    difficulty: "advanced",
    category: "Hooks",
  },
  {
    id: 23,
    statement:
      "MCP (Model Context Protocol) no Claude Code é exclusivo para conexões com bancos de dados.",
    answer: false,
    explanation:
      "MCP é um protocolo aberto que conecta Claude Code a qualquer servidor externo — APIs, bancos de dados, ferramentas de busca, serviços web e muito mais.",
    difficulty: "advanced",
    category: "MCP",
  },
  {
    id: 24,
    statement:
      "O Claude Agent SDK permite construir agentes customizados que orquestram múltiplos sub-agentes usando Claude como base.",
    answer: true,
    explanation:
      "O Agent SDK é uma camada programática sobre a API da Anthropic que permite criar fluxos de agentes complexos com paralelismo, memória e ferramentas customizadas.",
    difficulty: "advanced",
    category: "Agent SDK",
  },
  {
    id: 25,
    statement:
      "CLAUDE.md pode ser aninhado em subdiretórios para definir instruções específicas de módulos ou pacotes.",
    answer: true,
    explanation:
      "Claude Code lê o CLAUDE.md da raiz e também os CLAUDE.md de subdiretórios ao navegar por eles, permitindo instruções granulares por módulo.",
    difficulty: "advanced",
    category: "CLAUDE.md",
  },
  {
    id: 26,
    statement:
      "O Agent SDK do Claude Code só suporta desenvolvimento de agentes em Python.",
    answer: false,
    explanation:
      "O Agent SDK está disponível para Python e TypeScript/JavaScript, e a API subjacente pode ser consumida por qualquer linguagem via HTTP.",
    difficulty: "advanced",
    category: "Agent SDK",
  },
  {
    id: 27,
    statement:
      "Hooks no Claude Code podem ser usados para formatar código automaticamente após cada edição de arquivo.",
    answer: true,
    explanation:
      "Um hook PostToolUse configurado para o evento de escrita de arquivo pode acionar automaticamente um formatter (Prettier, Black, etc.) após cada edição.",
    difficulty: "advanced",
    category: "Hooks",
  },
  {
    id: 28,
    statement:
      "O protocolo MCP permite que Claude Code se conecte a servidores externos em tempo real durante a sessão.",
    answer: true,
    explanation:
      "Servidores MCP ficam ativos durante a sessão e Claude Code pode consultá-los dinamicamente para buscar dados, executar ações ou ampliar suas capacidades.",
    difficulty: "advanced",
    category: "MCP",
  },
  {
    id: 29,
    statement:
      "Sub-agentes criados com o Claude Agent SDK podem rodar em paralelo para acelerar tarefas complexas.",
    answer: true,
    explanation:
      "O Agent SDK suporta execução paralela de sub-agentes, permitindo dividir tarefas grandes em partes independentes que são processadas simultaneamente.",
    difficulty: "advanced",
    category: "Agent SDK",
  },
  {
    id: 30,
    statement:
      "O Claude Code não expõe nenhuma API programática — só pode ser usado interativamente via CLI.",
    answer: false,
    explanation:
      "Além do CLI interativo, Claude Code pode ser controlado programaticamente via SDK, usado em modo não-interativo com flags como --print, e integrado em pipelines de CI/CD.",
    difficulty: "advanced",
    category: "CLI",
  },
];
