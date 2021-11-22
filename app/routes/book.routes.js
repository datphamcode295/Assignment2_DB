module.exports = app => {
    const books = require("../controllers/book.controller.js");
  
    var router = require("express").Router();
  
    //(ii.4)
    // http://localhost:8080/api/books/genre/kid
    router.get("/genre/:genre", books.findAllGenre);
    //(ii.5) 
    // http://localhost:8080/api/books/author/accusamus
    router.get("/author/:author", books.findAllAuthor);
    //(ii.6)
    //http://localhost:8080/api/books/keyword/nam
    router.get("/keyword/:keyword", books.findAllKeyword);
    //(ii.7)
    //http://localhost:8080/api/books/year/2019
    router.get("/year/:year", books.findAllYear);
    //(ii.8)
    //http://localhost:8080/api/books/boughtInMonth/6/254
    router.get("/boughtInMonth/:month/:id", books.findAllMonth);
    //(ii.9)
    //http://localhost:8080/api/books/transInMonth/6/254
    router.get("/transInMonth/:month/:id", books.findAllTransMonth);
    //(ii.10)
    router.get("/cancelInMonth/:month/:id", books.findAllCancelMonth);
    //(ii.11)
    router.get("/pendingInMonth/:month/:id", books.findAllPendingMonth);


    app.use('/api/books', router);
  };
  