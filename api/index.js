const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const uploadImages = require("./uploadImage");
const perguntasRoutes = require("./routes/perguntasRoutes");
const loginRoutes = require("./routes/loginRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");

app.use(
  cors({
    origin: "*",
  })
);
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/v1/perguntas", perguntasRoutes);
app.use("/api/v1/login", loginRoutes);
app.use("/api/v1/usuario", usuarioRoutes);

app.post(
  "/api/v1/upload-image",
  uploadImages.single("name"),
  async (req, res) => {
    if (req.file) {
      console.log(req.file);
      return res.json({
        erro: false,
        mensagem: "Upload realizado com sucesso!",
        file: req.file,
      });
    }

    return res.status(400).json({
      erro: true,
      mensagem:
        "Erro: Upload não realizado com sucesso, necessário enviar uma imagem PNG ou JPG!",
    });
  }
);

module.exports = app;
