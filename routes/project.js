var express = require("express");
const { requireSignin } = require("../controllers/auth.controllers");
const { createProject, updateProject, readProject, readAllProject } = require("../controllers/project.controllers");
var router = express.Router();

router.post("/project/create", requireSignin, createProject);
router.post("/project/update", requireSignin, updateProject);
router.get("/project/read",requireSignin, readProject );
router.get("/project/readAll", readAllProject );

module.exports = router;
