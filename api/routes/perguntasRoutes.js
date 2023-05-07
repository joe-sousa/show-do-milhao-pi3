const express = require("express");
const perguntasController = require("../controllers/perguntasController");
const router = express.Router();

router.route("/").get(perguntasController.getPerguntas);

module.exports = router;
