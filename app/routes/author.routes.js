module.exports = app => {
    const authors = require("../controllers/author.controller.js");
  
    var router = require("express").Router();
  
  
    router.get("/:id", authors.findOne);
    //(i.9)
    //http://localhost:8080/api/authors/bestInDay/2006/11/30
    router.get("/bestInday/:year/:month/:day", authors.bestInDay);
    //(i.10)
    //http://localhost:8080/api/authors/bestInMonth/2006/11
    router.get("/bestInMonth/:year/:month", authors.bestInMonth);

    ///dang
    router.get("/samecategory/:data",authors.findsamecategory);
    //http://localhost:8080/api/authors/samekeyword/nam/
    router.get("/samekeyword/:data",authors.findsamenumberofkeyword);

  
    app.use('/api/authors', router);
  };


  
  