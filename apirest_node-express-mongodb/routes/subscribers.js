const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscriber");

//Getting all
router.get("/", (req, res) => {
  res.send("Hello world");
});

//Getting one
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

//Creating one
router.post("/", (req, res) => {});

//Updating one
router.patch("/", (req, res) => {});

//Deleting one
router.delete("/", (req, res) => {});

module.exports = router;
