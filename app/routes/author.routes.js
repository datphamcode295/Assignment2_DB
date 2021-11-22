module.exports = app => {
    const authors = require("../controllers/author.controller.js");
  
    var router = require("express").Router();
  
  
    router.get("/:id", authors.findOne);
  
    app.use('/api/authors', router);
  };
  
  