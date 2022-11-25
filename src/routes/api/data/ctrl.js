const asyncHandler = require('express-async-handler');
const fs = require('fs');

const setData = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const { data } = JSON.parse(fs.readFileSync('./IMDB.json').toString());
  data.push({ text: req.body.text });
  fs.writeFileSync('./IMDB.json', JSON.stringify({ data }));
  res.status(200).json({ data });
});

const getDatas = asyncHandler(async (req, res) => {
  if (!fs.existsSync('./IMDB.json')) {
    fs.writeFileSync('./IMDB.json', JSON.stringify({ data: [] }));
  }
  const { data } = JSON.parse(fs.readFileSync('./IMDB.json').toString());

  res.status(200).json(data);
});

const updateData = asyncHandler(async (req, res) => {
  // const data = await sampleData.findById(req.params.id);
  // if (!data) {
  //   res.status(400);
  //   throw new Error("Goal not found");
  // }
  // const updateData = await sampleData.findByIdAndUpdate(req.params.id, req.body, { new: true });

  res.status(200).json("updateData");
});

module.exports = { setData, getDatas, updateData };