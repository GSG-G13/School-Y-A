const express = require("express");
const { getStudent, postStudent, deleteStudent, updataStudent } = require("./student/student");
const { getDataTeacher, postDataTeacher, deleteTeacher, updataTeaher } = require("./teacher/teacher");

const router = express.Router();

router.get("/student", getStudent);
router.post("/student", postStudent)
router.delete("/student/:id", deleteStudent);
router.put("/student", updataStudent)


router.get("/teacher", getDataTeacher);
router.post("/teacher", postDataTeacher);
router.delete("/teacher/:id", deleteTeacher);
router.put("/teacher", updataTeaher)


module.exports = router;
