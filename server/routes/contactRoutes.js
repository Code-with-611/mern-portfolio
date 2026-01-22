// const router = require("express").Router();
// const Contact = require("../models/Contact");

// router.post("/", async (req, res) => {
//   await Contact.create(req.body);
//   res.json("Message sent");
// });

// module.exports = router;

import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const contact = await Contact.create(req.body);
  res.status(201).json(contact);
});

export default router;
