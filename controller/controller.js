const express = require("express");
const router = express.Router()
// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create Routes
router.get("/", function (req, res) {
    burger.all(data => {
        let burger = {
            burgers: data
        };
        console.log(burger);
        res.render("index", burger)
    });
});

router.post("/api/burger", function (req, res) {
    burger.create(req.body.burgerName, () => {
        res.end();
    });
});

router.put("/api/burger/:id", function (req, res) {
    burger.update(req.params.id, () => {
        res.end();
    });
})

router.delete("/api/burger/:id", function (req, res) {
    burger.delete(req.params.id, () => {
        res.end();

    });
});

module.exports = router;