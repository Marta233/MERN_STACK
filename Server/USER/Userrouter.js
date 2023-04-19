// to route purpose
const express = require("express");
const { login, signup } = require("./User.controller");
const router = require("express").Router();

router.post("/Signup", signup);
router.post("/Login", login);
// router.get("/byid", getUserById);
module.exports = router;
