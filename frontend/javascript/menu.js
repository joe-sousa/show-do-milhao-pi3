const usuario = JSON.parse(sessionStorage.getItem("usuario"));
const userMenu = document.getElementById("user");
console.log(usuario);
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
    .catch((err) => {
      alert(JSON.stringify(err));
    });
}
