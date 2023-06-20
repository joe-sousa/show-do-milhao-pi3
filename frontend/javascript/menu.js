let usuario = JSON.parse(sessionStorage.getItem("usuario"));
const userMenu = document.getElementById("user");
const sair = document.getElementById("sair");
console.log(usuario[0].avatar);
if (!usuario) {
  window.location.href = "login.html";
}
userMenu.innerHTML = `Bem Vindo(a): ${usuario[0].nickname}`;
console.log(usuario[0]);

function jogar() {
  fetch(`http://localhost:3000/api/v1/perguntas`, {
    method: "GET",
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json.perguntas);
      perguntas = JSON.stringify(json.perguntas);
      console.log(usuario[0].id);
      somaPartidas(usuario[0].id);
      sessionStorage.setItem("perguntas", perguntas);
      window.location.href = "perguntas.html";
    })
    .catch((err) => console.log(err));
}

function somaPartidas(id) {
  const data = {
    id: id,
  };
  fetch(`http://localhost:3000/api/v1/usuario/somapartidas`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => {
      //alert(JSON.stringify(json));
    })
    .catch((err) => {});
}

const imagemPerfil = document.getElementById("img");
imagemPerfil.style.backgroundImage = `url('../api/${usuario[0].avatar}')`;

sair.onclick = () => {
  usuario = null;
  window.location.href = "login.html";
};

function apagarConta() {
  if (confirm("deseja realmente apagar a conta?")) {
    const data = {
      id: usuario[0].id,
    };
    fetch(`http://localhost:3000/api/v1/usuario/apagarusuario`, {
      method: "delete",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
        alert("a conta foi excluída");
        window.location.href = "login.html";
      })
      .catch((err) => {});
  }
}
