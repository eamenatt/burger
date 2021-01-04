const express = require("express");
const burger = require("../models/burger.js");

//Router
const router = express.Router()

router.get("/", function (req, res) {
    burger.all(data => {
        let burger = {
            burgers: data
        };
        console.log(burger);
        res.render("index", burger)
    });
});

router.put("/api/burger/:id", function (req, res) {
    burger.update(req.params.id, () => {
        res.end();
    });
})

router.post("/api/burger", function (req, res) {
    burger.create(req.body.burgerName, () => {
        res.end();
    });
});

router.delete("/api/burger/:id", function (req, res) {
    burger.delete(req.params.id, () => {
        res.end();

    });
});

//export
module.exports = router;