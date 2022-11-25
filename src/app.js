const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression')
const dotenv = require('dotenv');

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(compression());

const data = require("./routes/api/data/index");

app.use("/api/data", data);

module.exports = app;
