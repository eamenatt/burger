const orm = require("../config/orm");

var burgers = {

    all: function (cb) {
        orm.select("burgers", function (res) {
            cb(res);
        });
    },
   
    create: function (burger, cb) {
        orm.insert(burger, function (res) {
            cb(res);
        });
    },
    update: function (burgerId, cb) {
        orm.update(burgerId, function (res) {
            cb(res);
        });
    },
    delete: function (burgerId, cb) {
        orm.delete(burgerId, function (res) {
            cb(res);
        });
    }
};

module.exports = burgers;