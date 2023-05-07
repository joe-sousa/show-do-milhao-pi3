const db = require("../db");
exports.getPerguntas = async (req, res) => {
  const perguntas = await db.getPerguntas();
  res.status(200).json({
    perguntas,
  });
};
