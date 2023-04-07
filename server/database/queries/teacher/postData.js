const dbConnection = require("../../config/connection");

const postData = userData => {

    const { name, email, address, subject } = userData;
    console.log(userData);
    const sql = {
        text: "INSERT INTO teacher (name, email, address, subject) VALUES ($1, $2, $3, $4) ;",
        values: [name, email, address, subject]
    }
    return dbConnection.query(sql);
}

module.exports = { postData }