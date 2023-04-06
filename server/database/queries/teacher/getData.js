const dbConnection = require("../../config/connection");

const getDataa = () => {
    return dbConnection.query(`SELECT * FROM teacher ;`);
};


module.exports = {
    getDataa
};
