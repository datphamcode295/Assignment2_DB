const StoreInformation = require("../models/storeInformation.model.js");

exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    console.log(req.body);
  
    StoreInformation.updateById(
      new StoreInformation(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found User with id ${req.body.book_id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating User with id " + req.body.book_id
            });
          }
        } else res.send(data);
      }
    );
  };