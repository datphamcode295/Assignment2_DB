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
    //(i.4)
    // http://localhost:8080/api/books//pucharseInday/2006/11/30
    router.get("/pucharseInday/:year/:month/:day", books.findAllPurchaseInDay);
    //(i.5)
    //http://localhost:8080/api/books//countPucharseInday/2006/11/30
    router.get("/countPucharseInday/:year/:month/:day", books.findAllCountPurchaseInDay);
    //(i.6)
    // http://localhost:8080/api/books//countPucharseDigitalInday/2006/11/30
    router.get("/countPucharseNonDigitalInday/:year/:month/:day", books.findAllCountPurchaseNonDigitalInDay);
    //(i.7)
    // http://localhost:8080/api/books//countPucharseDigitalInday/2006/11/30
    router.get("/countPucharseDigitalInday/:year/:month/:day", books.findAllCountPurchaseDigitalInDay);
    //(i.8)
    //http://localhost:8080/api/books//countLendInDay/2006/11/30
    router.get("/countLendInday/:year/:month/:day", books.countLendInDay);
    //(i.11)
    //http://localhost:8080/api/books/mostBoughInMonth/2006/11
    router.get("/mostBoughInMonth/:year/:month", books.mostBoughInMonth);
    ////dang
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
  