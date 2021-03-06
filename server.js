var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

var friends = [
  {
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000,
  },
  {
    routeName: "darthmaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200,
  },
  {
    routeName: "obiwankenobi",
    name: "Obi Wan Kenobi",
    role: "Jedi Master",
    age: 55,
    forcePoints: 1350,
  },
];

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
