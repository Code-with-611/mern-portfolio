const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
const { parser } = require("../utils/cloudinary");

//GET ALL PROJECTS 
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// ADD PROJECT WITH IMAGE 
router.post("/", parser.single("image"), async (req, res) => {
  try {
    const projectData = req.body;

    if (req.file) {
      projectData.imageUrl = req.file.path; // Cloudinary URL
    }

    const project = new Project(projectData);
    await project.save();

    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE PROJECT 
router.delete("/:id", async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Project Deleted" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
});

module.exports = router;