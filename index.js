const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "pug");
app.enable("trust proxy");

const PORT = 4000 || process.env.PORT;

const Line = require("./routers/LineMessage");

app.use(cors());
app.use("/lineMessage", Line);

app.listen(PORT, () => {
  console.log(`Sever is running on ${PORT}`);
});