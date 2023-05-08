const resultado = JSON.parse(sessionStorage.getItem("resultado"));
const vitoria = (document.querySelector("#resultado").innerHTML =
  resultado.resultado);
console.log(resultado);
const dinheiro = (document.querySelector("#dinheiro").innerHTML =
  "dinheiro = " + resultado.pontos);
