const app = require("./src/app");
const PORT = process.env.PORT || 8080;

// console.log(`Worker ${process.pid} started`);
app.listen(PORT, () => {
  console.log(`Server on : http://localhost:${PORT}`);
});
