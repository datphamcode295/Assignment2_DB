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

  exports.findAllPurchaseInDay = (req, res) => {
    Book.getAllPurchaseInDay(req.params.year, req.params.month, req.params.day, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };

  exports.findAllCountPurchaseInDay = (req, res) => {
    Book.getAllCountPurchaseInDay(req.params.year, req.params.month, req.params.day, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };

  exports.findAllCountPurchaseDigitalInDay = (req, res) => {
    Book.getAllCountPurchaseDigitalInDay(req.params.year, req.params.month, req.params.day, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };

  exports.findAllCountPurchaseNonDigitalInDay = (req, res) => {
    Book.getAllCountPurchaseNonDigitalInDay(req.params.year, req.params.month, req.params.day, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };

  exports.countLendInDay = (req, res) => {
    Book.countLendInDay(req.params.year, req.params.month, req.params.day, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };

  exports.mostBoughInMonth = (req, res) => {
    Book.mostBoughInMonth(req.params.year, req.params.month, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };
  /////dang

  exports.findallbookperwarehouse = (req, res) => {
    Book.allbooksperwarehouse(req.params.month, req.params.year,(err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };

  exports.findexportedinamonth = (req, res) => {
    Book.mostexportedbookinmonth(req.params.month, req.params.year,(err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };

  exports.findgenrepurchasedinmonth = (req, res) => {
    Book.getbookbygenre(req.params.month, req.params.year,(err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };
  exports.findmostbookpurchased = (req, res) => {
    Book.mostbookspuschased(req.params.month, req.params.year,req.params.id_user,(err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };
  exports.findprintedandebookmade = (req, res) => {
    Book.getprintedandebookmade (req.params.month, req.params.year,req.params.id_user,(err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };