const { getData } = require("../../database/queries/student/getData");
const { postData } = require("../../database/queries/student/postData");
const { deleteData } = require("../../database/queries/student/deleteData");
const { UpDataData } = require("../../database/queries/student/update");

const getStudent = (req, res) => {
    getData()
        .then(result => {
            res.json(result.rows);
        })
        .catch(err => console.log("err:", err));
};

const postStudent = (req, res) => {
    const studentInfo = req.body;
    postData(studentInfo)
        .then(() => res.redirect("/Add_student.html"))
        .catch(err => console.log("err:", err));
}

const deleteStudent = (req, res) => {
    deleteData(req.params.id)
        .then(() => res.redirect("/Add_student.html"))
        .catch(err => console.log("err:", err))
}

const updataStudent = (req, res) => {
    UpDataData(req.body)
        .then((data) => res.json(data.rows))
        .then(() => res.redirect("/Add_student.html"))
        .catch(err => console.log("err:", err))
}

module.exports = {
    getStudent,
    postStudent,
    deleteStudent,
    updataStudent
};