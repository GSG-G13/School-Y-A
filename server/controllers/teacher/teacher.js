const { getData } = require("../../database/queries/teacher/getData");
const { postData } = require("../../database/queries/teacher/postData");

const getDataTeacher = (req, res) => {
    getData()
        .then(result => res.json(result.rows))
        .catch(err => console.log("err:", err));

};

const postDataTeacher = (req, res) => {
    const TeacherInfo = req.body;
    postData(TeacherInfo)
        .then(() => res.redirect("/Add_teacher.html"))
        .catch(err => console.log("err:", err));
}



module.exports = { getDataTeacher, postDataTeacher };