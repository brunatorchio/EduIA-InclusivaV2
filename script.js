var perguntas = [
    {
        texto: "Como você aprende melhor?",
        opcoes: [
            "Textos simplificados",
            "Imagens",
            "Histórias em quadrinhos",
            "Áudio",
            "Mistura de formatos"
        ]
    },

    {
        texto: "O que ajuda quando uma explicação fica difícil?",
        opcoes: [
            "Explicação passo a passo",
            "Exemplos",
            "Imagens",
            "Repetição",
            "Perguntas simples"
        ]
    },

    {
        texto: "Você prefere estudar sozinho ou acompanhado?",
        opcoes: [
            "Sozinho",
            "Com professor ou tutor",
            "Com a família",
            "Às vezes sozinho e às vezes acompanhado"
        ]
    },

    {
        texto: "Como você prefere os textos?",
        opcoes: [
            "Textos curtos",
            "Textos médios",
            "Textos maiores",
            "Explicações mais completas"
        ]
    },

    {
        texto: "Qual formato você prefere?",
        opcoes: [
            "Imagens",
            "Quadrinhos",
            "Áudio",
            "Texto"
        ]
    },

    {
        texto: "Você precisa que palavras importantes sejam destacadas?",
        opcoes: [
            "Sim, bastante",
            "Sim, algumas palavras",
            "Não preciso",
            "Não tenho preferência"
        ]
    },

    {
        texto: "Qual período da História você quer estudar?",
        opcoes: [
            "Antiguidade",
            "Idade Média",
            "Idade Moderna",
            "Idade Contemporânea"
        ]
    }
];


var perguntaAtual = 0;
var respostas = [];
var tamanhoTexto = 18;


for (var i = 0; i < perguntas.length; i++) {
    respostas[i] = [];
}


document.getElementById("btnComecar").addEventListener(
    "click",
    abrirQuestionario
);


document.getElementById("btnProximaPergunta").addEventListener(
    "click",
    proximaPergunta
);


document.getElementById("btnVoltarPergunta").addEventListener(
    "click",
    voltarPergunta
);


document.getElementById("btnVoltarInicio").addEventListener(
    "click",
    voltarInicio
);


document.getElementById("btnMenor").addEventListener(
    "click",
    diminuirTexto
);


document.getElementById("btnNormal").addEventListener(
    "click",
    textoNormal
);


document.getElementById("btnMaior").addEventListener(
    "click",
    aumentarTexto
);


document.getElementById("btnAudio").addEventListener(
    "click",
    lerTexto
);


document.getElementById("btnResultadoQuiz").addEventListener(
    "click",
    finalizarQuiz
);


function abrirQuestionario() {

    document.getElementById("inicio").classList.remove("ativa");

    document.getElementById("questionario").classList.add("ativa");

    mostrarPergunta();
}


function mostrarPergunta() {

    var pergunta = perguntas[perguntaAtual];

    document.getElementById("tituloPergunta").textContent =
        pergunta.texto;

    document.getElementById("contadorPergunta").textContent =
        "Pergunta " +
        (perguntaAtual + 1) +
        " de " +
        perguntas.length;


    var porcentagem =
        ((perguntaAtual + 1) / perguntas.length) * 100;

    document.getElementById("barraProgresso").style.width =
        porcentagem + "%";


    var area =
        document.getElementById("opcoesPergunta");

    area.innerHTML = "";


    for (var i = 0; i < pergunta.opcoes.length; i++) {

        var botao =
            document.createElement("button");

        botao.className = "opcao";

        botao.textContent =
            pergunta.opcoes[i];


        if (
            respostas[perguntaAtual].indexOf(
                pergunta.opcoes[i]
            ) !== -1
        ) {

            botao.classList.add("selecionada");

        }


        botao.addEventListener(
            "click",
            selecionarOpcao
        );


        area.appendChild(botao);

    }
}


function selecionarOpcao(evento) {

    var botao = evento.currentTarget;

    var valor = botao.textContent;

    var lista = respostas[perguntaAtual];

    var indice = lista.indexOf(valor);


    if (indice !== -1) {

        lista.splice(indice, 1);

        botao.classList.remove("selecionada");

        return;
    }


    if (lista.length >= 2) {

        alert(
            "Você pode escolher no máximo duas opções."
        );

        return;
    }


    lista.push(valor);

    botao.classList.add("selecionada");
}


function proximaPergunta() {

    if (respostas[perguntaAtual].length === 0) {

        alert(
            "Escolha pelo menos uma opção antes de continuar."
        );

        return;
    }


    if (perguntaAtual < perguntas.length - 1) {

        perguntaAtual++;

        mostrarPergunta();

    } else {

        iniciarAula();
    }
}


function voltarPergunta() {

    if (perguntaAtual > 0) {

        perguntaAtual--;

        mostrarPergunta();

    }
}


function iniciarAula() {

    document
        .getElementById("questionario")
        .classList.remove("ativa");


    document
        .getElementById("aula")
        .classList.add("ativa");


    var periodo =
        respostas[6][0];


    document.getElementById("tituloAula").textContent =
        "Aula de História — " + periodo;


    mostrarPreferencias();

    aplicarTamanhoTexto();

    window.scrollTo(0, 0);
}


function mostrarPreferencias() {

    var area =
        document.getElementById("preferencias");

    area.innerHTML =
        "<strong>Suas preferências:</strong><br>";


    for (var i = 0; i < respostas.length; i++) {

        for (var j = 0; j < respostas[i].length; j++) {

            var span =
                document.createElement("span");

            span.className = "tag";

            span.textContent =
                respostas[i][j];

            area.appendChild(span);
        }
    }
}


function aplicarTamanhoTexto() {

    document.body.style.fontSize =
        tamanhoTexto + "px";
}


function aumentarTexto() {

    tamanhoTexto += 2;

    if (tamanhoTexto > 26) {
        tamanhoTexto = 26;
    }

    aplicarTamanhoTexto();
}


function diminuirTexto() {

    tamanhoTexto -= 2;

    if (tamanhoTexto < 14) {
        tamanhoTexto = 14;
    }

    aplicarTamanhoTexto();
}


function textoNormal() {

    tamanhoTexto = 18;

    aplicarTamanhoTexto();
}


function lerTexto() {

    if (!("speechSynthesis" in window)) {

        alert(
            "Seu navegador não possui suporte à leitura em voz alta."
        );

        return;
    }


    var aula =
        document.getElementById("aula");

    var texto =
        aula.innerText;


    window.speechSynthesis.cancel();


    var fala =
        new SpeechSynthesisUtterance(texto);


    fala.lang = "pt-BR";

    fala.rate = 0.9;

    window.speechSynthesis.speak(fala);
}


var botoesImagem =
    document.querySelectorAll(".resposta-imagem");


for (var i = 0; i < botoesImagem.length; i++) {

    botoesImagem[i].addEventListener(
        "click",
        verificarImagem
    );
}


function verificarImagem(evento) {

    var botao =
        evento.currentTarget;

    var resultado =
        document.getElementById(
            "resultadoImagem"
        );


    if (
        botao.classList.contains("correta")
    ) {

        resultado.className = "resultado";

        resultado.textContent =
            "✔ Muito bem! A imagem representa " +
            "a divisão social da sociedade francesa.";

    } else {

        resultado.className = "feedback errado";

        resultado.textContent =
            "✏️ Observe novamente a imagem " +
            "e pense no contexto da Revolução Francesa.";

    }
}


var botoesCompreensao =
    document.querySelectorAll(".compreensao");


for (var i = 0; i < botoesCompreensao.length; i++) {

    botoesCompreensao[i].addEventListener(
        "click",
        verificarCompreensao
    );
}


function verificarCompreensao(evento) {

    var botao =
        evento.currentTarget;

    var questao =
        botao.closest(".questao");

    var feedback =
        questao.querySelector(".feedback");


    if (
        botao.dataset.correta === "sim"
    ) {

        feedback.className =
            "feedback certo";

        feedback.textContent =
            "✔ Resposta correta!";

    } else {

        feedback.className =
            "feedback errado";

        feedback.textContent =
            "✏️ Essa não é a resposta correta. " +
            "Leia novamente a explicação.";

    }
}


function finalizarQuiz() {

    var respostasCorretas = [
        "a",
        "a",
        "a",
        "a",
        "a"
    ];


    var pontos = 0;


    for (var i = 0; i < respostasCorretas.length; i++) {

        var selecionada =
            document.querySelector(
                'input[name="q' +
                (i + 1) +
                '"]:checked'
            );


        if (
            selecionada &&
            selecionada.value === respostasCorretas[i]
        ) {

            pontos++;

        }
    }


    var resultado =
        document.getElementById(
            "resultadoQuiz"
        );


    resultado.className =
        "resultado";


    resultado.innerHTML =
        "<h3>🎉 Resultado do Quiz</h3>" +

        "<p>Você acertou <strong>" +
        pontos +
        " de 5</strong> perguntas.</p>" +

        "<p>" +
        mensagemResultado(pontos) +
        "</p>";
}


function mensagemResultado(pontos) {

    if (pontos === 5) {

        return "Você respondeu todas as questões corretamente.";

    }


    if (pontos >= 3) {

        return "Você compreendeu boa parte do conteúdo. " +
            "Você pode revisar os pontos que tiveram dúvida.";

    }


    return "Vale a pena revisar o conteúdo e tentar o quiz novamente.";
}


function voltarInicio() {

    if (
        "speechSynthesis" in window
    ) {

        window.speechSynthesis.cancel();

    }


    document
        .getElementById("aula")
        .classList.remove("ativa");


    document
        .getElementById("inicio")
        .classList.add("ativa");


    window.scrollTo(0, 0);
}