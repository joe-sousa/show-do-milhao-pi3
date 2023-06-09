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
  return rows;
}

async function login(nickname, senha) {
  const conn = await connect();
  const [rows] = await conn.query(
    `SELECT * FROM usuario where nickname="${nickname}" and senha="${senha}" `
  );

  return rows;
}
async function getEstatisticasUsuario(id) {
  const conn = await connect();
  const [rows] = await conn.query(`
    SELECT perguntasadc, perguntasadc, partidasjogadas, premiacaototal,
    utilizaeliminacao, derrotas, partidas_paradas, vitorias FROM
    usuario WHERE id = ${id}
  `);
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
async function somaPartidasParadas(id) {
  const conn = await connect();
  const sql = `UPDATE usuario set partidas_paradas  = partidas_paradas  + 1 where id = ? `;
  const values = [id];
  return await conn.query(sql, values);
}
async function derrota(id) {
  const conn = await connect();
  const sql = `UPDATE usuario set derrotas  = derrotas  + 1 where id = ? `;
  const values = [id];
  return await conn.query(sql, values);
}

async function cadastrarUsuario(nome, nickname, senha, avatar) {
  const conn = await connect();
  const sql = `insert into usuario (nome, nickname, senha, avatar, derrotas, perguntasadc, perguntasnaoadc, partidasjogadas, premiacaototal, utilizaeliminacao, partidas_paradas)
  values (?,?,?,?, ?, ?, ?, ?, ?, ?,?)
  `;
  const values = [nome, nickname, senha, avatar, 0, 0, 0, 0, 0, 0, 0];
  return await conn.query(sql, values);
}

async function apagarUsuario(id) {
  const conn = await connect();

  const sql = `delete from usuario where id = ?`;
  const values = [id];

  return await conn.query(sql, values);
}

async function getHallDaFama() {
  const conn = await connect();
  const [rows] = await conn.query(`
  SELECT * FROM usuario order by premiacaototal DESC
  `);
  return rows;
}

async function atualizarUsuario(nickanme, nome, senha, avatar, id) {
  const conn = await connect();
  const sql = `
  UPDATE usuario set nickname = ?, nome = ?, senha = ?, avatar = ? where id = ?
  `;
  const values = [nickanme, nome, senha, avatar, id];
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
  somaPartidasParadas,
  cadastrarUsuario,
  apagarUsuario,
  getEstatisticasUsuario,
  getHallDaFama,
  atualizarUsuario,
};
