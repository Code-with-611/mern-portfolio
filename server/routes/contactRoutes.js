// const router = require("express").Router();
// const Contact = require("../models/Contact");

// router.post("/", async (req, res) => {
//   await Contact.create(req.body);
//   res.json("Message sent");
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST message
router.post("/", async (req, res) => {
  try {
    const newMessage = new Contact(req.body);
    await newMessage.save();
    res.status(201).json({ message: "Message Sent Successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});
// GET messages (admin use)
router.get("/", async (req, res) => {
  const messages = await Contact.find().sort({ createdAt: -1 });
  res.json(messages);
});

module.exports = router;
