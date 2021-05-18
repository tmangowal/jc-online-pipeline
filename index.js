const express = require("express")();
const cors = require("cors");

express.use(cors());

express.get("/", (req, res) => {
  res.send("Express API");
});

express.listen(2021, () => {
  console.log("Listening in port 2021");
});

// asdasdsdsdssdsdsdsdsdsdsdsdssdsdsdsds