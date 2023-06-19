const formulario = document.querySelector("form");
const btnCadastrar = document.querySelector("#btnCadastrar");
const file = formulario.avatar;
let arquivo;
file.onchange = () => {
  console.log(file.files[0]);
  arquivo = file.files[0];
  const caminho = file.value.replace(/\\/g, "/");
  console.log(caminho);
};
console.log(formulario.nome.value);
btnCadastrar.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(formulario.nome.value);
  if (
    formulario.nome.value == "" ||
    formulario.senha.value == "" ||
    formulario.nickname.value == ""
  ) {
    alert("alguns campos estão vazios");
  } else {
    salvarImagem(arquivo);

    /*
    cadastrarUsuario(
      formulario.nome.value,
      formulario.senha.value,
      formulario.nickname.value,
      "teste"
    ); */
  }
});

function cadastrarUsuario(nome, senha, nickname, avatar) {
  const data = {
    nome: nome,
    senha: senha,
    nickname: nickname,
    avatar: avatar,
  };
  fetch("http://localhost:3000/api/v1/usuario/cadastrarusuario", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => {
      alert("usuario cadastrado");
      window.location.href = "login.html";
    })
    .catch((err) => {
      alert(JSON.stringify(err));
    });
}

function salvarImagem(image) {
  var formData = new FormData();
  formData.append("name", image);
  fetch("http://localhost:3000/api/v1/upload-image", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      cadastrarUsuario(
        formulario.nome.value,
        formulario.senha.value,
        formulario.nickname.value,
        json.file.path.replace(/\\/g, "/")
      );
    })
    .catch((err) => {
      alert(JSON.stringify(err));
    });
}
