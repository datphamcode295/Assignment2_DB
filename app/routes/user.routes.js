module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
  //update // can name và date_of_birth (ii.1)
// "name":"b",
// "date_of_birth":"1111-11-11 00:00:00"
    router.put("/:id", users.update);

  
    app.use('/api/users', router);
  };
  