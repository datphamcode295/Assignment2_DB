const CreditCard = require("../models/creditCard.model.js");

exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    console.log(req.body);
  
    CreditCard.updateById(
      req.params.id,
      new CreditCard(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found creditCard with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating creditCard with id " + req.params.id
            });
          }
        } else res.send(data);
      }
    );
  };