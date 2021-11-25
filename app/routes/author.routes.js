module.exports = app => {
    const authors = require("../controllers/author.controller.js");
  
    var router = require("express").Router();
  
  
    router.get("/:id", authors.findOne);
    
    router.get("/samecategory/:data",authors.findsamecategory);
    //http://localhost:8080/api/authors/samekeyword/nam/
    router.get("/samekeyword/:data",authors.findsamenumberofkeyword);


    app.use('/api/authors', router);
  };
  
  