const dbConnection = require("../../config/connection");

const UpDataData = ({ name, email, address, subject, id }) => {
    const sql = {
        text: "UPDATE  teacher SET name = $1 , email = $2 , address = $3 , subject = $4 where id = $5",
        values: [name, email, address, subject, id]
    };
    return dbConnection.query(sql);
};

module.exports = {
    UpDataData
};
