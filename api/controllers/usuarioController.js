const db = require("../db");

exports.utilizaEliminacao = async (req, res) => {
  const eliminacao = await db.utilizaEliminacao(req.body.id);
  res.status(200).json({
    usuario: eliminacao,
  });
};

exports.somaPartidas = async (req, res) => {
  const partidas = await db.somaPartidasJogadas(req.body.id);
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
