const form = document.forms;
const nickname = form[0].nick;
const senha = form[0].senha;
const btn = document.getElementById("login");
const url = `http://localhost:3000/api/v1/login`;

btn.onclick = () => {
  let data = {
    nikname: nickname.value,
    senha: senha.value,
  };
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json.login);
      if (json.login.length === 0) {
        alert("senha ou email incorretos");
      } else {
        login = JSON.stringify(json.login);
        sessionStorage.setItem("usuario", login);
        window.location.href = "index.html";
      }
    })
    .catch((err) => console.log(err));
};
