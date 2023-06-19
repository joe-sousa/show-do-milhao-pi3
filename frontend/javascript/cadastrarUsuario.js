const formulario = document.querySelector("form");
const btnCadastrar = document.querySelector("#btnCadastrar");
console.log(formulario.nome.value);
btnCadastrar.addEventListener("click", () => {
  console.log(formulario.nome.value);
  if (
    formulario.nome.value == "" ||
    formulario.senha.value == "" ||
    formulario.nickname.value == ""
  ) {
    alert("alguns campos estão vazios");
  }
});

function somapartidasparadas(nome, senha, nickname, avatar) {
  const data = {
    nome: nome,
    senha: senha,
    nickname: nickname,
    avatar: avatar,
  };
  fetch(url + "/cadastrarusuario", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => {
      //alert(JSON.stringify(json));
    })
    .catch((err) => {
      alert(JSON.stringify(err));
    });
}
