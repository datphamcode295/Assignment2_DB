const Book = require("../models/book.model.js");

exports.findAllGenre = (req, res) => {
    Book.getAllGenre(req.params.genre,(err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };

exports.findAllAuthor = (req, res) => {
    Book.getAllAuthor(req.params.author,(err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };

  exports.findAllKeyword = (req, res) => {
    Book.getAllKeyword(req.params.keyword,(err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };

  exports.findAllYear = (req, res) => {
    Book.getAllYear(req.params.year,(err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };

  exports.findAllMonth = (req, res) => {
    Book.getAllMonth(req.params.month, req.params.id,(err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };

  exports.findAllTransMonth = (req, res) => {
    Book.getAllTransMonth(req.params.month, req.params.id,(err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };
  exports.findAllCancelMonth = (req, res) => {
    Book.getAllCancelMonth(req.params.month, req.params.id,(err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };
  exports.findAllPendingMonth = (req, res) => {
    Book.getAllPendingMonth(req.params.month, req.params.id,(err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };