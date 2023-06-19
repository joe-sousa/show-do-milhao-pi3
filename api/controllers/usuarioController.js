const db = require("../db");

exports.utilizaEliminacao = async (req, res) => {
  const eliminacao = await db.utilizaEliminacao(req.body.id);
  res.status(200).json({
    usuario: eliminacao,
  });
};

exports.somaPartidas = async (req, res) => {
  const partidas = await db.somaPartidasJogadas(req.body.id);
  console.log(partidas);
  res.status(200).json({
    usuario: partidas,
  });
};

exports.vitoria = async (req, res) => {
  const partidas = await db.vitoria(req.body.id);
  res.status(200).json({
    usuario: partidas,
  });
};

exports.salvarpontos = async (req, res) => {
  const pontos = await db.salvarpontos(req.body.id, req.body.pontos);
  res.status(200).json({
    usuario: pontos,
  });
};

exports.derrota = async (req, res) => {
  const derrota = await db.derrota(req.body.id);
  res.status(200).json({
    usuario: derrota,
  });
};
exports.somaPartidasParadas = async (req, res) => {
  const partida = await db.somaPartidasParadas(req.body.id);
  res.status(200).json({
    usuario: partida,
  });
};

exports.cadastrarUsuario = async (req, res) => {
  const cadastro = await db.cadastrarUsuario(
    req.body.nome,
    req.body.nickname,
    req.body.senha,
    req.body.avatar
  );
  res.status(200).json({
    usuario: cadastro,
  });
};
