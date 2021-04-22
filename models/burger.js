
const orm = require('../config/orm.js')


var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        })
    },
    insertOne: function(cb) {
        orm.insertOne(cb, function (res) {
            cb(res)
        })
    },
    updateOne: function(cb) {
        orm.updateOne(cb, function (res) {
            cb(res)
        })
    },
    deleteOne: function(cb) {
        orm.deleteOne(cb, function (res) {
            cb(res)
        })
    }
}

module.exports = burger