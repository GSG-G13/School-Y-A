const { getData } = require("../../database/queries/student/getData");
const { postData } = require("../../database/queries/student/postData");

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

module.exports = {
    getStudent,
    postStudent
};