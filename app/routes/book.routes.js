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
    ////http://localhost:8080/api/books/allbookinwarehouse/5/2020/
    router.get("/allbookinwarehouse/:month/:year", books.findallbookperwarehouse);
    ////http://localhost:8080/api/books/exportedbook/12/1974/
    router.get("/exportedbook/:month/:year", books.findexportedinamonth);
    /////http://localhost:8080/api/books/findgenrebook/06/1989/
    router.get("/findgenrebook/:month/:year", books.findgenrepurchasedinmonth);
    ////http://localhost:8080/api/books//findmostbook/11/2006/149/
    router.get("/findmostbook/:month/:year/:id_user",books.findmostbookpurchased);
    ///http://localhost:8080/api/books//allbookmade/11/2006/149
    router.get("/allbookmade/:month/:year/:id_user",books.findprintedandebookmade);


    app.use('/api/books', router);
  };
  