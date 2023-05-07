const db = require("../db");

exports.login = async (req, res) => {
  console.log(req.body);
  nikname = req.body.nikname;
  senha = req.body.senha;
  console.log(nikname);
  const login = await db.login(nikname, senha);
  res.status(200).json({
    login,
  });
};
