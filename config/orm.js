const connection = require("../config/connection");

const orm = {
    selectAll: function (tableInput, cb) {
        const queryString = "SELECT * FROM ??;";
        connection.query(queryString, tableInput, (err, result) => {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },

    insertOne: function (burger, cb) {
        const queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, 0);";
        connection.query(queryString, burger, (err, result) => {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    updateOne: function (burgerId, cb) {
        const queryString = "UPDATE burgers SET devoured = 1 WHERE id = ?;";
        connection.query(queryString, burgerId, (err, result) => {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    deleteOne: function (burgerId, cb) {
        const queryString = "DELETE FROM burgers WHERE id = ?;";
        connection.query(queryString, burgerId, (err, result) => {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    }
};

module.exports = orm;