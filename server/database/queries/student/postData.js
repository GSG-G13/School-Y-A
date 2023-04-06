const dbConnection = require("../../config/connection");

const postData = userData => {
    const { name, birthdate, subject } = userData;
    const sql = {
        text: "INSERT INTO student (name, birthdate , subject) VALUES ($1, $2, $3) RETURNING * ;",
        values: [name, birthdate, subject]
    };
    return dbConnection.query(sql);
};

module.exports = {
    postData
};
