const express = require("express");

const {
  postProject,
  getAllProjects,
  getSingleProject,
  deleteProject,
  updateProject,
} = require("../controllers/projectController");
const requireAuth = require("../middlewares/requireAuth");

const router = express.Router();

router.use(requireAuth);

router.get("/", getAllProjects);

router.get("/:id", getSingleProject);

router.post("/", postProject);

router.delete("/:id", deleteProject);

router.patch("/:id", updateProject);

module.exports = router;
