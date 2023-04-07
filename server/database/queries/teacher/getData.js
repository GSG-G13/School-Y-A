const dbConnection = require("../../config/connection");

const getData = () => {
    return dbConnection.query(`SELECT * FROM teacher ;`);
};


module.exports = {
    getData
};
