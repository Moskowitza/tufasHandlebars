// Controller for our Boulder Problems
// ============================
var db = require("../models");
db.Problem.create({"wall":"string",
"grade": "string","color": "string","setter": "string"});

module.exports = {
  // Find all headlines, sort them by date, send them back to the user
  findAll: function(req, res) {
    db.Problem
      .find(req.query)
      .then(function(dbProblem) {
        res.json(dbProblem);
      });
  },
  // // Delete the specified headline
  // delete: function(req, res) {
  //   db.Problem.remove({ _id: req.params.id }).then(function(dbProblem) {
  //     res.json(dbProblem);
  //   });
  // },
  // // Update the specified headline
  // update: function(req, res) {
  //   db.Problem.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(function(dbProblem) {
  //     res.json(dbProblem);
  //   });
  // }
};
