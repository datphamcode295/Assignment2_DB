module.exports = app => {
    const creditCards = require("../controllers/creditCard.controller.js");
  
    var router = require("express").Router();
  
  //update //  (ii.2)
// "ownner_name":"a",
// "bank": "b",
// "bank_branch": "C",
// "expired_day": "1974-10-14 19:39:12"
    router.put("/:id", creditCards.update);

  
    app.use('/api/creditCards', router);  
  };
  