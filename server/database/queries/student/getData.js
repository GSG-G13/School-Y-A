const dbConnection = require("../../config/connection");

const getData = () => {
    return dbConnection.query(`SELECT * FROM student ORDER BY id desc;`);
};


module.exports = {
    getData
};
