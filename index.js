const express = require("express")();
const cors = require("cors");

express.use(cors());

express.get("/", (req, res) => {
  res.send("Express API Version 2");
});

express.listen(2021, () => {
  console.log("Listening in port 2021");
});
