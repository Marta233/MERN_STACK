const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT;
const dbo = require("./db/conn");
const App = express();
const quastionroute = require("./Quastion/QuationRoute");
const answerrouter = require("./Answer/AnswerRoute");
const userroute = require("./USER/Userrouter");
App.use(cors());
App.use(express.json());
// get driver connection
// const dbo = require("./db/conn");

App.use("/api/quastion", quastionroute);
App.use("/api/answer", answerrouter);
App.use("/api/user", userroute);
App.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
