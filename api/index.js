const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

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

module.exports = app;
