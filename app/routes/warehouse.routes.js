const warehouse = require("../models/warehouse.model.js");

module.exports = app => {
    const warehouses = require("../controllers/warehouse.controller.js");
  
    var router = require("express").Router();
  
  //update //  (ii.2)
// "ownner_name":"a",
// "bank": "b",
// "bank_branch": "C",
// "expired_day": "1974-10-14 19:39:12"
    ///router.put("/:id", totalOrders.update);
    http://localhost:8080/api/warehouses/getlessthan10books/1989-06-18%2004:48:36/
    router.get("/getlessthan10books/:date", warehouses.getlessthan10books);
    

    app.use('/api/warehouses', router);  
};
  