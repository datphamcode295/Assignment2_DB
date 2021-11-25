const warehouse = require("../models/warehouse.model.js");

exports.getlessthan10books = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    console.log(req.body);
  
    warehouse.findlessthan10perday(req.params.date,(err,data)=>{
      if(err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
};