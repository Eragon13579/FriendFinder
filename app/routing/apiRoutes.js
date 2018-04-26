var path = require("path");
var bodyParser = require("body-parser");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    var friends = [
      {
        name: "Aryc",
        gender: "Male",
        age: 21,
      },
      {
        name: "Matthew",
        gender: "Male",
        age: 20,
      },
      {
        name: "Jason",
        gender: "Male",
        age: 20,
      },
      {
        name: "Heather",
        gender: "Female",
        age: 20,
      },
      {
        name: "Alison",
        gender: "Female",
        age: 21,
      },
      {
        name: "Sabrina",
        gender: "Female",
        age: 20,
      },
    ];
    res.json(friends);
  });
  app.post("/api/friends", function(req, res) {});
};
