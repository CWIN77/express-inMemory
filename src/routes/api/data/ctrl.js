const asyncHandler = require('express-async-handler');
const Goal = require("../../../mongodb/models/goalModel");
const redisClient = require('../../../redis/config');

const setData = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const goal = await Goal.create({
    text: req.body.text
  });
  res.status(200).json({ data });
});

const getDatas = asyncHandler(async (req, res) => {
  // const goal = await Goal.find();
  const redisCli = redisClient.v4;
  await redisCli.set('test', '12345678');
  const redisData = await redisCli.get('test');
  res.status(200).json(redisData);
});

const updateData = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });

  res.status(200).json("updateData");
});

module.exports = { setData, getDatas, updateData };