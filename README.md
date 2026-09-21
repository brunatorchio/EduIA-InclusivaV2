# 📚 EduIA Inclusiva

> **Trabalho de Conclusão de Curso (TCC)**

Plataforma web educacional para o ensino de **História**, desenvolvida com foco em **inclusão e acessibilidade**. O sistema adapta a experiência de aprendizagem às preferências de cada estudante, oferecendo o mesmo conteúdo em diferentes formatos (texto, imagens, quadrinhos e áudio).

Este projeto é a **versão 2 (V2)** do protótipo, evolução do repositório [EduIA-Inclusiva](https://github.com/brunatorchio/EduIA-Inclusiva).

---

## 🎯 Objetivo

Apresentar conteúdos de História de diferentes maneiras, considerando as preferências de aprendizagem de cada estudante. Antes da aula, o estudante responde a um questionário e o sistema utiliza as escolhas para organizar a experiência de aprendizagem.

O conteúdo da aula abordado nesta versão é a **Revolução Francesa**.

---

## ✨ Funcionalidades

### 🧩 Questionário de perfil de aprendizagem
- 7 perguntas sobre como o estudante aprende melhor (formatos, ritmo, preferências);
- Possibilidade de escolher **até 2 opções por pergunta**, com validação (mínimo 1, máximo 2);
- Barra de progresso e navegação entre perguntas (voltar/avançar).

### 📖 Aula adaptativa
- Conteúdo organizado em 9 seções: Introdução, Contexto histórico, Principais acontecimentos, Quadrinhos didáticos, Resumo, Questões de compreensão, Quiz final e Fontes;
- As preferências informadas no questionário são exibidas em **tags** no início da aula;
- Conteúdo apresentado em **múltiplos formatos**: texto simplificado, imagens didáticas, quadrinhos e áudio.

### ♿ Acessibilidade
- **Controle de tamanho do texto**: botões `A−`, `A` e `A+` (variação de 14px a 26px);
- **Leitura em voz alta**: botão 🔊 que utiliza a **Web Speech API** (`speechSynthesis`) com voz em português do Brasil (`pt-BR`);
- Textos em linguagem simples e direta;
- Contraste adequado e design limpo.

### 🏆 Avaliações
- Questões de compreensão intercaladas no conteúdo, com **feedback imediato** (certo/errado);
- **Quiz final** com 5 perguntas, correção automática e mensagem personalizada conforme a pontuação.

### 📱 Layout responsivo
- Design adaptado para telas menores (celulares e tablets).

---

## 🛠️ Tecnologias

Projeto desenvolvido **sem frameworks e sem dependências externas**:

- **HTML5** — estrutura e conteúdo;
- **CSS3** — estilização e responsividade;
- **JavaScript (Vanilla)** — lógica, navegação entre telas e validações;
- **Web Speech API** — leitura de texto em voz alta (recurso nativo do navegador).

---

## 🚀 Como executar

Não há necessidade de instalação, build ou servidor — basta:

1. Baixar/clonar este repositório:
   ```bash
   git clone https://github.com/brunatorchio/EduIA-InclusivaV2.git
   ```
2. Abrir o arquivo `index.html` em qualquer navegador moderno (Chrome, Edge, Firefox).

> 💡 O botão de áudio (🔊) funciona melhor no **Google Chrome** ou **Microsoft Edge**, que possuem vozes em português integradas.

---

## 📁 Estrutura do projeto

```
EduIA-InclusivaV2/
├── index.html    # Estrutura das 3 telas: Início, Questionário e Aula
├── script.js     # Lógica do questionário, navegação, áudio e quiz
├── style.css     # Estilização, temas e responsividade
├── .gitignore    # Arquivos ignorados pelo git (SO/editor)
├── LICENSE       # Licença MIT
└── README.md     # Este arquivo
```

---

## 🗺️ Fluxo da aplicação

```
┌─────────────┐      ┌──────────────────┐      ┌──────────────────┐
│   TELA      │      │   QUESTIONÁRIO   │      │      AULA        │
│   INICIAL   ├─────▶│  7 perguntas     ├─────▶│ 9 seções +       │
│             │      │  (até 2 opções)  │      │ quiz final       │
└─────────────┘      └──────────────────┘      └──────────────────┘
```

---

## 🔮 Próximos passos

- Selecionar imagens históricas reais verificando a licença de cada arquivo (Wikimedia Commons, Library of Congress, Europeana);
- Expandir o conteúdo para outros períodos históricos (Antiguidade, Idade Média, Idade Moderna e Idade Contemporânea);
- Personalizar o conteúdo da aula de acordo com as preferências informadas no questionário.

---

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT** — consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
