const express = require("express");
const router = express.Router();
const {
  createquastion,
  getQuastions,
  getQuastion,
} = require("./QuastionController");
const requireAuth = require("../Middleware/middleauth");

router.use(requireAuth);

router.post("/", createquastion);
router.get("/", getQuastions);
router.get("/:id", getQuastion);

module.exports = router;
