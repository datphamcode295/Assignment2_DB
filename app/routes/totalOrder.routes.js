module.exports = app => {
    const totalOrders = require("../controllers/totalOrder.controller.js");
  
    var router = require("express").Router();
  
  //update //  (ii.2)
// "ownner_name":"a",
// "bank": "b",
// "bank_branch": "C",
// "expired_day": "1974-10-14 19:39:12"
    router.put("/:id", totalOrders.update);
    ///http://localhost:8080/api/totalOrders/1999-07-24%2022:42:00/
    router.get("/getbycardinaday/:date", totalOrders.getbycardinaday);
    //http://localhost:8080/api/totalOrders/getbycardinadaybutfailed/1976-08-13%2009:24:00/
    router.get("/getbycardinadaybutfailed/:date", totalOrders.getbycardinadaybutfailed);




    app.use('/api/totalOrders', router);  
};
  