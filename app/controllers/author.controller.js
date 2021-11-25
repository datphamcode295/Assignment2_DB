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

  exports.bestInDay = (req, res) => {
    Author.bestInDay(req.params.year, req.params.month, req.params.day, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };

  exports.bestInMonth = (req, res) => {
    Author.bestInMonth(req.params.year, req.params.month, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };
  exports.findsamecategory = (req, res) => {
    Author.samecategory(req.params.data, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };
exports.findsamenumberofkeyword = (req, res) => {
    Author.samenumberofkeyword(req.params.data, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };