const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression')
const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./mongodb/config');
connectDB();

const redisClient = require('./redis/config');
redisClient.on('connect', () => {
  console.info('Redis connected!');
});
redisClient.on('error', (err) => {
  console.error('Redis Client Error', err);
});
redisClient.connect().then();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(compression());

const data = require("./routes/api/data/index");

app.use("/api/data", data);

module.exports = app;