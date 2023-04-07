const dbConnection = require("../../config/connection");

const UpDataData = ({ name, birthdate, subject, id }) => {
    const sql = {
        text: "UPDATE  student SET name = $1 , birthdate = $2 , subject = $3 where id = $4",
        values: [name, birthdate, subject, id]
    };
    return dbConnection.query(sql);
};

module.exports = {
    UpDataData
};
