const express = require("express");
const router = express.Router();
const { createanswer, getAnswer } = require("./AnswerController");

router.post("/", createanswer);
router.get("/:quastion_id", getAnswer);

module.exports = router;
