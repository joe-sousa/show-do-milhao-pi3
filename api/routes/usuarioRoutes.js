const express = require("express");
const usuarioController = require("../controllers/usuarioController");
const router = express.Router();

router.route("/utilizaeliminacao").put(usuarioController.utilizaEliminacao);
router.route("/somapartidas").put(usuarioController.somaPartidas);
router.route("/vitoria").put(usuarioController.vitoria);
router.route("/salvarpontos").put(usuarioController.salvarpontos);
router.route("/derrota").put(usuarioController.derrota);
module.exports = router;
