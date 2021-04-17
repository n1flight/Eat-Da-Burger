var express = require('express')
var router = express.Router();
var burger = require('../models/burger.js')

router.get("/", function (req, res) {
    burger.selectAll(function (data, cb) {
        var object = {
            burgers: data
        };
        object = object["burgers"]
        console.log(object)
        res.render('index', { object })

    })
})
router.post("/api/burgers", function (req, res) {
    var burger_name = req.body.burger_name
    burger.insertOne(burger_name),function (result) {
    burger.insertOne([burger_name], [req.body.burger_name], function (result) {
    })
    }
})
router.put("/api/burgers/:id", function (req, res){
    burger.updateOne([req.params.id], req.params.id), function (result) {
    }
})
router.delete("/api/burgers/:id", function (req, res) {
    var id = req.params.id
    console.log(req.params.id)
    burger.deleteOne(id), function (result) {
        console.log(result)
    }
})

module.exports = router;