const router = require("express").Router();
const Project = require("../models/Project");
const auth = require("../middleware/auth");

router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

router.post("/", auth, async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.json(project);
});

router.delete("/:id", auth, async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json("Project deleted");
});

module.exports = router;
