module.exports = app => {
    const totalOrders = require("../controllers/totalOrder.controller.js");
  
    var router = require("express").Router();
  
  //update //  (ii.2)
// "ownner_name":"a",
// "bank": "b",
// "bank_branch": "C",
// "expired_day": "1974-10-14 19:39:12"
    router.put("/:id", totalOrders.update);
//(i.3)
//http://localhost:8080/api/totalOrders/status/:id
//khoong can tham so
    router.put("/status/:id", totalOrders.chageStatus);

  
    app.use('/api/totalOrders', router);  
  };
  