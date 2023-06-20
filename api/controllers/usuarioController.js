const db = require("../db");

exports.utilizaEliminacao = async (req, res) => {
  const eliminacao = await db.utilizaEliminacao(req.body.id);
  console.log("id = " + req.body.id);
  res.status(200).json({
    usuario: eliminacao,
  });
};

exports.somaPartidas = async (req, res) => {
  const partidas = await db.somaPartidasJogadas(req.body.id);
  console.log(req.body.id);
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

exports.apagarUsuario = async (req, res) => {
  const resultado = await db.apagarUsuario(req.body.id);

  res.status(200).json({
    usuario: resultado,
  });
};

exports.getEstatisticasUsuario = async (req, res) => {
  console.log(req.params);
  const estatisticas = await db.getEstatisticasUsuario(req.params.id);

  res.status(200).json({
    estatisticas: estatisticas[0],
  });
};

exports.getHallDaFama = async (req, res) => {
  const hallDaFama = await db.getHallDaFama();
  res.status(200).json({
    data: hallDaFama,
  });
};
exports.atualizarUsuario = async (req, res) => {
  const novoUsuario = await db.atualizarUsuario(
    req.body.nickname,
    req.body.nome,
    req.body.senha,
    req.body.avatar,
    req.body.id
  );
  console.log(novoUsuario);
  res.status(200).json({
    status: "usuario atualizado com sucesso",
  });
};
