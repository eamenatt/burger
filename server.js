const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");




// Routes
const routes = require("./controllers/burgers_controllers.js");
app.use(routes);

app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});