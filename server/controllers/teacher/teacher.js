const { getData } = require("../../database/queries/teacher/getData");
const { postData } = require("../../database/queries/teacher/postData");
const { deleteData } = require("../../database/queries/teacher/deleteData");
const { UpDataData } = require("../../database/queries/teacher/update");

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

const deleteTeacher = (req, res) => {
    deleteData(req.params.id)
        .then(() => res.redirect("/Add_teacher.html"))
        .catch(err => console.log("err:", err))
}

const updataTeaher = (req, res) => {
    UpDataData(req.body)
        .then((data) => res.json(data.rows))
        .then(() => res.redirect("/add_teacher.html"))
        .catch(err => console.log("err:", err))
}


module.exports = { getDataTeacher, postDataTeacher, deleteTeacher, updataTeaher };