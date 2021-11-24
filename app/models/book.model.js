const sql = require("./db.js");


// constructor
const Book = function(book) {
  this.isbn = book.isbn,
  this.title = book.title,
  this.isDigital = book.isDigital,
  this.genre = book.genre,
  this.status = book.status,
  this.year_of_publication = book.year_of_publication

};


Book.getAllGenre = (genre,result) => {
    sql.query(`SELECT * FROM books WHERE Genre = "${genre}"`,(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("books: ", res);
      result(null, res);
    });
  };

Book.getAllAuthor = (author,result) => {
    sql.query(`
    SELECT al.* 
    FROM (
    SELECT * FROM
    book_writer AS bw
    JOIN books AS b
    ON bw.ID_information = b.ISBN
    ) AS al
    JOIN author AS a
    ON a.ID = al.Author_ID
    WHERE a.name = '${author}';
    `,(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("books: ", res);
      result(null, res);
    });
  };

  Book.getAllKeyword = (keyword,result) => {
    sql.query(`
    SELECT * 
    FROM books b
    JOIN keywords kw
    ON b.ISBN = kw.Book_ID
    WHERE kw.keywords = '${keyword}';
    `,(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("books: ", res);
      result(null, res);
    });
  };

  Book.getAllYear = (year,result) => {
    let endyear= parseInt(year) +1;
    sql.query(`
    SELECT * FROM books
    WHERE books.Year_of_publication > '${year}-01-01' AND books.Year_of_publication < '${endyear}-01-01'
    `,(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("booka: ", res);
      result(null, res);
    });
  };

  Book.getAllMonth = (month,id,result) => {
    let endmonth= parseInt(month) +1;

    month = month>10?month:"0"+month;
    endmonth = endmonth>10?endmonth:"0"+endmonth;

    sql.query(`
    SELECT * FROM(
        SELECT * 
        FROM total_order AS t
        NATURAL JOIN sub_order AS s
        WHERE t.Status = 'successful') inf
        JOIN books AS b
        ON b.ISBN = inf.ISBN
        WHERE inf.Date > '1989-${month}-00' AND inf.Date < '1989-${endmonth}-00' AND inf.ID_user = ${id};
    `,(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("booka: ", res);
      result(null, res);
    });
  };

  Book.getAllTransMonth = (month,id,result) => {
    let endmonth= parseInt(month) +1;

    month = month>10?month:"0"+month;
    endmonth = endmonth>10?endmonth:"0"+endmonth;

    sql.query(`
    SELECT * FROM 
    total_order
    WHERE Date > '1989-${month}-00' AND date < '1989-${endmonth}-00'  AND ID_user = ${id};
    `,(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("booka: ", res);
      result(null, res);
    });
  };

  Book.getAllCancelMonth = (month,id,result) => {
    let endmonth= parseInt(month) +1;

    month = month>10?month:"0"+month;
    endmonth = endmonth>10?endmonth:"0"+endmonth;

    sql.query(`
    SELECT * FROM 
    total_order
    WHERE Date > '1989-${month}-00' AND date < '1989-${endmonth}-00' AND Status = 'cancel' AND ID_user = ${id};
    `,(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("booka: ", res);
      result(null, res);
    });
  };

  Book.getAllPendingMonth = (month,id,result) => {
    let endmonth= parseInt(month) +1;

    month = month>10?month:"0"+month;
    endmonth = endmonth>10?endmonth:"0"+endmonth;

    sql.query(`
    SELECT * FROM 
    total_order
    WHERE Date > '1989-${month}-00' AND date < '1989-${endmonth}-00' AND Status = 'pending' AND ID_user = ${id};
    `,(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("booka: ", res);
      result(null, res);
    });
  };

  Book.getAllPurchaseInDay = (year,month,day,result) => {
    sql.query(`
    SELECT books.ISBN FROM Books, Total_Order, Sub_Order
    WHERE Total_Order.Date > '${year}-${month}-${day} 00:00:00' and Total_Order.Date < '${year}-${month}-${parseInt(day)} 23:59:59' and 
    Books.ISBN = Sub_Order.ISBN and Sub_Order.Order_ID=Total_Order.order_ID;
    
    `,(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("booka: ", res);
      result(null, res);
    });
  };


  Book.getAllCountPurchaseInDay = (year,month,day,result) => {
    sql.query(`
    SELECT Books.ISBN, SUM(Sub_Order.Quantity)
    FROM Books, Total_Order, Sub_Order
    WHERE Total_Order.Date > '${year}-${month}-${day} 00:00:00' and 
    Total_Order.Date < '${year}-${month}-${day} 23:59:59' and Books.ISBN = Sub_Order.ISBN and Sub_Order.Order_ID=Total_Order.order_ID
    GROUP BY ISBN;
    `,(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("book: ", res);
      result(null, res);
    });
  };

  Book.getAllCountPurchaseDigitalInDay = (year,month,day,result) => {
    sql.query(`
    SELECT Books.ISBN, SUM(Sub_Order.Quantity)
    FROM Books, Total_Order, Sub_Order
    WHERE Total_Order.Date > '${year}-${month}-${day} 00:00:00' and 
    Total_Order.Date < '${year}-${month}-${day} 23:59:59'
    and Books.ISBN = Sub_Order.ISBN and Sub_Order.Order_ID=Total_Order.order_ID 
    and Books.isDigital = True
    GROUP BY ISBN;
    `,(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("book: ", res);
      result(null, res);
    });
  };

  Book.getAllCountPurchaseNonDigitalInDay = (year,month,day,result) => {
    sql.query(`
    SELECT Books.ISBN, SUM(Sub_Order.Quantity)
    FROM Books, Total_Order, Sub_Order
    WHERE Total_Order.Date > '${year}-${month}-${day} 00:00:00' and 
    Total_Order.Date < '${year}-${month}-${day} 23:59:59'
    and Books.ISBN = Sub_Order.ISBN and Sub_Order.Order_ID=Total_Order.order_ID 
    and Books.isDigital = False
    GROUP BY ISBN;
    `,(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("book: ", res);
      result(null, res);
    });
  };

  Book.countLendInDay = (year,month,day,result) => {
    sql.query(`
    SELECT Books.ISBN, SUM(Sub_Order.Quantity)
    FROM Books, Total_Order, Sub_Order
    WHERE Total_Order.Date > '${year}-${month}-${day} 00:00:00' and 
    Total_Order.Date < '${year}-${month}-${day} 23:59:59'
    and Books.ISBN = Sub_Order.ISBN and Sub_Order.Order_ID=Total_Order.order_ID and 
    Books.isDigital = True and Sub_Order.is_hired = True
    GROUP BY ISBN;
    `,(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("book: ", res);
      result(null, res);
    });
  };

  Book.mostBoughInMonth = (year, month, result) => {
    sql.query(`
    SELECT Books.ISBN, Books.Title, SUM(Sub_Order.Quantity)
    FROM Sub_Order, Total_Order,Books
    WHERE MONTH(Total_Order.Date) = ${month} AND YEAR(Total_Order.Date) = ${year}  and Books.ISBN = Sub_Order.ISBN and Sub_Order.Order_ID=Total_Order.order_ID
    GROUP BY ISBN
    ORDER BY SUM(Sub_Order.Quantity) DESC;
    `,(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("book: ", res);
      result(null, res);
    });
  };

  module.exports = Book;