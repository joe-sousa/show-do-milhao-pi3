const bodyEstatisticas = document.querySelector("#bodyEstatisticas");
fetch(`http://localhost:3000/api/v1/usuario/estatisticas/${usuario[0].id}`, {
  method: "GET",
  headers: { "Content-type": "application/json; charset=UTF-8" },
})
  .then((response) => response.json())
  .then((json) => {
    let estatisticas = json.estatisticas;
    console.log(estatisticas);
    bodyEstatisticas.innerHTML = `
    <h2>Minhas Estatísticas</h2></br>
     <h2>Vitorias:</h2>
     <p id="vitorias">${estatisticas.vitorias}</p>
      <h2>Derrotas:</h2>
      
      <p id="derrotas">${estatisticas.derrotas}</p>

      <h2>Partidas Paradas:</h2>
      <p id="paradas">${estatisticas.partidas_paradas}</p>
      <h2>Utiliza Eliminação:</h2>
      <p id="eliminacao">${estatisticas.utilizaeliminacao}</p>
      <h2>Pontuação Total:</h2>
      <p id="total">${estatisticas.premiacaototal}</p>
      <h2 >Partidas Jogadas:</h2>
      <p id="jogadas">${estatisticas.partidasjogadas}</p>

      <h2 >Pontos por Partidas:</h2>
      <p id="pontosporpartida">${parseFloat(
        estatisticas.premiacaototal / estatisticas.partidasjogadas
      )}</p>

      <h2 >Porcentagem de Vitorias:</h2>
      <p id="porcevitorias">${parseFloat(
        (estatisticas.vitorias / estatisticas.partidasjogadas) * 100
      )}%</p></br>
      <a href="index.html" type="button" id="voltar" value="submit" class="homebutton"> voltar</a></br></br>
    
    `;
  })
  .catch((err) => console.log(err));
