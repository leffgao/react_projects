const db = require("../models");
const Match = db.matches;

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { 'players.code': { $regex: new RegExp(title), $options: "i" } } : {};

  Match.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
