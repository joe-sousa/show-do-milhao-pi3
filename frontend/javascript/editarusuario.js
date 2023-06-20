const form = document.querySelector("form");
console.log(usuario[0].senha);
const btnSalvar = document.querySelector("#btnSalvar");
let avatar = usuario[0].avatar;
console.log(avatar);

const file = form.avatar;
let arquivo;
file.onchange = () => {
  console.log(file.files[0]);
  arquivo = file.files[0];
  const caminho = file.value.replace(/\\/g, "/");
  console.log(caminho);
};

function mostrarDadosAtuais() {
  form.nome.value = usuario[0].nome;
  form.nickname.value = usuario[0].nome;
}
mostrarDadosAtuais();

btnSalvar.addEventListener("click", function (e) {
  e.preventDefault();
  if (form.senha.value != usuario[0].senha) {
    alert("senha antiga está errada");
  } else if (
    form.senha.value == "" ||
    form.novaSenha.value == "" ||
    form.nome.value == "" ||
    form.nickname.value == ""
  ) {
    alert("preencha todos os campos");
  } else {
    salvarImagem(arquivo, e);
  }
});
function atualizar(e) {}

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
      atualizarUsuario(
        form.nome.value,
        form.novaSenha.value,
        form.nickname.value,
        json.file.path.replace(/\\/g, "/")
      );
    })
    .catch((err) => alert(err));
}

function atualizarUsuario(nome, senha, nickname, avatar) {
  const data = {
    nome: nome,
    senha: senha,
    nickname: nickname,
    avatar: avatar,
    id: usuario[0].id,
  };
  fetch("http://localhost:3000/api/v1/usuario/atualizarusuario", {
    method: "PUT",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => {
      alert("usuario atualizado");
      window.location.href = "login.html";
    })
    .catch((err) => {
      alert(err);
    });
}
