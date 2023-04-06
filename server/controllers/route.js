const express = require("express");
const { getStudent, postStudent } = require("./student/student");
const { getDataTeacher, postDataTeacher } = require("./teacher/teacher");

const router = express.Router();

router.get("/student", getStudent);
router.post("/student", postStudent)
router.get("/teacher", getDataTeacher);
router.post("/teacher", postDataTeacher);


module.exports = router;
