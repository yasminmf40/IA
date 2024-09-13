const caixaPrincipal = document.querySelector(".caixa-princial");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    }, 
    {
        enunciado: "Pergunta 3",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 4",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 5",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    }
]; 
let atual = 0;
let perguntaAtual;

function mostrarPergunta() {
    perguntaAtual =peruntas[atual];
    caixaPerguntas.textoContent = perguntaAtual.enunciado;
}

mostrarPergunta();
