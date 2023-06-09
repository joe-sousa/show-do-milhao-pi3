const express = require("express");
const usuarioController = require("../controllers/usuarioController");
const router = express.Router();

router.route("/utilizaeliminacao").put(usuarioController.utilizaEliminacao);
router.route("/somapartidas").put(usuarioController.somaPartidas);
router.route("/vitoria").put(usuarioController.vitoria);
router.route("/salvarpontos").put(usuarioController.salvarpontos);
router.route("/derrota").put(usuarioController.derrota);
router.route("/somapartidasparadas").put(usuarioController.somaPartidasParadas);
router.route("/cadastrarusuario").post(usuarioController.cadastrarUsuario);
router.route("/apagarusuario").delete(usuarioController.apagarUsuario);
router.route("/estatisticas/:id").get(usuarioController.getEstatisticasUsuario);

router.route("/halldafama").get(usuarioController.getHallDaFama);

router.route("/atualizarusuario").put(usuarioController.atualizarUsuario);
module.exports = router;
