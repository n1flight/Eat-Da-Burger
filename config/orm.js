const connection = require("./connection.js")

const orm = {
    selectAll: function (tableName, cb) {
        connection.query('SELECT * FROM ??', tableName, function (err, data) {
            if (err) throw err
            cb(data)
        })
    },
    insertOne: function (burger_name) {
        connection.query(`INSERT INTO burgers (burger_name, devoured) VALUES (?, false);`, [burger_name], (err, data) => {
            if (err) throw err
        })
    },
    updateOne: function (id) {
        var sql = `UPDATE burgers SET devoured= 1 WHERE id = ?`
        connection.query(sql, [id], function (err, result) {
            if (err) throw err;
        });
    },
    deleteOne: function (id) {
        var sql = "DELETE FROM burgers WHERE id = ?";
        connection.query(sql, [id], function (err, result) {
            if (err) {
                throw err;
            }
        });
    }
}


module.exports = orm;