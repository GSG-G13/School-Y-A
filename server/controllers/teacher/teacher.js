const { getDataa } = require("../../database/queries/teacher/getData");
const { postDataa } = require("../../database/queries/teacher/postData");

const getDataTeacher = (req, res) => {
    getDataa()
        .then(result => res.json(result.rows))
        .catch(err => console.log("err:", err));

};

const postDataTeacher = (req, res) => {
    const TeacherInfo = req.body;
    postDataa(TeacherInfo)
        .then(() => res.redirect("/Add_teacher.html"))
        .catch(err => console.log("err:", err));
}



module.exports = { getDataTeacher, postDataTeacher };