const skills = document.querySelector(".skills");
const projects = document.querySelector(".projects");
const checkBox = document.getElementById("toggle__checkbox");
const tabela = document.getElementById("tabela");
projects.style.display = "none";

checkBox.addEventListener("click", () => {
  if (checkBox.checked) {
    console.log("checked");
    skills.classList.toggle("fadeOut");
    skills.classList.toggle("fadeIn");
    projects.classList.toggle("fadeOut");
    projects.classList.toggle("fadeIn");
    hallDaFama();
    setTimeout(() => {
      skills.style.display = "none";
      projects.style.display = "";
    }, 300);
  } else {
    // skills.style.display = "";
    skills.classList.toggle("fadeIn");
    skills.classList.toggle("fadeOut");
    projects.classList.toggle("fadeIn");
    projects.classList.toggle("fadeOut");

    setTimeout(() => {
      projects.style.display = "none";
      skills.style.display = "";
    }, 300);
  }
});

function hallDaFama() {
  fetch(`http://localhost:3000/api/v1/usuario/halldafama`, {
    method: "GET",
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => {
      let posicao = 1;
      tabela.innerHTML = " ";
      json.data.forEach((element) => {
        console.log(element);
        tabela.innerHTML += `
        <tr>
            <td>${posicao++}</td>
            <td>${element.nickname}</td>
            <td>${element.premiacaototal}</td>
        </tr>
        `;
      });
    });
}
