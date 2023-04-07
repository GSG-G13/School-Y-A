const dbConnection = require("../../config/connection");

const deleteData = (id) => {
    let sql = {
        text: 'delete from student where id = $1',
        values: [id]
    }
    return dbConnection.query(sql);
}

module.exports = { deleteData };