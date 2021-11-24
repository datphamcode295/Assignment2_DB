module.exports = app => {
    const storeInformations = require("../controllers/storeInformation.controller.js");
  
    var router = require("express").Router();
// (i.1 i.2)
// http://localhost:8080/api/storeInformations/update
// {
//     "book_id": 1,
//     "houseware_name": "ad", 
//     "quantity": "4"
// }
    router.put("/update", storeInformations.update);

  
    app.use('/api/storeInformations', router);
  };
  