const Author = require("../models/author.model.js");

exports.findOne = (req, res) => {
    Author.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found author with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving author with id " + req.params.id
          });
        }
      } else res.send(data);
    });
  };