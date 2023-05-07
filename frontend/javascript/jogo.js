const perguntas = JSON.parse(sessionStorage.getItem("perguntas"));
console.log(perguntas);
const premiacao = [
  {
    acertar: 1000,
    parar: 0,
    errar: 0,
  },
  {
    acertar: 5000,
    parar: 1000,
    errar: 500,
  },
  {
    acertar: 50000,
    parar: 5000,
    errar: 2500,
  },
  {
    acertar: 100000,
    parar: 50000,
    errar: 25000,
  },
  {
    acertar: 300000,
    parar: 100000,
    errar: 50000,
  },
  {
    acertar: 500000,
    parar: 300000,
    errar: 150000,
  },
  {
    acertar: 1000000,
    parar: 500000,
    errar: 0,
  },
];
const pergunta = document.querySelector("#pergunta");
console.log(pergunta);
const btn3 = document.querySelector("#btn3");
const btn2 = document.querySelector("#btn2");
const btn1 = document.querySelector("#btn1");
const btn4 = document.querySelector("#btn4");
const premio = document.querySelector("#premio");
function mostrarPergunta(i) {
  let indice = i;
  pergunta.innerHTML = perguntas[indice].pergunta;
  let dadosPerguntas = [
    perguntas[indice].resposta1,
    perguntas[indice].resposta2,
    perguntas[indice].resposta3,
    perguntas[indice].correta,
  ];
  let aleatorio = Math.floor(Math.random() * 4);
  btn1.innerHTML = dadosPerguntas[aleatorio];
  console.log(dadosPerguntas);
  console.log(aleatorio);

  let aleatorio2 = Math.floor(Math.random() * 4);
  while (aleatorio2 == aleatorio) {
    aleatorio2 = Math.floor(Math.random() * 4);
  }
  btn2.innerHTML = dadosPerguntas[aleatorio2];

  let aleatorio3 = Math.floor(Math.random() * 4);
  while (aleatorio3 == aleatorio || aleatorio3 == aleatorio2) {
    aleatorio3 = Math.floor(Math.random() * 4);
  }
  btn3.innerHTML = dadosPerguntas[aleatorio3];

  let aleatorio4 = Math.floor(Math.random() * 4);
  while (
    aleatorio4 == aleatorio ||
    aleatorio4 == aleatorio2 ||
    aleatorio4 == aleatorio3
  ) {
    aleatorio4 = Math.floor(Math.random() * 4);
  }
  btn4.innerHTML = dadosPerguntas[aleatorio4];
}
let indicePergunta = 0;
mostrarPergunta(indicePergunta);
mostrarPremio(indicePergunta);
function verificarAcertou(elemento) {
  if (elemento.innerHTML == perguntas[indicePergunta].correta) {
    indicePergunta += 1;
    alert("correta resposta");
    mostrarPergunta(indicePergunta);
    mostrarPremio(indicePergunta);
  }
}
function mostrarPremio(indice) {
  premio.innerHTML = `Acertar = ${premiacao[indice].acertar} Parar = ${premiacao[indice].parar} Errar = ${premiacao[indice].errar}`;
}
