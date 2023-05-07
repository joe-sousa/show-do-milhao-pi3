const mysql = require("mysql2/promise");

async function connect() {
  if (global.connection && global.connection.state !== "disconnected")
    return global.connection;

  const connection = await mysql.createConnection(
    "mysql://root:root@localhost:3306/showdomilhao"
  );
  console.log("Conectou no MySQL!");
  global.connection = connection;
  return connection;
}

async function selectCustomers() {
  const conn = await connect();
  const [rows] = await conn.query("SELECT * FROM usuario;");
  return rows;
}
async function getPerguntas() {
  const conn = await connect();
  const [rows] = await conn.query(
    "SELECT * FROM perguntas where validacao = 1 order by RAND() LIMIT 7;"
  );
  console.log(rows);
  return rows;
}

async function login(nickname, senha) {
  const conn = await connect();
  const [rows] = await conn.query(
    `SELECT * FROM usuario where nickname="${nickname}" and senha="${senha}" `
  );
  console.log(rows);
  return rows;
}

async function utilizaEliminacao(id) {
  const conn = await connect();
  const sql = `UPDATE usuario set utilizaeliminacao = utilizaeliminacao + 1 where id = ? `;
  const values = [id];
  return await conn.query(sql, values);
}
async function somaPartidasJogadas(id) {
  const conn = await connect();
  const sql = `UPDATE usuario set partidasjogadas = partidasjogadas + 1 where id = ? `;
  const values = [id];
  return await conn.query(sql, values);
}

async function vitoria(id) {
  const conn = await connect();
  const sql = `UPDATE usuario set vitorias  = vitorias  + 1 where id = ? `;
  const values = [id];
  return await conn.query(sql, values);
}

async function salvarpontos(id, pontos) {
  const conn = await connect();
  const sql = `UPDATE usuario set premiacaototal  = premiacaototal  + ? where id = ? `;
  const values = [pontos, id];
  return await conn.query(sql, values);
}

async function derrota(id) {
  const conn = await connect();
  const sql = `UPDATE usuario set derrotas  = derrotas  + 1 where id = ? `;
  const values = [id];
  return await conn.query(sql, values);
}
module.exports = {
  selectCustomers,
  getPerguntas,
  login,
  utilizaEliminacao,
  somaPartidasJogadas,
  vitoria,
  salvarpontos,
  derrota,
};
