const app = require("./index");
const dotenv = require("dotenv");
const port = process.env.PORT || 3000;
const db = require("./db");

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
