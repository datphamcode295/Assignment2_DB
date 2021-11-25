const TotalOrder = require("../models/totalOrder.model.js");

exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    console.log(req.body);
  
    TotalOrder.updateById(
      req.params.id,
      new TotalOrder(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Order with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating order with id " + req.params.id
            });
          }
        } else res.send(data);
      }
    );
  };
exports.getbycardinaday = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    console.log(req.body);
  
    TotalOrder.findlistbycardinaday(req.params.date,(err,data)=>{
      if(err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
};

exports.getbycardinadaybutfailed = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  TotalOrder.findpaidbycardwithtroubleforoneday(req.params.date,(err,data)=>{
    if(err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};