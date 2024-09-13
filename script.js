const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acha que a IA pode ser um problema futuramente?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Fico com medo da tecnologia"
            },
            {
                texto: "Não",
                afirmacao: "Acho que pode ajudar"
            }
        ]
    },
    {
        enunciado: "Muitas pessoas tem medo da IA ser inteligente ao ponto de se criar sozinha e não ser reversivel. O que você pensaq sobre? ",
        alternativas: [
            {
                texto: "Concordo,tembém tenho medo!",
                afirmacao: "Acho que a IA pode acabar com todos"
            },
            {
                texto: "Não acredito nisso",
                afirmacao: "A IA pode ajudar a todos"
            }
        ]
    },
    {
        enunciado: "Em seu ponto de vista, a IA te ajuda no trabalho?",
        alternativas: [
            {
                texto: "Sim! Me sinto mais tranquila",
                afirmacao: "A IA vem impulsionando a inovação na área, abrindo novos caminhos profissionais com IA."
            },
            {
                texto: "Não",
                afirmacao: "Tenho medo de perder meu trbalho para a IA"
            }
        ]
    },
    {
        enunciado: "A IA trás novas oportunidades profissionais?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Acho que vão preferir máquinas do que a mão de obra"
            },
            {
                texto: "Não",
                afirmacao: "Acredito que vamos conseuir similar a mão de obra com a IA"
        ]
    },
    {
        enunciado: "Você acredita que a IA esta ajudando os estudantes?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "A IA está ajudando os estudantes para terem um esudo mais aprofundado  "
            },
            {
                texto: "Não",
                afirmacao: "Os estudantes estão ficando preguiçosos"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
